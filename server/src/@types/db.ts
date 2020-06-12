import schema from '../models/schema';

export interface WanderDB {
  users: typeof schema.users.Users;
  doggos: typeof schema.doggos.Doggos;
}
