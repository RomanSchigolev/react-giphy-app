import { toast } from 'react-hot-toast';
import { AdditionalFeatures, ApiMethod } from 'models';
import { objectToQueryStringParameters } from 'utils';

class ApiConfig {
  url: string;

  constructor(url = '') {
    this.url = url;
  }

  public async send<T>(method: ApiMethod, path: string, additionalFeatures?: AdditionalFeatures): Promise<T> {
    const queryStringParameters = objectToQueryStringParameters(additionalFeatures?.query);

    const response = await fetch(
      `${this.url}${path}?api_key=${import.meta.env.VITE_GIPHY_API_KEY}${queryStringParameters}`,
      {
        method,
      }
    );

    if (!response.ok) {
      // Нужен класс для ошибки
      const errorResponse = 'Error';

      if (additionalFeatures?.showToast) {
        toast.error('Something went wrong');
      }

      throw errorResponse;
    }

    return await response.json();
  }
}

export const api = new ApiConfig(import.meta.env.VITE_GIPHY_API_BASE_URL);
