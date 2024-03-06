import React, { useState } from 'react'
import './LeftBar.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Sidebardata } from '../../Data/Data'
import { faArrowRightFromBracket, faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { Link, Router } from 'react-router-dom'


const Sidemanu = () => {
  const [selected, setselected] = useState(0)
  const [expanded, setExpanded] = useState(true)
  const sideBarVariants = {
    true: {
      left: '0%'
    },
    false: {
      left: '-50%'
    }
  }
  return (
    <>
      <div className="bars" style={expanded ? {
        left: '50%'
      } : { left: '5%', background: '#ffffff' }}>
        <FontAwesomeIcon icon={faBars} onClick={() => setExpanded(!expanded)} />
      </div>
      <motion.div className="Sidebar"
        style={expanded ? { display: 'block' } : { display: 'none' }}
        variants={sideBarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/*logo*/}
        <div className='logo'>
          <img src={logo} alt="" />
          <span>
            <span>Foreign</span>Yatra
          </span>
        </div>

        {/*manu*/}
        <div className="manu">
          {Sidebardata.map((item, index) => {
            console.log(index);
            return (
              
              <div className={selected === index ? 'manuItem active' : 'manuItem '}
                key={index}
                onClick={() => {
                  setselected(index)
                }}
              >
                  <FontAwesomeIcon icon={item.icons} className='icons-width' />
                  <span>
                    {item.heading}
                  </span>
              </div>
            )
          })}
          <div className="manuItem">
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='icons-width' />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidemanu
