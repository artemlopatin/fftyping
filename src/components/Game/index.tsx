import React from 'react';
import Phaser from 'phaser'
import GameConfig = Phaser.Types.Core.GameConfig;
import backgroundImage from './images/background.jpg';
import {GAME_CONTAINER_ID} from './constants';

function preload() {
    this.load.image('backgroundImage', backgroundImage);
}

function create() {
    this.add.image(0, 0, 'backgroundImage').setOrigin(0, 0);
}

function update() {
}

export class Game extends React.Component {
    game: Phaser.Game;

    componentDidMount() {
        const gameConfig: GameConfig = {
            width: 800,
            height: 600,
            type: Phaser.AUTO,
            parent: GAME_CONTAINER_ID,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: {y: 200}
                }
            },
            scene: {
                preload: preload,
                create: create,
                update: update
            }
        };

        this.game = new Phaser.Game(gameConfig);
    }

    render() {
        return (
            <div id={GAME_CONTAINER_ID} />
        );
    }

}