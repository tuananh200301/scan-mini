import { NOT_FOUND } from 'redux-first-router';
import {
  ROUTE_HOME,
} from './state/modules/routing';

const routeMap = {
  [NOT_FOUND]: {
    path: '/not-found',
    component: 'NotFound',
  },
  [ROUTE_HOME]: {
    path: '/scan-mini',
    component: 'HomePage',
  },
}

export default routeMap;