// import { createDeck, printDeck } from "./funcs";

import { Deck } from "./deck";

// const deck = createDeck();
// printDeck(deck);

const deck = new Deck()
console.log("=======开始洗牌=======")
deck.shuffle()
console.log("=======洗牌完成=======")
deck.printDeck()
console.log("=======开始发牌=======")
const res = deck.publish()
console.log("=======发牌完成=======")
console.log("=======玩家1=======")
res.player1.printDeck()
console.log("=======玩家2=======")
res.player2.printDeck()
console.log("=======玩家3=======")
res.player3.printDeck()
console.log("=======剩余=======")
deck.printDeck()