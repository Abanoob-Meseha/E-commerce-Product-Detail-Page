import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { tProduct } from "@/types";

type CartState = {
  cart: tProduct[];
  addToCart: (product: tProduct) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  decreaseQuantity: (id: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    immer((set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((p) => p.id === product.id);
          if (existing) {
            existing.quantity += product.quantity || 1;
          } else {
            state.cart.push({ ...product, quantity: product.quantity || 1 });
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
      decreaseQuantity: (id) =>
        set((state) => {
          const existing = state.cart.find((p) => p.id === id);
          if (existing) {
            if (existing.quantity > 1) {
              existing.quantity -= 1;
            } else {
              state.cart = state.cart.filter((p) => p.id !== id);
            }
          }
        }),
    })),
    {
      name: "cart-storage", // اسم المفتاح في localStorage
      partialize: (state) => ({ cart: state.cart }), // نحتفظ فقط بالـ cart
    }
  )
);
