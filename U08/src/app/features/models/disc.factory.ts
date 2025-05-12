import { DiscCreate } from "./disc.model";

export function createEmptyDisc(): DiscCreate {
    return {
        title: '',
        type: 'Putter',
        speed: 0,
        glide: 0,
        fade: 0,
        turn: 0,
        manufacturer: ''
    };
}
