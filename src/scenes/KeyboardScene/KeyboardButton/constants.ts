import {Color} from '../../../enums/color';

import {ColorByFinger} from './types';
import {Finger} from '../../../enums/finger';

export const BACKGROUND_COLOR_BY_FINGER: ColorByFinger = {
    [Finger.LeftPinky]: Color.Set1Background,
    [Finger.LeftRing]: Color.Set2Background,
    [Finger.LeftMiddle]: Color.Set3Background,
    [Finger.LeftIndex]: Color.Set4Background,
    [Finger.Thumb]: Color.Set5Background,
    [Finger.RightIndex]: Color.Set6Background,
    [Finger.RightMiddle]: Color.Set7Background,
    [Finger.RightRing]: Color.Set8Background,
    [Finger.RightPinky]: Color.Set9Background,
};

export const BORDER_COLOR_BY_FINGER: ColorByFinger = {
    [Finger.LeftPinky]: Color.Set1Border,
    [Finger.LeftRing]: Color.Set2Border,
    [Finger.LeftMiddle]: Color.Set3Border,
    [Finger.LeftIndex]: Color.Set4Border,
    [Finger.Thumb]: Color.Set5Border,
    [Finger.RightIndex]: Color.Set6Border,
    [Finger.RightMiddle]: Color.Set7Border,
    [Finger.RightRing]: Color.Set8Border,
    [Finger.RightPinky]: Color.Set9Border,
};