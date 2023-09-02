import { getStringifiedValue } from 'services/helpers';
import { objectEntries, objectKeys } from 'types/tsUtils';

const getQueryParams = (params: Record<string, QueryParamType>) => {
  const queryParams = objectEntries(params).reduce(
    (acc, [key, value]) => {
      if (getStringifiedValue(value)) {
        return { ...acc, [key]: value };
      }

      return acc;
    },
    {} as Record<string, QueryParamType>,
  );

  if (objectKeys(queryParams).length > 0) {
    return objectKeys(queryParams)
      .map(key => `${key}=${queryParams[key]}`)
      .join('&');
  }

  return '';
};

export default getQueryParams;
