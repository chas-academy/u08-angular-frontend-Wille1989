import { Disc } from "./disc.model";

export function createEmptyDisc(): Disc {
    return {
        id: '',
        title: '',
        type: '',
        speed: 0,
        glide: 0,
        fade: 0,
        turn: 0,
        manufacturer: {
            _id: '',
            name: '',
            country: ''
        }
    };
}
