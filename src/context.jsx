import { useState, useContext, createContext } from "react";


const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [xy, setXy] = useState({
		firstName:"",
		lastName:"",
		file:"",
	 })


    return <AppContext.Provider value={{
            xy,
            setXy,
    }}>
        {children}
    </AppContext.Provider>
}


const useGlobalContext = () => {
    return useContext(AppContext)
}


export  { AppProvider, useGlobalContext }