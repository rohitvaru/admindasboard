import './App.css'
import Maindash from './componets/MainDash/Maindash'
import Sidemanu from './componets/Sidebar/sidebar'

function App() {

  return (
    <>
      <div className='App App-Font'>
          <div className='AppGlass'>
            <Sidemanu/>
            <Maindash/>
            <div></div>
            <div></div>
          </div>
      </div>
    </>
  )
}

export default App