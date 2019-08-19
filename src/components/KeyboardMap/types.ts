export type KeySymbol = {
    normal: string;
    withShift: string;
}

export type KeyboardKey = {
    keyCode: number;
    symbol: KeySymbol;
};

export type KeyboardRow = KeyboardKey[];

export type KeyboardMap = KeyboardRow[];