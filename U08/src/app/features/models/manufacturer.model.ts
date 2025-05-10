export interface Manufacturer {
    _id: string;
    name: string;
    country: string;
}

export type PartialManufacturer = Partial<Manufacturer>;