import React, { useState, createContext } from 'react';

export const authContext = createContext();
const Authenticate = (props) => {
	const [ token, setToken ] = useState(null);
    
	return (
		<authContext.Provider
			value={{
                token, 
                setToken,
			}}
		>
			{props.children}
		</authContext.Provider>
	);
};
export default Authenticate;
