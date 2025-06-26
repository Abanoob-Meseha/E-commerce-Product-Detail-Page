import React from 'react'
import Locals from './Locals'

const Copywrites = () => {
  return (
    <div className='footerDashLine py-6 flex md:flex-row flex-col gap-4 md:justify-between'>
      <span className='text-sm text-foreground-secondary'>© John Lewis plc 2001 - 2024</span>
      {/* Locals */}
      <Locals />
    </div>
  )
}

export default Copywrites