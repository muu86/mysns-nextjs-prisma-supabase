'use client';

import { ChatsQuery, ChatsQueryVariables } from '@/graphql/generated/gql/graphql';
import { QueryChats } from '@/graphql/query/chat';
import { QueryReference, useBackgroundQuery } from '@apollo/client';
import { Session } from 'next-auth';
import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react';
import { ChatAction, chatReducer } from '../reducer/chat-reducer';

export default function ChatContextProvider({ session, children }: PropsWithChildren<{ session: Session | null }>) {
  const [state, dispatch] = useReducer(chatReducer, {});

  const [queryChatRef] = useBackgroundQuery(QueryChats, {
    variables: {
      where: {
        users: {
          some: {
            user: {
              is: {
                email: {
                  equals: session?.user?.email,
                },
              },
            },
          },
        },
      },
    },
  });

  return <ChatContext.Provider value={{ session, state, dispatch, queryChatRef }}>{children}</ChatContext.Provider>;
}

export const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export type ChatContextState = {
  selectedChatId?: string;
};

export type ChatContextType = {
  session: Session | null;
  state: ChatContextState;
  dispatch: Dispatch<ChatAction>;
  queryChatRef: QueryReference<ChatsQuery, ChatsQueryVariables>;
};
