export interface SceneInterface {
    /**
     * This method is called by the Scene Manager when the scene starts, before preload() and create().
     * @param  {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start(). Same as Scene.settings.data.
     * @returns {void}
     */
    init(data: object): void;

    /**
     * This method is called by the Scene Manager, after init() and before create()
     * @returns void
     */
    preload(): void;

    /**
     * This method is called by the Scene Manager when the scene starts, after init() and preload()
     * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start(). Same as Scene.settings.data.
     * @returns {void}
     */
    create(data: object): void;

    /**
     * This method is called once per game step while the scene is running.
     * @param {number} time The current time
     * @param {number} delta The delta time in ms since the last frame
     * @returns {void}
     */
    update(time: number, delta: number): void;
}
