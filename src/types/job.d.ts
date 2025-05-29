export interface Job {
  job_id: string;
  job_title: string;
  job_description?: string;
  job_city?: string;
  job_country?: string;
  job_employment_type?: string;
  job_highlights?: {
    Qualifications?: string[];
    [key: string]: unknown;
  };
  job_google_link?: string;
}
