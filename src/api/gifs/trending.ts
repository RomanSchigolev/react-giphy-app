import { api } from 'api';
import { Gif, Response } from 'models';

export const getTrendingGifs = async (): Promise<Gif[]> => {
  const result = await api.send<Response>('GET', '/trending', { showToast: true });
  return result.data;
};
