import React from 'react'
import val from './val'
import { Consumer } from './Context'
const Input = () => {
    const {getValue} =Consumer();
  return (
    <div className='input'>
        {
            val.map((ele)=><button onClick={()=>getValue(ele)}  type={ele==='ENTER'?'submit':'button'}>{ele}</button>)
        }
    </div>
  )
}

export default Input