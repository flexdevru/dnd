import * as PIXI from 'pixi.js';
export declare class ReflectionRight extends PIXI.Container {
    private data;
    private btnNext;
    private btnClose;
    constructor();
    show: () => void;
    hide: () => void;
    private onHideComplete;
    private onNextClick;
    private onCloseClick;
}
