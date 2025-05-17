import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
      ease: 'none',
    });
  }, { scope: container });

  return (
    <div id='about' ref={container} className='min-h-screen relative w-screen'>
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className='font-general text-sm uppercase '>Welcome to Zentry</h2>

        <AnimatedTitle title="Disc<b>o</b>ver the world's  l<b>a</b>rgest <br /> shared adventure" containerClass="mt-5 !text-black text-center" />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms.</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id='clip'>
        <div className="mask-clip-path about-image relative overflow-hidden size-full">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
