import React from 'react'
import { PiBracketsCurlyBold } from "react-icons/pi";


const getLogofun = (data) => {
      if(data.includes(".js")){
        return <p style={{color:"yellow",height:"35px"}}>js</p>
      }
      else if(data.includes(".py")){
        return  <p style={{color:"blue",height:"35px"}}>py</p>
      }
      else if(data.includes('.css')){
        return <h4 style={{color:"blue",height:"35px"}}>#</h4>
      }
      else if(data.includes('.json')){
       return <h4 style={{color:"yellow",height:"35px"}}><PiBracketsCurlyBold style={{color:"yellow"}}/> </h4>
      }
      else{
        return <h4 style={{height:"35px"}}>📄</h4>
      }
}

export default getLogofun