import * as PIXI from 'pixi.js';
export declare class Main extends PIXI.Container {
    static DEBUG: boolean;
    static instance: Main;
    private tutorial;
    private game;
    private reflection_right;
    private btn_look;
    constructor();
    private onAssetsLoadComplete;
    private onRestore;
    private createChildren;
    private onTutorialComplete;
    private onGameComplete;
    private onReflectionRightComplete;
    private onReflectionNext;
    private onLookClick;
}
