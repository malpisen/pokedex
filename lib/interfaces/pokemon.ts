export interface Pokemon {
    id: string;
    name: string;
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
    types: {
        slot: number;
        type: {
            name: string;
        };
    }[];
    sprites: {
        front_default: string;
    };
}