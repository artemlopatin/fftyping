import React from 'react';
import Phaser from 'phaser'
import {GameContext} from '../GameContext'
import {gameConfig} from './constants';

const PhaserGame = new Phaser.Game(gameConfig);

export class GameApp extends React.Component {
    render() {
        return (
            <GameContext.Provider value={PhaserGame}>
                <div />
            </GameContext.Provider>
        );
    }
}