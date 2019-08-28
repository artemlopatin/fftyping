import React from 'react';
import Phaser from 'phaser'
import {KeyboardScene} from '../../scenes/KeyboardScene';
import {BackgroundScene} from '../../scenes/BackgroundScene';

import {gameConfig} from './constants';

export const GameApp = () => {
    const PhaserGame = new Phaser.Game(gameConfig);

    PhaserGame.scene.add('BackgroundScene', BackgroundScene, true, {x: 0, y: 0});
    PhaserGame.scene.add('KeyboardScene', KeyboardScene, true, {x: 0, y: 0});

    return (<></>);
};