import * as PIXI from 'pixi.js';
export declare class Game extends PIXI.Container {
    private data;
    private items;
    private btn_check;
    private places;
    constructor();
    private onItemReturn;
    private sortStack;
    private sortStackByPos;
    private onItemDrop;
    private check_filled;
    private sort_areas;
    resetFilter: () => void;
    show: () => void;
    hide: () => void;
    private onHideComplete;
    get correct(): boolean;
    retry: () => void;
    private onCheckClick;
}
