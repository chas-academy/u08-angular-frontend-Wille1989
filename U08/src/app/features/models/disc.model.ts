import { Manufacturer } from "./manufacturer.model";

export interface Disc {
    id: string;
    title: string;
    type: string;
    speed: number;
    glide: number;
    fade: number;
    turn: number;
    manufacturer: Manufacturer;
}