import React, {createContext, useReducer} from 'react';
import {todosReducer} from '../reducerapi/TodoReducer';
export const TodoListContext = createContext();


const TodoListContextProvider = ({children}) => {
const [todos, dispatch] = useReducer(todosReducer, [
    {text: 'plan the family trip', id:1},
    {text: 'go shopping for dinner', id:2},
    {text: 'go for walk', id:3},
]);
    return(
    <TodoListContext.Provider value={{todos, dispatch}}>
    {children}
    </TodoListContext.Provider>
    )
}
export default TodoListContextProvider;