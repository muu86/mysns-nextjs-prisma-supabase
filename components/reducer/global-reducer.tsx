import { produce } from 'immer';
import { GlobalContextState } from '../context/global-context';

export type GlobalActionType = 'chat/addNewMessage';

export type GlobalAction = { type: 'chat/addNewMessage'; payload: { chatId: number } };

export const globalReducer = produce((draft: GlobalContextState, action: GlobalAction) => {
  switch (action.type) {
    case 'chat/addNewMessage': {
      draft.newMessages;
      break;
    }
  }
});
