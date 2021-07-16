import React, {useRef, FC, ReactElement} from 'react'
import { ITodo } from '../typings/index'

interface Iprops {
    addTodo: (todo: ITodo) => void
    todoList: ITodo[]
}

const TdInput: FC<Iprops> = ({
    addTodo,
    todoList
}): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null)
    const addItem = (): void => {
        const val: string = inputRef.current!.value.trim()

        if(val.length) {
            const isExit = todoList.find(item => item.content === val)
            if(isExit) {
                alert("已存在该项")
                return
            }

            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false
            })

            inputRef.current!.value = ""
        }
    }
    return (
        <div className='td-input'>
            <input type="text" placeholder="请输入待办项" ref={ inputRef }/>
            <button onClick={ addItem }>增加</button>
        </div>
    )
}

export default TdInput
