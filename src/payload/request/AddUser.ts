export interface AddUser extends Record<string, unknown> {
  assigned_projects?: number[];
  email?: string;
  email_notifications?: boolean;
  is_admin?: boolean;
  group_ids?: number[];
  mfa_required?: boolean;
  name: string;
  role_id: number;
  sso_enabled: boolean;
}
