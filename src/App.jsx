import './App.css'
import Maindash from './componets/MainDash/Maindash'
import Sidemanu from './componets/SideManu/LeftBar'
import RightSide from './componets/RightSide/RightSide';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <>
      <div className='App App-Font'>
          <div className='AppGlass'>
            <Sidemanu />
            <Outlet />
            <RightSide/>
          </div>
      </div>
    </>
  )
}

export default App

