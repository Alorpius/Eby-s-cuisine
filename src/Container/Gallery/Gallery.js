import React from 'react'
import './Gallery.css'
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs'
import Subheading from '../subHeading/subHeading'
import card from '../../images/card 2.jpg'
import flyer from '../../images/flyer.jpg'
import plte from '../../images/plate 2.jpg'
import pack from '../../images/pack 12.jpg'


const galleryImage= [card,flyer,pack,plte]

const Gallery = () => {

    const scrollRef=React.useRef(null);

  const scroll=(direction)=>{
   const {current} =scrollRef;
   
   if(direction==='left'){
      current.scrollLeft -=300;
   }else{
    current.scrollLeft +=300
   }   
  }
    
  return (
    <div className='app__gallery flex__center' id='MenuItems'>
      <div className='app__gallery-content'>
        <Subheading title='Instagram'/>
         <h1 className='headtext__cormorant'>Photo gallery</h1>
         <p className='p__opensans' style={{color:'#AAA',marginTop:'2rem'}}> See our card, delicacies and favorite meals</p>
         <a href='menu'><button className='custom__button' type='button '>View More</button></a> 
      </div>  

        <div className='app__gallery-images'>
          <div className='app__gallery-images_container' ref={scrollRef}>
             {galleryImage.map((galleryImage,index)=>(
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
                <img src={galleryImage} alt='galleryimage'/>
                <BsInstagram className='gallery__image-icon'/>
            </div>
             ))}
          </div>
        <div className='app__gallery-images_arrows'>
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
            <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
        </div>
        </div>
    </div>
  )
}

export default Gallery