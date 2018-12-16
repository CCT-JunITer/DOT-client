import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'
import { emit } from './websockets'

export const increment = createAction(INCREMENT_COUNTER)

export const decrement = createAction(DECREMENT_COUNTER)

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()
    emit('FETCH_EVENTS')

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}
