import React, { useState } from 'react'
import './filebar.css'
import Folder from './Folder'
import { mydata } from '../filedata/data'
import useTraverse from '../customhooks/useTraverse'

const FileBar = () => {
  let insertNode=useTraverse();
    const [filedata,setFileData]=useState(mydata);
     const addnewFile=(folderId,newFolderName,isFolder)=>{
          let modifyData=insertNode(filedata,folderId,newFolderName,isFolder);
          setFileData(modifyData);
     }

  return (
    <div className='leftSide' style={{height:"100vh", border:'1px solid gray'}}>
        <Folder filedata={filedata} addnewFile={addnewFile}/>
    </div>
  )
}

export default FileBar