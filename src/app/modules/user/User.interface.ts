export type IUserFilters = {
  searchTerm?: string;
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  role?: 'admin' | 'host' | 'user';
  contactNo?: string;
  district?: string;
  division?: string;
  village?: string;
  address?: string;
  profileImg?: string;
};
