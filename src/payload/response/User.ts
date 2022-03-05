export interface User extends Record<string, unknown> {
  assigned_projects: number[];
  email: string;
  email_notifications: boolean;
  id: number;
  is_active: boolean;
  is_admin: boolean;
  name: string;
  role: string;
  role_id: number;
  group_ids: number[];
  mfa_required: boolean;
  sso_enabled: boolean;
}
