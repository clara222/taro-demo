import {
  ADD,
  MINUS
} from '../constants/todolist'

export const add = (item) => {
  return {
    type: ADD,
    item
  }
}
export const minus = (index) => {
  return {
    type: MINUS,
    index
  }
}

