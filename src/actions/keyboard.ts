export enum KeyboardAction {
    KEY_DOWN = 'keyboard-actions/key-down',
    KEY_UP = 'keyboard-actions/key-up',
}

export const KeyDownAction = (data: any) => {
    return {
        type: KeyboardAction.KEY_DOWN,
        payload: data
    };
};

export const KeyUpAction = (data: any) => {
    return {
        type: KeyboardAction.KEY_UP,
        payload: data
    };
};