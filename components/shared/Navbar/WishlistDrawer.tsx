import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import HeartSVG from '@/public/assets/svg_tsx/HeartSVG'
import React from 'react'
const WishlistDrawer = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="relative cursor-pointer">
          <HeartSVG className="text-white" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-2 flex flex-col items-center">
          <DrawerHeader>
            <DrawerTitle className="text-2xl flex items-center gap-2">
              <HeartSVG className="text-white" />
              Whishlist
            </DrawerTitle>
            <DrawerDescription className="text-center">
              your Wishlist products
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild></DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>

  )
}

export default WishlistDrawer