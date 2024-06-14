import { create } from 'zustand'

export const useControl = create((set)=>({
    select:"",
    selectForm:(value)=>set((state)=>({select:value}))
}))