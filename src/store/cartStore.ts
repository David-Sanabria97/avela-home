import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: number
  slug: string
  name: string
  price: number
  aroma: string
  quantity: number
  image: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number, aroma: string) => void
  updateQuantity: (id: number, aroma: string, qty: number) => void
  clearCart: () => void
  totalItems: () => number
  totalPrice: () => number
}

const BAG_COST = 1500

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.id === newItem.id && i.aroma === newItem.aroma
          )
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === newItem.id && i.aroma === newItem.aroma
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            }
          }
          return { items: [...state.items, { ...newItem, quantity: 1 }] }
        })
      },

      removeItem: (id, aroma) => {
        set((state) => ({
          items: state.items.filter((i) => !(i.id === id && i.aroma === aroma)),
        }))
      },

      updateQuantity: (id, aroma, qty) => {
        if (qty <= 0) {
          get().removeItem(id, aroma)
          return
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id && i.aroma === aroma ? { ...i, quantity: qty } : i
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      totalItems: () =>
        get().items.reduce((acc, i) => acc + i.quantity, 0),

      totalPrice: () =>
        get().items.reduce((acc, i) => acc + i.price * i.quantity, 0) ,
    }),
    { name: 'avela-cart' }
  )
)