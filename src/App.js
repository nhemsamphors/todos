import TodoList from './components/TodoList';
import './App.css';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contextapi/ThemeContext';
import AuthContextProvider from './contextapi/AuthContext';
const App = ()=>  {
  return (
    <div className="App">
    <div className='ui raised very padded text container segment'>
    <AuthContextProvider>
    <ThemeContextProvider>
    <Navbar/>
    <TodoList/>
    </ThemeContextProvider>
    </AuthContextProvider>
   
    
    </div>
    </div>
  );
}

export default App;
