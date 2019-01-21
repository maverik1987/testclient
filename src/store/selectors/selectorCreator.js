export const createSelectors = (storeKey, entityKey) => {
  const getState = storeKey => state => state[storeKey];

  const getEntity = (storeKey, entityKey) => state => getState(storeKey)(state)[entityKey];
  const getData = (storeKey, entityKey) => state => getEntity(storeKey, entityKey)(state).data;
  const getMeta = (storeKey, entityKey) => state => getEntity(storeKey, entityKey)(state).meta;
  const isFetching = (storeKey, entityKey) => state => getMeta(storeKey, entityKey)(state).isFetching;
  const error = (storeKey, entityKey) => state => getMeta(storeKey, entityKey)(state).error;

  return {
    getEntity: getEntity(storeKey, entityKey),
    getData: getData(storeKey, entityKey),
    getMeta: getMeta(storeKey, entityKey),
    isFetching: isFetching(storeKey, entityKey),
    error: error(storeKey, entityKey),
  };
};