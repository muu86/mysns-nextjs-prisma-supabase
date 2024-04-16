import { UserContextState } from '@/components/context/update-user-context';
import { ImageFile } from '@/lib/types';
import { produce } from 'immer';
import { Dispatch } from 'react';

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
  | { type: 'setFile'; payload: UserContextState['file'] }
  | { type: 'setIsUploading' }
  | { type: 'setBabyBirth'; payload: UserContextState['babyBirth'] }
  | { type: 'addAddress'; payload: UserContextState['address'][number] }
  | { type: 'removeAddress'; payload: UserContextState['address'][number] };

export const updateUserReducer = produce((draft: UserContextState, action: UpdateUserAction) => {
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
      draft.file = action.payload;
      break;
    }
    case 'setIsUploading': {
      draft.isUploading = !draft.isUploading;
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

// export type ActionWrapper =
//   | Exclude<UpdateUserAction, { type: 'setFile'; payload: UserContextState['file'] }>
//   | { type: 'setFile'; payload: File };

// export function createDispatchWrapper(state: UserContextState, dispatch: Dispatch<UpdateUserAction>) {
//   return async function (action: ActionWrapper) {
//     switch (action.type) {
//       case 'setFile': {
//         dispatch({ type: 'setIsUploading' });

//         const file = action.payload;
//         if (!file) return;

//         const tempUrl = URL.createObjectURL(file);
//         const newFile: ImageFile = { tempUrl, file };
//         dispatch({ type: 'setFile', payload: { tempUrl, file } });

//         await uploadFile(newFile);

//         dispatch({ type: 'setIsUploading' });
//         break;
//       }

//       default:
//         dispatch(action);
//     }
//   };
// }
