export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface AdditionalFeatures {
  showToast?: boolean;
  query?: Record<string, unknown>;
}
