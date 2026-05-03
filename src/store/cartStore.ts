import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  aroma: string;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (id: number, aroma: string) => void;
  updateQuantity: (id: number, aroma: string, qty: number) => void;
  clearCart: () => void;
}

function computeTotals(items: CartItem[]) {
  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  return { totalItems, totalPrice };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (newItem, qty = 1) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.id === newItem.id && i.aroma === newItem.aroma,
          );
          const items = existing
            ? state.items.map((i) =>
                i.id === newItem.id && i.aroma === newItem.aroma
                  ? { ...i, quantity: i.quantity + qty }
                  : i,
              )
            : [...state.items, { ...newItem, quantity: qty }];

          return { items, ...computeTotals(items) };
        });
      },

      removeItem: (id, aroma) => {
        set((state) => {
          const items = state.items.filter(
            (i) => !(i.id === id && i.aroma === aroma),
          );
          return { items, ...computeTotals(items) };
        });
      },

      updateQuantity: (id, aroma, qty) => {
        if (qty <= 0) {
          get().removeItem(id, aroma);
          return;
        }
        set((state) => {
          const items = state.items.map((i) =>
            i.id === id && i.aroma === aroma ? { ...i, quantity: qty } : i,
          );
          return { items, ...computeTotals(items) };
        });
      },

      clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
    }),
    { name: "avela-cart" },
  ),
);
