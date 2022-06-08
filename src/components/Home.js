

import React from 'react'
import { AudioPlayerProvider } from "react-use-audio-player"
import myfile from '../audiofiles/myfile.mp3'

const audioClips=[
  {sound :myfile,lable :"myfile"}
]
import { useState } from 'react'
export default function Home() {
  // const [playpause, setPlaypause] = useState(false);



  return (
    <div style={{padding:"15%"}}>
      <form >
        <input data-tid="linkInput" style ={{height:"50px" ,width:"400px", padding:"10px"}}onChange={(e)=>setLink(e.target.value)} placeholder='enter link for your audio'></input>
        <button data-tid="submitButton" style={{width:"60px",height:"50px",marginLeft:"40px"}}type='submit'>submit</button>
      </form>
      
      
      <button data-tid="playpauseButton" style={{width:"160px",height:"50px",margin:"40px"}} > {"pause ?start"}</button>
      <br/>
      
    </div>
  );
 
  
}
