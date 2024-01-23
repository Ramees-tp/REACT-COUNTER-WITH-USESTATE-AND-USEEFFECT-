import React, { useEffect } from 'react'

function Child() {
    useEffect(()=>{
        console.log("Mounting");

        const inter=setInterval(()=>{
         console.log("intervel");
        },1000)
      return()=>{
        console.log("unmount");
        clearInterval(inter)
      }
    })
  return (
    <div>
      <h1>RAMEES</h1>
    </div>
  )
}

export default Child
