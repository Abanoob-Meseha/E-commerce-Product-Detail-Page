import { Button } from '@/components/ui/button';
import React from 'react'

const CheckoutBtnSection = () => {
    return (
    <div className="flex gap-4 mt-6">
      <Button className="flex-1 text-white py-5 rounded font-semibold">
        Add To Cart
      </Button>
      <Button className="flex-1 border py-5 rounded font-semibold" variant={"outline"}>
        Checkout Now
      </Button>
    </div>
  );
  
}

export default CheckoutBtnSection
