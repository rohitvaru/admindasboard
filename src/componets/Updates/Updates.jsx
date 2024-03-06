import React from 'react'
import './Updates.css'
import { UpdatesData } from '../../Data/Data'
const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="updates" key={update.name}>
            <img src={update.img} alt="" />
            <div className="noti">
              <div style={{
                marginBottom:'0.5rem',
                fontSize:'small'
              }}>
                <span>{update.name}</span>
                <span>{update.noti}</span>
              </div>             
                <span>{update.time}</span>               
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Updates
