import React from 'react'
import CountUp from 'react-countup/build/CountUp'
const AnimatedCounter = ( {amount}:{amount:number}) => {
  return (
    <div className='w-full'>
      $<CountUp 
      decimal=','
      prefix="$"
      duration={2.75}
      decimals={2}
      
      end={amount} />
    </div>
  )
} 

export default AnimatedCounter
