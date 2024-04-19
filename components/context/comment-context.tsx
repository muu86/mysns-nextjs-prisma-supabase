'use client';

import { CommentsQuery } from '@/graphql/generated/gql/graphql';
import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react';
import { CommentAction, commentReducer } from '../reducer/comment-reducer';

const COMMENT_COUNT_PER_PAGE = 5;

export default function CommentContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(commentReducer, {
    page: 1,
  });

  function isInPage(index: number) {
    return index >= (state.page - 1) * COMMENT_COUNT_PER_PAGE && index < state.page * COMMENT_COUNT_PER_PAGE;
  }

  return <CommentContext.Provider value={{ state, dispatch, isInPage }}>{children}</CommentContext.Provider>;
}

export const CommentContext = createContext<CommentContextType>({} as CommentContextType);

export type ConmmentContextState = {
  comments?: CommentsQuery['comments'];
  page: number;
};

export type CommentContextType = {
  state: ConmmentContextState;
  dispatch: Dispatch<CommentAction>;
  isInPage: (index: number) => boolean;
};
