import React from 'react'
import Leftbody from './Leftbody'
import Centerbody from './Centerbody'
import Rightbody from './Rightbody'
import './Mainbody.css'

function Mainbody() {
  return (
    <div className='Makinggrid'>
        <div style={{backgroundColor:'#fff',marginRight:'7px'}}>
        <Leftbody/>
        </div>
        <div style={{backgroundColor:'#fff',marginLeft:'2px',marginRight:'5px'}}>
        <Centerbody/>
        </div>
        <div style={{backgroundColor:'#fff',marginLeft:'4px'}}>
        <Rightbody/>
        </div>



    </div>
  )
}

export default Mainbody