import { ChessType, GameStatus } from "../types/enums";
import "./GameStatusComp.css"

interface IProps {
    status: GameStatus
    next: ChessType.Black | ChessType.White
}

export function GameStatusComp(props: IProps) {
    let content: JSX.Element;
    if (props.status === GameStatus.Playing) {
        if (props.next === ChessType.White) {
            content = <div className="next">白棋落子</div>
        } else {
            content = <div className="next">黑棋落子</div>
        }
    } else {
        if (props.status === GameStatus.WhiteWin) {
            content = <div className="next win">白棋胜</div>
        } else if (props.status === GameStatus.BlackWin) {
            content = <div className="next win">黑棋胜</div>
        } else {
            content = <div className="next">平局</div>
        }
    }
    return (
        <div className="status">
            {content}
        </div>
    )
}