import {Finger} from './enums';

export type Params = {
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