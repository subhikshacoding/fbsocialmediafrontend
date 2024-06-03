import React from 'react'
import'./Home.css'
import Topbar from '../Topbar/Topbar'
import Right from '../sidebarright/right'
import Left from '../sidebarleft/left'
import Feed from '../feed/feed'

export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homecontainer">
        <Left/>
        <Feed/>

        <Right/>

      </div>
    </>
       
  )
}
