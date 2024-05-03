import graph from './images/illustration-intro.svg'
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
function First(){
    
    return(
        <div className='first-main' >
           <div className='first' >
                <div>
                    <h3>Bring everyone together to build better products.</h3>
                </div>
                <div>
                    <p style={{color:'hsl(227, 12%, 61%)'}} className='body'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>  
                </div>                
                <div>
                    <button>Get Started</button>
                </div>
           </div>
           <div className='first-inner'>
                <img className='graph' src={graph} alt='illustrate'/>
           </div>
        </div>
    )
}
export default First