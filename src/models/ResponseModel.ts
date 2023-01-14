import { Gif, PaginationData, MeteData } from 'models';

export interface Response {
  data: Gif[];
  pagination: PaginationData;
  meta: MeteData;
}
