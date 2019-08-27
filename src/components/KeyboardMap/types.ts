import {Finger} from '../../scenes/KeyboardScene/KeyboardButton/enums';

export type KeySymbol = {
    normal: string;
    withShift: string;
}

export type KeyboardKey = {
    keyCode: number;
    finger: Finger;
    symbol: KeySymbol;
};

export type KeyboardRow = KeyboardKey[];

export type KeyboardMap = KeyboardRow[];