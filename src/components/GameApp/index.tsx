import React from 'react';
import Phaser from 'phaser'
import {KeyboardScene} from '../../scenes/KeyboardScene';
import {BackgroundScene} from '../../scenes/BackgroundScene';
import {gameConfig} from './constants';
import {keyboardListener} from '../../services/keyboardListener';
import {store} from '../../store';
import {BattlefieldScene} from '../../scenes/BattlefieldScene';

export const GameApp = () => {
    const PhaserGame = new Phaser.Game(gameConfig);
    keyboardListener();

    store.subscribe(() => {
        console.log(Object.keys(store.getState().pressedKeys))
    });

    PhaserGame.scene.add('BackgroundScene', BackgroundScene, true, {x: 0, y: 0});
    PhaserGame.scene.add('BattlefieldScene', BattlefieldScene, true, {x: 0, y: 0});
    PhaserGame.scene.add('KeyboardScene', KeyboardScene, true, {x: 0, y: 0});

    return (<></>);
};