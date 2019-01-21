import { create } from 'axios';
import { get } from 'lodash';
import qs from 'qs';

export default create({
  withCredentials: true,
  timeout: 60000,
  baseURL: 'http://localhost:8000',
  paramsSerializer: params => qs.stringify(params, { indices: false }),
}).request;