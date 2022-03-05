export interface Role extends Record<string, unknown> {
  id: number;
  name: string;
  is_default: boolean;
  is_project_admin: boolean;
}
