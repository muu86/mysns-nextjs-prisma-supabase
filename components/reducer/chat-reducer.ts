import { produce } from 'immer';
import { ChatContextState } from '../context/chat-context';

export type ChatActionType = 'chat/select';

export type ChatAction = { type: 'chat/select'; payload: string };

export const chatReducer = produce((draft: ChatContextState, action: ChatAction) => {
  switch (action.type) {
    case 'chat/select': {
      draft.selectedChatId = action.payload;
      break;
    }
  }
});
