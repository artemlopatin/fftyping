import {Finger} from '../../../enums/finger';
import {KeyboardEventCode} from '../../../enums/keyboardEventCode';

export type Params = {
    /** KeyboardEvent Code */
    code: KeyboardEventCode;

    /** row number */
    row: number;

    /** column number */
    column: number;

    /** displayed symbol on the button */
    symbol: string;

    /** finger */
    finger: Finger;
}

export type ColorByFinger = {
    [key in Finger]: number;
}