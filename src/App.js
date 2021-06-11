
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useSelector } from 'react-redux';
function App() {
  
  const username = useSelector(state => state.user.username);

  return (
    <div className="app">
      {
        !username ? <Login /> :
        <>
         <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>          
      }
      
    </div>
  );
}

export default App;
