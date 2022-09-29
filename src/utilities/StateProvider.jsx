import { createContext, useContex, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children, initialState, reducer }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

export const UseStateProvider = () => useContex(StateContext);
