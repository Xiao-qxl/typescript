import { Color } from "./enums";

export type Deck = Card[];

export interface Card {
    getString(): string
}

export interface NormalCard extends Card {
    color: Color;
    mark: string;
};

export interface Joker extends Card {
    type: "big" | "small"
}