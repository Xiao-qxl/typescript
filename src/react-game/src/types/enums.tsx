export enum ChessType {
    Black,
    White,
    None
}

export enum NextChess {
    White = ChessType.White,
    Black = ChessType.Black
}

export enum GameStatus {
    BlackWin,  // 黑棋赢
    WhiteWin,  // 白棋赢
    Playing,  // 游戏进行中
    Draw // 平局
}