import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { tProduct } from '@/types';

type CartState = {
  cart: tProduct[];
  addToCart: (product: tProduct) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  immer((set) => ({
    cart: [],
    addToCart: (product) =>
      set((state) => {
        const existing = state.cart.find((p) => p.id === product.id);
        if (existing) {
          existing.quantity += product.quantity;
        } else {
          state.cart.push(product);
        }
      }),
    removeFromCart: (id) =>
      set((state) => {
        state.cart = state.cart.filter((p) => p.id !== id);
      }),
    clearCart: () =>
      set((state) => {
        state.cart = [];
      }),
  }))
);
