import querystring from 'query-string';

export const objectToQueryStringParameters = (object?: Record<string, unknown>): string => {
  if (typeof object === 'object' && object !== null) {
    const resultString = querystring.stringify(object, {
      skipEmptyString: true,
      sort: false,
    });

    return `&${resultString}`;
  } else {
    return '';
  }
};
