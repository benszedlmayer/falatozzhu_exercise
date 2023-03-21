import {Item} from '../types/types';

export type RootParams = {
  read: undefined;
  createEdit: {
    mode: 'edit' | 'create';
    item?: Item;
  };
};
