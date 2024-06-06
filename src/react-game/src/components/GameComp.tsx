import React from 'react';
import { ChessType, GameStatus } from '../types/enums';
import { BoardComp } from './BoardComp';
import { GameStatusComp } from './GameStatusComp';
import "./GameComp.css"

interface IState {
    cheeses: ChessType[]
    gameStatus: GameStatus
    nextChess: ChessType.Black | ChessType.White
}

export class GameComp extends React.Component<{}, IState> {

    state: IState = {
        cheeses: [],
        gameStatus: GameStatus.Playing,
        nextChess: ChessType.Black
    }

    componentDidMount(): void {
        this.init();
    }

    /**
     * 初始化数据
     */
    init() {
        const arr: ChessType[] = [];
        for (let i = 0; i < 9; i++) {
            arr.push(ChessType.None);
        }
        this.setState({
            cheeses: arr,
            gameStatus: GameStatus.Playing,
            nextChess: ChessType.Black
        })
    }
    /**
     * 棋盘点击事件
     * @param index 
     */
    handleChessClick(index: number) {
        const cheeses: ChessType[] = [...this.state.cheeses]
        cheeses[index] = this.state.nextChess;
        this.setState(prevState => ({
            cheeses,
            nextChess: prevState.nextChess === ChessType.Black ? ChessType.White : ChessType.Black,
            gameStatus: this.getStatus(cheeses, index)
        }))
    }
    /**
     * 获取棋盘状态
     * @param cheeses   棋盘数据
     * @param index     当前落子的索引
     * @returns         游戏状态
     */
    getStatus(cheeses: ChessType[], index: number): GameStatus {
        // 判断是否有一方胜利
        const horMin = Math.floor(index / 3) * 3
        const verMin = index % 3
        if (
            (cheeses[horMin] === cheeses[horMin + 1] && cheeses[horMin] === cheeses[horMin + 2])
            ||
            (cheeses[verMin] === cheeses[verMin + 3] && cheeses[verMin] === cheeses[verMin + 6])
            ||
            (cheeses[0] === cheeses[4] && cheeses[0] === cheeses[8] && cheeses[0] !== ChessType.None)
            ||
            (cheeses[2] === cheeses[4] && cheeses[2] === cheeses[6] && cheeses[2] !== ChessType.None)
        ) {
            return cheeses[index] === ChessType.Black ? GameStatus.BlackWin : GameStatus.WhiteWin;
        }
        // 判断是否平局
        if (!cheeses.includes(ChessType.None)) {
            return GameStatus.Draw;
        }
        return GameStatus.Playing;
    }

    render() {
        return (
            <div className='game'>
                <GameStatusComp
                    status={this.state.gameStatus}
                    next={this.state.nextChess}
                />
                <BoardComp
                    chesses={this.state.cheeses}
                    isGameOver={this.state.gameStatus !== GameStatus.Playing}
                    onClick={this.handleChessClick.bind(this)}
                />
                <button onClick={this.init.bind(this)}>重新开始</button>
            </div>
        )
    }
}