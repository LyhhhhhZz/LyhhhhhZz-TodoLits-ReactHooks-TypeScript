import { ACTION_TYPE, IAction, IState, ITodo } from "./typings";

function todoReducer (state: IState, action: IAction): IState {
    const {type, payLoad} = action
    switch (type) {
        case ACTION_TYPE.INIT_TODOLIST:
            return{
                ...state,
                todoList: payLoad as ITodo[]
            }
        case ACTION_TYPE.ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, payLoad as ITodo]
            }
        case ACTION_TYPE.REMOVE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== payLoad)
            }
        case ACTION_TYPE.TOGGLE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    return item.id === payLoad?
                    {
                        ...item,
                        completed: !item.completed
                    }:
                    {
                        ...item
                    }
                })
            }
        default:
            return state
    }
}

export {
    todoReducer
}