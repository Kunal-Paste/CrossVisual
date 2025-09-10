import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {

  const imageRef = useRef(null);
  const imageCont = useRef(null);
  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          markers:true,
          start: 'top 22.1%',
          end: 'top -190%', // better than 'top -50%'
          scrub: true,
          pin: true,
          pinSpacing: true,
          pinReparent:true,
          pinType:'transform',
          anticipatePin:1,
          invalidateOnRefresh:true,
          onUpdate:(e)=>{
            let imageIndex;
             if(e.progress<1){
              imageIndex = Math.floor(e.progress*imageArray.length);
             } else {
              imageIndex = imageArray.length-1;
             }
             console.log(imageIndex);
            imageCont.current.src = imageArray[imageIndex];
          }
        }
      });

    });
    return () => ctx.revert();
  });


  return (
    <div>

      <div className='section-1 py-1'>
        <div ref={imageRef} className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-[10vw] left-[30vw] bg-red-300'>
          <img ref={imageCont} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[57vh]'>
            <h1 className='text-[18vw] text-center  leading-[17vw] text-black uppercase'>Sixty-seventh
              Twelve</h1>
          </div>
          <div className='pl-[37%]'>
            <p className='text-6xl text-black '> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. It has values, a personality, a story. If we forget that, we may make good numbers in the short term, but we'll kill it in the long term. That's why we're committed to providing perspective, to building influential brands.</p>
          </div>
        </div>
      </div>

      <div className="section-2 h-screen">

      </div>

    </div>
  )
}

export default Agence