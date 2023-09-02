import { isNullish } from 'services/helpers';

const getStringifiedValue = (value: QueryParamType) => {
  if (isNullish(value)) return;

  if (typeof value === 'number') return value.toString();
  if (typeof value === 'boolean') return `${value}`;

  return value;
};

export default getStringifiedValue;
