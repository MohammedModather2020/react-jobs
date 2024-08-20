export interface IJobsResponse {
  jobs: IJobs[];
  pagination: IPagnation;
}


export interface IJobs {
  uuid: string;
  title: string;
}

export interface IPagnation {
  limit: number;
  total: number;
  page: number;
  pages: number;
}


export interface IPageNumbersProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}