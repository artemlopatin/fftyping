import {omit} from 'lodash';
import {KeyboardAction} from '../actions/keyboard';
import {KeyboardEventCode} from '../enums/keyboardEventCode';

type keyboardStore = {
    pressedKeys: { [key in KeyboardEventCode]?: KeyboardEvent }
}
const initialState: keyboardStore = {
    pressedKeys: {}
};

export const keyboard = (state = initialState, action: any) => {
    switch (action.type) {

        case KeyboardAction.KEY_DOWN:
            const data: KeyboardEvent = action.payload;

            return {
                ...state,
                pressedKeys: Object.assign({}, state.pressedKeys, {[data.code]: data})
            };

        case KeyboardAction.KEY_UP:
            return {
                ...state,
                pressedKeys: omit(state.pressedKeys, action.payload.code)
            };

        default:
            return state;
    }
};