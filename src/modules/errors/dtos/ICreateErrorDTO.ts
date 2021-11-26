export default interface ICreateErrorDTO {
  environment_id: number;
  project_id: number;
  body?: string;
  message?: string;
  ip?: string;
  params?: string;
  query?: string;
  headers?: string;
  user?: string;
}
