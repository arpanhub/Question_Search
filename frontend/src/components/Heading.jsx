import React from 'react'
import BlurText from "../components/ui/BlurText/BlurText";

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

function Heading() {
  return (
    <div className='text-white text-center text-8xl mt-8'>
      <BlurText
        text="Search your query here.."
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[4rem] mb-8 ml-3"
      />
    </div>
  )
}

export default Heading