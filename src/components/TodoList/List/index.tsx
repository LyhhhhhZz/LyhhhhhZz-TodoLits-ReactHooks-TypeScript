import React, { FC, ReactElement } from 'react'
import { ITodo } from '../typings'
import TdItem from './Item'

interface IProps {
    todoList: ITodo[]
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}


const TdList: FC<IProps> = (props): ReactElement => {

    const {todoList, toggleTodo, removeTodo} = props
    return (
        <div className='td-list'>
            {
                todoList && todoList.map((item: ITodo) => {
                    return(
                        <TdItem 
                            key={item.id}
                            todo={item}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                        />
                    )
                })
            }
        </div>
    )
}

export default TdList
