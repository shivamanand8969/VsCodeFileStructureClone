import React, { useState } from 'react'
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import './filebar.css'

const Folder = ({ filedata, addnewFile}) => {
    const [showInputBox,setShowInputBox]=useState(false);
    const [inputIsFolder,setInputIsFolder]=useState(false);
    const [showOtherfile,setShowOtherFile]=useState(false);
    const [filename,setFilename]=useState();
    function openPopup(e){
      e.preventDefault();
      setShowPopup(true)
    }
     
    const [showPopup,setShowPopup]=useState(false);

    const openInputBox=(data)=>{
        setShowInputBox(true)
        setInputIsFolder(data);
        setShowPopup(false)

    }

    const handleSubmit=(e,isFolder)=>{
        if(e.keyCode==13 && isFolder){
            addnewFile(filedata.id,filename,inputIsFolder )
           console.log(inputIsFolder)
           setShowInputBox(false)

            setShowOtherFile(true)
        }
    }
    return (
        <>
            <div>
                <div style={{ width: "100%", backgroundColor: 'black', color: 'white', marginTop: "10px",padding:"5px" }}>
                    <div style={{ marginLeft: "25px", fontSize: "18px", }} >
                        <div className='listbox' onContextMenu={(e)=>openPopup(e)} onClick={()=>setShowOtherFile(!showOtherfile)}  style={{display:'flex', gap:"20px", alignItems:'center', ':hover': { backgroundColor: '#3f4144', cursor: 'pointer', } }}>
                        {!showOtherfile ? <span> <FaAnglesRight /></span>: <span><FaAnglesDown /></span>}
                        <div style={{display:"flex",alignItems:"center"}}>
                            {filedata.isFolder?"📂":"📄"}{filedata.name} </div>
                               
                        </div>
                      {
                        showInputBox && 
                         <div className='maininputbox'>
                         <div>{inputIsFolder ? "📂":"📄"}</div>
                         <input type='text' 
                         autoFocus
                         onChange={(e)=>setFilename(e.target.value)}
                         onKeyDown={(e)=>handleSubmit(e,filedata.isFolder)}
                         onBlur={()=>setShowInputBox(false)}
                         />
                        </div>
                      }
                        {
                            showOtherfile &&
                         filedata.items.map((value) => (
                            <Folder filedata={value} addnewFile={addnewFile}/>                       
                        ))
                         }
                    </div>
                   
                </div>

            </div>
           { showPopup &&
           <div className='popup'>
                <div className='cross' onClick={()=>setShowPopup(false)}>X</div>
                <div>
                    <li onClick={()=>openInputBox(false)}>New File</li>
                    <li onClick={()=>openInputBox(true)}>New Folder</li>
                </div>
            </div>}
        </>
    )
}

export default Folder