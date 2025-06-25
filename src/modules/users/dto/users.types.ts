import {
  Tables,
  TablesInsert,
  TablesUpdate,
} from '../../../database/database.types';

export type Users = Tables<'users'>;
export type NewUsers = TablesInsert<'users'>;
export type UpdateUsers = TablesUpdate<'users'>;
