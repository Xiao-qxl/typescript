import { ChessType } from "../types/enums";
import { ChessComp } from "./ChessComp";
import "./BoardComp.css";
import React, { FunctionComponent } from "react";

interface IProps {
    chesses: ChessType[]
    isGameOver?: boolean
    onClick?: (i: number) => void
}

const BoardComp: FunctionComponent<IProps> = function (props: IProps) {
    /**
     * 非空类型断言
     * 在用于告诉编译器一个变量或属性不为空。 
     * 语法是在变量或属性名称后面加上一个感叹号
     * ```****!```
     *  */
    const isGameOver = props.isGameOver!
    const list = props.chesses.map((type, i) =>
        <ChessComp
            key={i}
            type={type}
            onClick={() => {
                (!isGameOver) && props.onClick && props.onClick(i)
            }}
        />
    )
    return <div className="board">{list}</div>
}
BoardComp.defaultProps = {
    isGameOver: false
}

export { BoardComp }