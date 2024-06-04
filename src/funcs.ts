import { Mark, Color } from "./enums";
import { Deck, Joker, NormalCard } from "./types";

// 创建一副牌
export function createDeck(): Deck {
    const deck: Deck = []
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    for (const m of marks) {
        for (const c of colors) {
            const card: NormalCard = {
                color: c, mark: m, getString() {
                    return `${this.color} ${this.mark}`
                }
            }
            deck.push(card)
        }
    }
    /*
     * 创建小王和大王
     */
    let joker: Joker = {
        type: "small",
        getString: () => "jo",
    }
    deck.push(joker)
    joker = {
        type: "big",
        getString: () => "JO",
    }
    deck.push(joker)
    return deck;
}

// 示例：打印一副牌，以验证功能
export function printDeck(deck: Deck) {
    const text = deck.reduce((acc, card, i) => {
        const tempAcc = acc + `${card.getString()} \t`
        return i % 4 === 3 ? tempAcc + "\n" : tempAcc
    }, "")
    console.log(text);
}