import { ChessType } from "../types/enums"
import "./ChessComp.css"

interface IProps {
    type: ChessType
    onClick?: () => void
}
export function ChessComp({ type, onClick }: IProps) {
    let chess = null;
    if (type === ChessType.Black) {
        chess = <div className="chess-item chess-item__black"></div>
    }
    if (type === ChessType.White) {
        chess = <div className="chess-item chess-item__white"></div>
    }
    return (
        <div className="chess" onClick={() => {
            if (type === ChessType.None) {
                onClick && onClick();
            }
        }}>
            {chess}
        </div>
    )
}