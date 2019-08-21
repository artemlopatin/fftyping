import Phaser from 'phaser';
import GameConfig = Phaser.Types.Core.GameConfig;

export const GAME_CONTAINER_ID = 'phaser-container';

export const gameConfig: GameConfig = {
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
};
