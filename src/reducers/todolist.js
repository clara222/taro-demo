import { ADD, MINUS } from '../constants/todolist'
import { todoList } from '../util/config'
import Taro from '@tarojs/taro'
const INITIAL_STATE = {
  todoList: Taro.getStorageSync('list') || todoList
}

export default function todolist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      const newState = JSON.parse(JSON.stringify(state))
      newState.todoList.push(action.item)
      Taro.setStorageSync('list', newState.todoList)
      return newState
    case MINUS:
      let aState = JSON.parse(JSON.stringify(state))  
      aState.todoList[action.index].isComplete = !state.todoList[action.index].isComplete
      Taro.setStorageSync('list', aState.todoList)
      return aState
    default:
      return state
  }
}
