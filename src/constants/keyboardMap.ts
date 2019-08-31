import {KeyboardMap} from '../types/KeyboardMap';
import {Finger} from '../enums/finger';
import {KeyboardEventCode} from '../enums/keyboardEventCode';

export const keyboardMap: KeyboardMap = [
    [
        {
            code: KeyboardEventCode.Backquote,
            keyCode: 192,
            finger: Finger.LeftPinky,
            symbol: {
                normal: 'ё',
                withShift: 'Ё'
            },
        },
        {
            code: KeyboardEventCode.Digit1,
            keyCode: 49,
            finger: Finger.LeftPinky,
            symbol: {
                normal: '1',
                withShift: '!'
            },
        },
        {
            code: KeyboardEventCode.Digit2,
            keyCode: 50,
            finger: Finger.LeftRing,
            symbol: {
                normal: '2',
                withShift: '"'
            },
        },
        {
            code: KeyboardEventCode.Digit3,
            keyCode: 51,
            finger: Finger.LeftMiddle,
            symbol: {
                normal: '3',
                withShift: '№'
            },
        },
        {
            code: KeyboardEventCode.Digit4,
            keyCode: 52,
            finger: Finger.LeftIndex,
            symbol: {
                normal: '4',
                withShift: ';'
            },
        },
        {
            code: KeyboardEventCode.Digit5,
            keyCode: 53,
            finger: Finger.LeftIndex,
            symbol: {
                normal: '5',
                withShift: '%'
            },
        },
        {
            code: KeyboardEventCode.Digit6,
            keyCode: 54,
            finger: Finger.RightIndex,
            symbol: {
                normal: '6',
                withShift: ':'
            },
        },
        {
            code: KeyboardEventCode.Digit7,
            keyCode: 55,
            finger: Finger.RightIndex,
            symbol: {
                normal: '7',
                withShift: '?'
            },
        },
        {
            code: KeyboardEventCode.Digit8,
            keyCode: 56,
            finger: Finger.RightMiddle,
            symbol: {
                normal: '8',
                withShift: '*'
            },
        },
        {
            code: KeyboardEventCode.Digit9,
            keyCode: 57,
            finger: Finger.RightRing,
            symbol: {
                normal: '9',
                withShift: '('
            },
        },
        {
            code: KeyboardEventCode.Digit0,
            keyCode: 48,
            finger: Finger.RightPinky,
            symbol: {
                normal: '0',
                withShift: ')'
            },
        },
        {
            code: KeyboardEventCode.Minus,
            keyCode: 189,
            finger: Finger.RightPinky,
            symbol: {
                normal: '-',
                withShift: '_'
            },
        },
        {
            code: KeyboardEventCode.Equal,
            keyCode: 187,
            finger: Finger.RightPinky,
            symbol: {
                normal: '=',
                withShift: '+'
            },
        },
    ],
    [
        {
            code: KeyboardEventCode.KeyQ,
            keyCode: 81,
            finger: Finger.LeftPinky,
            symbol: {
                normal: 'й',
                withShift: 'Й'
            },
        },
        {
            code: KeyboardEventCode.KeyW,
            keyCode: 87,
            finger: Finger.LeftRing,
            symbol: {
                normal: 'ц',
                withShift: 'Ц'
            },
        },
        {
            code: KeyboardEventCode.KeyE,
            keyCode: 69,
            finger: Finger.LeftMiddle,
            symbol: {
                normal: 'у',
                withShift: 'У'
            },
        },
        {
            code: KeyboardEventCode.KeyR,
            keyCode: 82,
            finger: Finger.LeftIndex,
            symbol: {
                normal: 'к',
                withShift: 'К'
            },
        },
        {
            code: KeyboardEventCode.KeyT,
            keyCode: 84,
            finger: Finger.LeftIndex,
            symbol: {
                normal: 'е',
                withShift: 'Е'
            },
        },
        {
            code: KeyboardEventCode.KeyY,
            keyCode: 89,
            finger: Finger.RightIndex,
            symbol: {
                normal: 'н',
                withShift: 'Н'
            },
        },
        {
            code: KeyboardEventCode.KeyU,
            keyCode: 85,
            finger: Finger.RightIndex,
            symbol: {
                normal: 'г',
                withShift: 'Г'
            },
        },
        {
            code: KeyboardEventCode.KeyI,
            keyCode: 73,
            finger: Finger.RightMiddle,
            symbol: {
                normal: 'ш',
                withShift: 'Ш'
            },
        },
        {
            code: KeyboardEventCode.KeyO,
            keyCode: 79,
            finger: Finger.RightRing,
            symbol: {
                normal: 'щ',
                withShift: 'Щ'
            },
        },
        {
            code: KeyboardEventCode.KeyP,
            keyCode: 80,
            finger: Finger.RightPinky,
            symbol: {
                normal: 'з',
                withShift: 'З'
            },
        },
        {
            code: KeyboardEventCode.BracketLeft,
            keyCode: 219,
            finger: Finger.RightPinky,
            symbol: {
                normal: 'х',
                withShift: 'Х'
            },
        },
        {
            code: KeyboardEventCode.BracketRight,
            keyCode: 221,
            finger: Finger.RightPinky,
            symbol: {
                normal: 'ъ',
                withShift: 'Ъ'
            },
        },
    ],
    [
        {
            code: KeyboardEventCode.KeyA,
            keyCode: 65,
            finger: Finger.LeftPinky,
            symbol: {
                normal: 'ф',
                withShift: 'Ф'
            },
        },
        {
            code: KeyboardEventCode.KeyS,
            keyCode: 83,
            finger: Finger.LeftRing,
            symbol: {
                normal: 'ы',
                withShift: 'Ы'
            },
        },
        {
            code: KeyboardEventCode.KeyD,
            keyCode: 68,
            finger: Finger.LeftMiddle,
            symbol: {
                normal: 'в',
                withShift: 'В'
            },
        },
        {
            code: KeyboardEventCode.KeyF,
            keyCode: 70,
            finger: Finger.LeftIndex,
            symbol: {
                normal: 'а',
                withShift: 'А'
            },
        },
        {
            code: KeyboardEventCode.KeyG,
            keyCode: 71,
            finger: Finger.LeftIndex,
            symbol: {
                normal: 'п',
                withShift: 'П'
            },
        },
        {
            code: KeyboardEventCode.KeyH,
            keyCode: 72,
            finger: Finger.RightIndex,
            symbol: {
                normal: 'р',
                withShift: 'Р'
            },
        },
        {
            code: KeyboardEventCode.KeyJ,
            keyCode: 74,
            finger: Finger.RightIndex,
            symbol: {
                normal: 'о',
                withShift: 'О'
            },
        },
        {
            code: KeyboardEventCode.KeyK,
            keyCode: 75,
            finger: Finger.RightMiddle,
            symbol: {
                normal: 'л',
                withShift: 'Л'
            },
        },
        {
            code: KeyboardEventCode.KeyL,
            keyCode: 76,
            finger: Finger.RightRing,
            symbol: {
                normal: 'д',
                withShift: 'Д'
            },
        },
        {
            code: KeyboardEventCode.Semicolon,
            keyCode: 186,
            finger: Finger.RightPinky,
            symbol: {
                normal: 'ж',
                withShift: 'Ж'
            },
        },
        {
            code: KeyboardEventCode.Quote,
            keyCode: 222,
            finger: Finger.RightPinky,
            symbol: {
                normal: 'э',
                withShift: 'Э'
            },
        },
    ],
    [
        {
            code: KeyboardEventCode.KeyZ,
            keyCode: 90,
            finger: Finger.LeftPinky,
            symbol: {
                normal: 'я',
                withShift: 'Я'
            },
        },
        {
            code: KeyboardEventCode.KeyX,
            keyCode: 88,
            finger: Finger.LeftRing,
            symbol: {
                normal: 'ч',
                withShift: 'Ч'
            },
        },
        {
            code: KeyboardEventCode.KeyC,
            keyCode: 67,
            finger: Finger.LeftMiddle,
            symbol: {
                normal: 'с',
                withShift: 'С'
            },
        },
        {
            code: KeyboardEventCode.KeyV,
            keyCode: 86,
            finger: Finger.LeftIndex,
            symbol: {
                normal: 'м',
                withShift: 'М'
            },
        },
        {
            code: KeyboardEventCode.KeyB,
            keyCode: 66,
            finger: Finger.LeftIndex,
            symbol: {
                normal: 'и',
                withShift: 'И'
            },
        },
        {
            code: KeyboardEventCode.KeyN,
            keyCode: 78,
            finger: Finger.RightIndex,
            symbol: {
                normal: 'т',
                withShift: 'Т'
            },
        },
        {
            code: KeyboardEventCode.KeyM,
            keyCode: 77,
            finger: Finger.RightIndex,
            symbol: {
                normal: 'ь',
                withShift: 'Ь'
            },
        },
        {
            code: KeyboardEventCode.Comma,
            keyCode: 188,
            finger: Finger.RightMiddle,
            symbol: {
                normal: 'б',
                withShift: 'Б'
            },
        },
        {
            code: KeyboardEventCode.Period,
            keyCode: 190,
            finger: Finger.RightRing,
            symbol: {
                normal: 'ю',
                withShift: 'Ю'
            },
        },
    ],
    [
        {
            code: KeyboardEventCode.Space,
            keyCode: 32,
            finger: Finger.Thumb,
            symbol: {
                normal: ' ',
                withShift: ' '
            }
        }
    ]
];