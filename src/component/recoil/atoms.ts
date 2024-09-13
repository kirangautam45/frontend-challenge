import { atom } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [
    { id: '1', text: 'Milk', isComplete: false },
    { id: '2', text: 'Eggs', isComplete: false },
    { id: '3', text: 'Cheese', isComplete: false },
  ],
})
