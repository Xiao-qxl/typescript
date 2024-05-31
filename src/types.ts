import { Color } from "./enums";

export type NormalCard = {
    color: Color;
    mark: string;
};
export type Deck = NormalCard[];
