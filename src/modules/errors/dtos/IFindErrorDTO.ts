export default interface ICreateErrorDTO {
  filters: {
    environment_id?: number;
    project_id?: number;
    ip?: string;
  };
  order: {
    [key: string]: 'ASC' | 'DESC';
  };
  page: number;
  limit: number;
}
