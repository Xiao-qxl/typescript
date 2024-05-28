// 定义牌的类型和常量
type Color = "♥" | "♦" | "♣" | "♠";
type Mark = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type NormalCard = {
    color: Color;
    mark: number;
};
const NUM_COLORS = 4;
const NUM_MARKS = 13;
const MARK_MAP = {
    1: "A",
    11: "J",
    12: "Q",
    13: "K",
};
type Deck = NormalCard[];

// 创建单张牌的函数
function createCard(color: Color, mark: Mark): NormalCard {
    return { color, mark };
}
// 创建一副牌
function createDeck(): Deck {
    const deck: Deck = []
    for (let i = 1; i <= 13; i++) {
        deck.push({ color: '♠', mark: i })
        deck.push({ color: '♣', mark: i })
        deck.push({ color: '♥', mark: i })
        deck.push({ color: '♦', mark: i })
    }
    return deck
}

// 示例：打印一副牌，以验证功能
function printDeck(deck: Deck) {
    for (const card of deck) {
        if (card.mark in MARK_MAP) {
            console.log(`${card.color} ${MARK_MAP[card.mark]}`);
        } else {
            console.log(`${card.color} ${card.mark}`);
        }
    }
}
const deck = createDeck();
printDeck(deck);