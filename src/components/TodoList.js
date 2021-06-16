import React, {useContext, useState} from 'react';
import { ThemeContext } from '../contextapi/ThemeContext';
import { TodoListContext } from '../contextapi/TodoListContext';
const TodoList = () => {
    const [todo, setTodos] = useState('')
    const {todos, dispatch } = useContext(TodoListContext)
    const {isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const handleChange = (e) => {
          setTodos(e.target.value)

    }
    const handleFormSubmit = (e) => {
           e.preventDefault();
           dispatch({type: 'ADD_TODO', text: todo})
    }
    const handleRemoveTodo = (e) => {
        const id = e.target.id;
         dispatch({type: 'REMOVE_TODO', id})
    }
    return(
        <div style={{background: theme.background, color: theme.text, textAlign: 'center'}}>
        {todos.length ? (todos.map((todo) => {
             return <p id={todo.id} onClick={handleRemoveTodo} className='item'>{todo.text}</p>
        })
        ) : (
            <div>YOu HaVe nO tOdo</div>
        )
    
    }
    <form onSubmit={handleFormSubmit}>
    <label htmlFor="todo">Add todo: </label>
    <input type="text" id='todo' onChange={handleChange}/>
    <input type="submit" value='add new todo' className='ui button primary'/>
    </form>
        <button className='ui button primary' onClick={changeTheme}>Change The Theme </button>
        </div>
        )
    }
export default TodoList;