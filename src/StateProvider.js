import React, { createContext, useContext, useReducer, useMemo, useState } from "react";
export const StateContext = createContext();
export const LoaderContext = createContext({
	loading: false,
	setLoading: () => {}
});

const StateProvider=({ reducer, children }) => {
	const [ loading, setLoading ] = useState(false);
	const loader = { loading, setLoading };
	const [state, dispatch] = useReducer(reducer,{});
	const store = useMemo(() => [state, dispatch], [state],loader);
	
	return(
		<StateContext.Provider value={store}>
			<LoaderContext.Provider value={loader}>
				{children}
			</LoaderContext.Provider>
		</StateContext.Provider>
	);
};

export const useStateValue = () => useContext(StateContext);

export default StateProvider;