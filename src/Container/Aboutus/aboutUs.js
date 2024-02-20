
import spoon from '../../images/spoon.png'
import abacha from '../../images/abacha.jpg'

import './aboutUs.css'

const About=()=>(
    <>
        <img src={spoon} alt='about Spoon' className='spoon__img'/>
             <p className='p__opensans'>Inspired by our Co-Founder and Executive Chef Uzo-Amaka Ebele's mission to 
             share the African culture through food. Eby's cuisine reflects the depth, richness and vibracy of Africa's
             diverse culinary tradition in a modern, fast-casual setting.
             </p>
            <button type='button' className='custom__button'>Know More</button>
    </>
  )

const aboutUs = () => {
    return (
      <div className='app__aboutus app__bg flex__center section__padding' id='about'>
        
        
        <div className='app__aboutus-content flex__center'> 
          <div className='app__aboutus-content_about'>
               <h1 className='headtext__cormorant'>About Us</h1>
               <About/>
          </div>
          <div className='app__aboutus-content_knife flex__center'>
             <img src={abacha} alt='about_knife'/>
          </div>
          <div className='app__aboutus-content_history'>
               <h1 className='headtext__cormorant'>Our History</h1>
              <About/>
          </div>
        </div>
      </div>
    )
  }
  export default aboutUs