import { get } from 'lodash';

export const createSelectors = keys => {
  const getState = keys => state => get(state, keys);

  const getEntity = keys => state => getState(keys)(state);
  const getData = keys => state => getEntity(keys)(state).data;
  const getMeta = keys => state => getEntity(keys)(state).meta;
  const isFetching = keys => state => getMeta(keys)(state).isFetching;
  const error = keys => state => getMeta(keys)(state).error;

  return {
    getEntity: getEntity(keys),
    getData: getData(keys),
    getMeta: getMeta(keys),
    isFetching: isFetching(keys),
    error: error(keys),
  };
};