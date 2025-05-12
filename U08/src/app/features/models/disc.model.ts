import { Manufacturer } from "./manufacturer.model";

export interface Disc {
    _id: string;
    title: string;
    type: string;
    speed: number;
    glide: number;
    fade: number;
    turn: number;
    manufacturer: Manufacturer;
}

export type PartialDisc = Partial<Disc>;

export interface DiscCreate {
  manufacturer: string;
  title: string;
  type: "Distance Driver" | "Driver" | "Mid-Range" | "Putter";
  speed: number;
  glide: number;
  turn: number;
  fade: number;
}
