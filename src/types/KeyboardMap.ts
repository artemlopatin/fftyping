import {Finger} from '../enums/finger';
import {KeyboardEventCode} from '../enums/keyboardEventCode';

export type KeySymbol = {
    normal: string;
    withShift: string;
}

export type KeyboardKey = {
    code: KeyboardEventCode;
    keyCode: number;
    finger: Finger;
    symbol: KeySymbol;
};

export type KeyboardRow = KeyboardKey[];

export type KeyboardMap = KeyboardRow[];