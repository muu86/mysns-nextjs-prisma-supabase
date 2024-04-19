import { PropsWithChildren, createContext, useReducer } from 'react';
import { globalReducer } from '../reducer/global-reducer';

export default function GlobalContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(globalReducer, {
    newMessages: [],
  });
  return <GlobalContext.Provider value={{ state }}>{children}</GlobalContext.Provider>;
}

export const GlobalContext = createContext({} as GlobalContextType);

export type GlobalContextState = {
  newMessages: { chatId: number; count: number }[];
};

type GlobalContextType = {
  state: GlobalContextState;
};
