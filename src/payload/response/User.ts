export interface User extends Record<string, unknown> {
  email: string;
  id: number;
  is_active: boolean;
  name: string;
  role: string;
  role_id: number;
}
