import React from 'react'
import './Intro.css'
import { useState } from 'react'
import { useRef } from 'react'
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
//import {vid} from '../../constant'
import {res} from '../../constant'


const Intro = () => {
    const [playVideo, setPlayVideo]=useState(false)

    const vidRef=useRef()

    const handleVideo=()=>{
        setPlayVideo((prevPlayVideo)=> !prevPlayVideo)
        if(playVideo){
            vidRef.current.pause()
        }else{
            vidRef.current.play();
        }
    }


  return (
    <div className='app__video' id='menu'>
        <video
           src={res}
           ref={vidRef}
           loop
           type='video/mp4'
           controls={false}
           muted
           />
           <div className='app__video-overlay flex__center' >
                <div className='app__video-overlay_circle flex__center'
                onClick={handleVideo}
                >
                   {playVideo
                   ?<BsPauseFill color='#fff' fontSize={30}/>
                   :<BsFillPlayFill color='#fff' fontSize={30}/>
                   }
                </div>
            </div>
        
    </div>
  )
}

export default Intro