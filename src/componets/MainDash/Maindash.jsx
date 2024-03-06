import React from 'react'
import './Maindash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import { LayoutGroup } from 'framer-motion'
function Maindash({ onClickManu }) {
  const string = onClickManu;
  console.log(string);
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards/>
      <Table/>
    </div>
    // <LayoutGroup>
    //   {
    //     onClickManu() =="Dashboard"?(
    //       <div className="MainDash">
    //         <h1>Dashboard</h1>
    //         <Cards />
    //         <Table />
    //       </div>
    //     ):(<h1>no no</h1>)
    //   }
    // </LayoutGroup>
  )
}

export default Maindash
