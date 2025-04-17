export interface BitrixResponse {
  result?: any;
  error?: string;
  error_description?: string;
  time?: {
    start: number;
    finish: number;
    duration: number;
    processing: number;
    date_start: string;
    date_finish: string;
  };
} 