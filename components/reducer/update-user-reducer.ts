import { UpdateUserContextState } from '@/components/context/update-user-context';
import { produce } from 'immer';

export type UpdateUserActionType =
  | 'setUsername'
  | 'setContent'
  | 'setFile'
  | 'setIsUploading'
  | 'setBabyBirth'
  | 'addAddress'
  | 'removeAddress';

export type UpdateUserAction =
  | { type: 'setUsername'; payload: string }
  | { type: 'setContent'; payload: string }
  | { type: 'setFile'; payload: UpdateUserContextState['newFile'] }
  | { type: 'setIsUploading'; payload: boolean }
  | { type: 'setBabyBirth'; payload: UpdateUserContextState['babyBirth'] }
  | { type: 'addAddress'; payload: UpdateUserContextState['address'][number] }
  | { type: 'removeAddress'; payload: UpdateUserContextState['address'][number] };

export const updateUserReducer = produce((draft: UpdateUserContextState, action: UpdateUserAction) => {
  switch (action.type) {
    case 'setUsername': {
      draft.username = action.payload;
      break;
    }
    case 'setContent': {
      draft.content = action.payload;
      break;
    }
    case 'setFile': {
      draft.newFile = action.payload;
      break;
    }
    case 'setIsUploading': {
      draft.isUploading = action.payload;
      break;
    }
    case 'setBabyBirth': {
      draft.babyBirth = action.payload;
      break;
    }
    case 'addAddress': {
      draft.address.push(action.payload);
      console.log(draft.address.length);
      break;
    }
    case 'removeAddress': {
      console.log(action.payload);
      draft.address.splice(
        draft.address.findIndex((a) => a.id === action.payload.id),
        1
      );
      console.log(draft.address.length);
      break;
    }
  }
});
