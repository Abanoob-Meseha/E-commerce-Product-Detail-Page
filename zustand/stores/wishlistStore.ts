// stores/wishlistStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { tProduct } from "@/types";

type WishlistState = {
  wishlist: tProduct[];
  addToWishlist: (product: tProduct) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      addToWishlist: (product) =>
        set((state) => {
          if (!state.wishlist.find((p) => p.id === product.id)) {
            return { wishlist: [...state.wishlist, product] };
          }
          return state;
        }),
      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((p) => p.id !== id),
        })),
      isInWishlist: (id) => !!get().wishlist.find((p) => p.id === id),
    }),
    {
      name: "wishlist-storage", // localStorage key
    }
  )
);
