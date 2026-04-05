export type AddUser = Record<string, unknown> & {
  assigned_projects?: number[] | undefined;
  email?: string | undefined;
  email_notifications?: boolean | undefined;
  is_admin?: boolean | undefined;
  group_ids?: number[] | undefined;
  mfa_required?: boolean | undefined;
  name?: string | undefined;
  role_id?: number | undefined;
  sso_enabled?: boolean | undefined;
};
