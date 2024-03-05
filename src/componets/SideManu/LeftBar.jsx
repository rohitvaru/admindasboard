import React, { useState } from 'react'
import './LeftBar.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Sidebardata } from '../../Data/Data'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Sidemanu = () => {
  const [selected,setselected]=useState(0)


  return (
    <div className="Sidebar">
      {/*logo*/}
      <div className='logo'>
        <img src={logo} alt="" />
        <span>
          <span>Foreign</span>Yatra
        </span>
      </div>

      {/*manu*/}
      <div className="manu">
        {Sidebardata.map((item,index)=>{
          return(
            <div className={selected === index ? 'manuItem active' :'manuItem'}
            key={index}
            onClick={()=>setselected(index)}
            >
              <FontAwesomeIcon icon={item.icons} className='icons-width'/>
                <span>
                  {item.heading}
                </span>
            </div>
          )
        })}
        <div className="manuItem">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className='icons-width'/>
        </div>
      </div>
    </div>
  )
}

export default Sidemanu
