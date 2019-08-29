import {fromEvent} from 'rxjs';
import {store} from '../../store';
import {KeyDownAction, KeyUpAction} from '../../actions/keyboard';

export const keyboardListener = () => {
    const keyDown = fromEvent(document, 'keydown');
    keyDown.subscribe((data: KeyboardEvent) => {
        if (!data.repeat) {
            store.dispatch(KeyDownAction(data));
        }
    });

    const keyUp = fromEvent(document, 'keyup');
    keyUp.subscribe((data: KeyboardEvent) => {
        store.dispatch(KeyUpAction(data));
    });
};