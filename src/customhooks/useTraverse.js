import React from 'react'

const useTraverse = () => {
   function insertNode(tree,folderid,FolderName,isFolder){
    if(tree.id==folderid ){
        tree.items.unshift({
            id:new Date().getTime(),
            name:FolderName,
            isFolder,
            items:[]
        })
        return tree
    }
    let latestNode=[];
     latestNode=tree.items.map((value)=>{
          return insertNode(value,folderid,FolderName,isFolder); 
      });
     return {...tree,items:latestNode}
  }
  return insertNode;
}

export default useTraverse