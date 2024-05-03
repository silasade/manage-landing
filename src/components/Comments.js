import { useEffect, useState, useRef } from "react";
import anisha from './images/avatar-anisha.png';
import ali from './images/avatar-ali.png';
import richard from './images/avatar-richard.png';
import Carousels from "./Carousels";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Comments() {
  const [width, setWidth] = useState(window.innerWidth);

  // Reference for the comments container
  const commentsRef = useRef(null);

  const datas = [
    {
      avatar: anisha,
      name: "Anisha Li",
      comment: "Age has supercharged our team's workflow. The maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      avatar: ali,
      name: "Ali Bravo",
      comment: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      avatar: richard,
      name: "Richard Watts",
      comment: "Manage allows us to provide structure and keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
    },
  ];

  const commentators = datas.map((item, index) => (
    <div className="comment" key={index}>
      <div>
        <img className="pfp" src={item.avatar} alt={`${item.name}'s avatar`} />
      </div>
      <div>
        <h5 style={{color:'hsl(233, 12%, 13%)'}}>{item.name}</h5>
      </div>
      <div>
        <h5 className="body">{item.comment}</h5>
      </div>
    </div>
  ));

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  useEffect(() => {
    if (commentsRef.current) {
      gsap.to(commentsRef.current, {
        scrollTrigger: {
          trigger: commentsRef.current,
          start: 'top 95%',
          end: 'top 0%',
          scrub: 1,
        },
        marginLeft: width>700 && '30px',
        opacity: 1, 
        ease: "power1.inOut",
        display:'flex'
    });
    }
  }, []); // empty dependency array

  return (
    <div className="comments" ref={commentsRef} style={{marginLeft: width>700 && '-100%', opacity: width>700 && '0', display: width>700 && 'none'}}>
      
      <div>
        <h4 style={{color:'hsl(233, 12%, 13%)'}}>What they've said</h4>
      </div>
      <div className="avatars" style={{ display: width <= 700 ? 'none' : 'flex' }}>
        {commentators}
      </div>
      {width <= 700 && <Carousels />}
      <div>
        <button className="button">Get Started</button>
      </div>
    </div>
  );
}

export default Comments;
