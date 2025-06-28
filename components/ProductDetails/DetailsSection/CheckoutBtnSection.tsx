import React from 'react'

const CheckoutBtnSection = () => {
    return (
    <div className="flex gap-4 mt-6">
      <button className="flex-1 bg-black text-white py-3 rounded font-semibold">
        Add To Cart
      </button>
      <button className="flex-1 border border-black text-black py-3 rounded font-semibold">
        Checkout Now
      </button>
    </div>
  );
  
}

export default CheckoutBtnSection
