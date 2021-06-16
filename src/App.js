import TodoList from './components/TodoList';
import './App.css';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contextapi/ThemeContext';
import AuthContextProvider from './contextapi/AuthContext';
import TodoListContextProvider from './contextapi/TodoListContext';
const App = ()=>  {
  return (
    <div className="App">
    <div className='ui raised very padded text container segment'>
    <AuthContextProvider>
    <TodoListContextProvider>
    <ThemeContextProvider>
    <Navbar/>
    <TodoList/>
    </ThemeContextProvider>
    </TodoListContextProvider>
    </AuthContextProvider>
   
    
    </div>
    </div>
  );
}

export default App;
