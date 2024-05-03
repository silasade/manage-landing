import { useRef,useEffect } from 'react';
import gsap from 'gsap';
function Simplify(){
    const commentsRef = useRef(null);

    useEffect(() => {
        if (commentsRef.current) {
          gsap.to(commentsRef.current, {
            scrollTrigger: {
              trigger: commentsRef.current,
              start: 'top 95%',
              end: 'top 0%',
              scrub: 1,
            },
            paddingLeft: '30px',
            opacity: 1, 
            ease: "power1.inOut",
        });
        }
      }, []); // empty dependency array
    return(
        <div className="simplify">
            <div ref={commentsRef} style={{paddingLeft:'-100%', opacity:'0'}}>
                <h3 style={{color:'hsl(13, 100%, 96%)'}} className='simple'>Simplify how your team works today.</h3>
            </div>
            <div>
                <button>Get Started</button>
            </div>
        </div>
    )
}
export default Simplify