import { useRef,useEffect } from 'react';
import gsap from 'gsap';
function Second(){
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
            marginLeft: '0%',
            opacity: 1, 
            ease: "power1.inOut",
        });
        }
      }, []); // empty dependency array
    return(
        <div className="second" ref={commentsRef} style={{marginLeft:'-100%', opacity:'-0'}}>
            <div className='man'>
                <div>
                    <h4 style={{color:'hsl(233, 12%, 13%)'}} className='title'>What's different about Manage?</h4>
                </div>  
                <div>
                    <h5 style={{color:'hsl(227, 12%, 61%)'}} className='body'>
                        Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                    </h5>
                </div>
            </div>
            <div className='track'>
                <div className='number'>
                    <div className='tt'>
                        <div>
                            <h5 className='digit'>01</h5>
                        </div>
                        <div>
                                <h5 style={{color:'hsl(233, 12%, 13%)'}}><b>Track company-wide progress</b></h5>
                        </div>
                    </div>
                    <div className='company'>        
                        <div>
                            <h5 style={{color:'hsl(227, 12%, 61%)'}} className="body">
                            See how your day-to-day tasks fit into the wider vision.<br/>
                            Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                            </h5>
                        </div>
                    </div>
                </div>
                <div className='number'>
                    <div className='tt'>
                        <div>
                            <h5 className='digit'>02</h5>
                        </div>
                        <div>
                                <h5 style={{color:'hsl(233, 12%, 13%)'}}><b>Advanced built-in reports</b></h5>
                        </div>
                    </div>
                    <div className='company'>
                        <div>
                            <h5 className="body" style={{color:'hsl(227, 12%, 61%)'}}>
                            Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                            </h5>
                        </div>
                    </div>
                </div>
                <div className='number'>
                        <div className='tt'>
                            <div>
                                <h5 className='digit'>03</h5>
                            </div>
                            <div>
                                <h5 style={{color:'hsl(233, 12%, 13%)'}}><b>Everything you need in one place</b></h5>
                            </div>
                        </div>
                        <div className='company'>    
                            <div>
                                <h5 className="body" style={{color:'hsl(227, 12%, 61%)'}}>
                                Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                                </h5>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Second