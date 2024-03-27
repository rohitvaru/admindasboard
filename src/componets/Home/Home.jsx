import React, { useEffect, useState } from 'react'
import './Home.css'
import { Sidebardata } from '../../Data/Data'
import { UpdatesData } from '../../Data/Data'




const Home = () => {
    const [data,setData]=useState([])
    const [named,setNamed]=useState('')


  useEffect(()=>{
    setData(UpdatesData)
  },[])

const submitEvent = (id)=>{
    alert(id);
    const dt = data.filter(item=>item.index !== id)
    setData(dt)
}

  return (
    <div className="containerF">
        <div className="form">
            <form action="">
                <div className="mapInput">
                     {
                        UpdatesData.map((item,index)=>{
                            return(
                                <div key={index} className="input-field">
                                    <div className="spanD">
                                        <span>Customer {item.name}</span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" value={named}  onChange={()=>setNamed(named)}/>
                                    </div>
                                    <div>
                                        <input type="submit" value="Submit" onClick={(e)=>submitEvent(index)}/>
                                    </div>
                                </div>
                                
                            )
                        })
                     }
                      {/* <div className="input-field">
                          <div className="spanD">
                              <span>Full Name</span>
                          </div>
                          <div className="input-box">
                              <input type="text" />
                          </div>
                      </div>
                      <div className="input-field">
                          <div className="spanD">
                              <span>Full Name</span>
                          </div>
                          <div className="input-box">
                              <input type="text" />
                          </div>
                      </div>
                      <div className="input-field">
                          <div className="spanD">
                              <span>Full Name</span>
                          </div>
                          <div className="input-box">
                              <input type="text" />
                          </div>
                      </div> */}
                </div>
                {/* <div className="submitInput">
                      <input type="submit" value="Submit" onClick={(e)=>submitEvent(in)} />
                </div> */}
            </form>
        </div>
    </div>
  )
}

export default Home
