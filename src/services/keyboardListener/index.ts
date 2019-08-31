import {fromEvent} from 'rxjs';
import {store} from '../../store';
import {KeyDownAction, KeyUpAction} from '../../actions/keyboard';
import {KeyboardEventCode} from '../../enums/keyboardEventCode';
import {filter} from 'rxjs/operators';

export const keyboardListener = () => {
    const keyDown = fromEvent(document, 'keydown');
    keyDown
        .pipe(
            filter((e: KeyboardEvent) => !e.repeat),
            filter((e: KeyboardEvent) => e.code in KeyboardEventCode),
        )
        .subscribe((data: KeyboardEvent) => {
            store.dispatch(KeyDownAction(data));
        });

    const keyUp = fromEvent(document, 'keyup');
    keyUp.subscribe((data: KeyboardEvent) => {
        store.dispatch(KeyUpAction(data));
    });
};