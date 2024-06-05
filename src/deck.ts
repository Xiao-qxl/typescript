import { Mark, Color } from "./enums";
import { Card, Joker, NormalCard } from "./types";

interface PublishResult {
    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck
}

export class Deck {
    private cards: Card[] = [];

    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards
        } else {
            this._init()
        }
    }

    private _init() {
        const marks = Object.values(Mark)
        const colors = Object.values(Color)
        for (const m of marks) {
            for (const c of colors) {
                const card: NormalCard = {
                    color: c, mark: m, getString() {
                        return `${this.color} ${this.mark}`
                    }
                }
                this.cards.push(card)
            }
        }
        /*
         * 创建小王和大王
         */
        let joker: Joker = {
            type: "small",
            getString: () => "jo",
        }
        this.cards.push(joker)
        joker = {
            type: "big",
            getString: () => "JO",
        }
        this.cards.push(joker)
    }

    printDeck() {
        const text = this.cards.reduce((acc, card, i) => {
            const tempAcc = acc + `${card.getString()} \t`
            return i % 4 === 3 ? tempAcc + "\n" : tempAcc
        }, "")
        console.log(text);
    }

    // 洗牌
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            const j = this.getRandom(0, this.cards.length)
            const temp = this.cards[i]
            this.cards[i] = this.cards[j]
            this.cards[j] = temp
        }
    }

    /*
    发牌
    * @return card[]
    */
    publish(): PublishResult {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck
        player1 = this.takeCards(17)
        player2 = this.takeCards(17)
        player3 = this.takeCards(17)
        left = new Deck(this.cards)
        return { player1, player2, player3, left: left }
    }

    private takeCards(num: number): Deck {
        const cards: Card[] = []
        for (let i = 0; i < num; i++) {
            const card = this.cards.shift()
            cards.push(card as Card)
        }
        return new Deck(cards)
    }
    // 获取随机数
    private getRandom(min: number, max: number) {
        const dec = max - min
        return Math.floor(Math.random() * dec) + min
    }
}