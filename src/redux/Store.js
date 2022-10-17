import {legacy_createStore as createStore} from 'redux';

import Reducer, {initialState} from './Reducer';

export const store = createStore(Reducer, initialState);
