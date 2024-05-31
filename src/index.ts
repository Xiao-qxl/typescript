import { log } from "console";

// 定义牌的类型和常量
enum Color {
    heart = "♥",
    diamond = "♦",
    club = "♣",
    spade = "♠",
}
enum Mark {
    A = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    jack = "J",
    queen = "Q",
    king = "K",
}
type NormalCard = {
    color: Color;
    mark: string;
};
type Deck = NormalCard[];

// 创建一副牌
function createDeck(): Deck {
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
function printDeck(deck: Deck) {
    const text = deck.reduce((acc, card, i) => {
        const tempAcc = acc + `${card.color} ${card.mark} \t`
        return i % 4 === 3 ? tempAcc + "\n" : tempAcc
    }, "")
    console.log(text);
}
const deck = createDeck();
printDeck(deck);