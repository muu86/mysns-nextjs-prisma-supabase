import { produce } from 'immer';
import { ConmmentContextState } from '../context/comment-context';
import { CommentsQuery } from '@/graphql/generated/gql/graphql';

const COMMENT_COUNT_PER_PAGE = 5;

export type CommentActionType = 'next' | 'prev' | 'batchComment';

export type CommentAction =
  | { type: 'next' }
  | { type: 'prev' }
  | { type: 'batchComment'; payload: CommentsQuery['comments'] };

export const commentReducer = produce((draft: ConmmentContextState, action: CommentAction) => {
  switch (action.type) {
    case 'next': {
      console.log('in next');
      console.log('in next ', 'draft.comments.length ', draft.comments?.length);
      if (!draft.comments) return;
      if (draft.page * COMMENT_COUNT_PER_PAGE >= draft.comments.length) {
        return;
      }
      draft.page = draft.page + 1;
      break;
    }
    case 'prev': {
      if (!draft.comments) return;
      if (draft.page <= 1) {
        return;
      }
      draft.page = draft.page - 1;
      break;
    }
    case 'batchComment': {
      draft.comments = action.payload;
    }
  }
});
