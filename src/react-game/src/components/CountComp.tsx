/**
 * 1. 展示组件：通常是函数式组件
 * 2. 容器组件：通常是类组件
 */

import React from "react";

interface IProps {
    num: number;
    onChange?: (n: number) => void;
}
/**
 * 函数组件 
 */
// 方法一
export const CountFnComp: React.FC<IProps> = function (props) {
    // 方法二
    // export function CountComp(props: IProps) {
    return (
        <div>
            <button onClick={() => {
                props.onChange && props.onChange(props.num - 1)
            }}>-</button>
            <span>{props.num}</span>
            <button onClick={() => {
                props.onChange && props.onChange(props.num + 1)
            }}>+</button>
        </div>
    )
}
/**
 * 类组件 
 */
interface IState {
    msg: string;
    description: string;
}
export class CountClassComp extends React.Component<IProps, IState> {
    state: IState = {
        msg: 'hello',
        description: 'world'
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.onChange && this.props.onChange(this.props.num - 1)
                }}>-</button>
                <span>{this.props.num}</span>
                <button onClick={() => {
                    this.props.onChange && this.props.onChange(this.props.num + 1)
                }}>+</button>
            </div>
        )
    }

}