import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, multiply, darkMode } from './counterSlice';

const Counter = () => {
  // The function below is called a selector and allows us to select a value from
  // the state.
  const count = useSelector((state) => state.counter.count);
  const darkMode = useSelector((state) => state.counter.darkmode);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          aria-label="darkmode"
          onClick={() => {
            dispatch(darkMode());
          }}
        >
          darkmode!
        </button>
      </div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          aria-label="multiply value"
          onClick={() => {
            dispatch(multiply());
          }}
        >
          *2
        </button>
      </div>
    </>
  );
};

export default Counter;
