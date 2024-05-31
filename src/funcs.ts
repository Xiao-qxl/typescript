import { Mark, Color } from "./enums";
import { Deck } from "./types";

// 创建一副牌
export function createDeck(): Deck {
    const deck: Deck = []
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    for (const m of marks) {
        for (const c of colors) {
            deck.push({ color: c, mark: m })
        }
    }
    return deck;
}

// 示例：打印一副牌，以验证功能
export function printDeck(deck: Deck) {
    const text = deck.reduce((acc, card, i) => {
        const tempAcc = acc + `${card.color} ${card.mark} \t`
        return i % 4 === 3 ? tempAcc + "\n" : tempAcc
    }, "")
    console.log(text);
}