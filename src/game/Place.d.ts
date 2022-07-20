import { Rectangle } from "../utils/Utils";
import { Item } from './Item';
export declare class Place extends Rectangle {
    item: Item | null;
    private position;
    fixed: boolean;
    private data;
    constructor(position: number, data: Object);
    add: (item: Item) => void;
    get empty(): boolean;
    clear: () => void;
    free: () => void;
    get correct(): boolean;
    fix: () => void;
    wrong: () => void;
}
