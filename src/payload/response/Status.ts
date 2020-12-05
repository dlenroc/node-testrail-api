export interface Status extends Record<string, unknown> {
  color_bright: number;
  color_dark: number;
  color_medium: number;
  id: number;
  is_final: boolean;
  is_system: boolean;
  is_untested: boolean;
  label: string;
  name: string;
}
