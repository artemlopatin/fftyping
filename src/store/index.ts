import {createStore} from 'redux';

import {keyboard} from '../reducers/keyboard';

export const store = createStore(keyboard);