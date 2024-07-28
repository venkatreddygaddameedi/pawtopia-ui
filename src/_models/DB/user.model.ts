export interface User {
  id?: number; // ID should be optional during registration
  name: string;
  email: string;
  phone: string;
  password: string;
}
