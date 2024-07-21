import { createContext, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const StoreContext = createContext()

export function Provider({ children, store }) {
    const [state, setState] = useState(store.getState())
    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState())
        })
    }, [])

    return (
        <StoreContext.Provider value={{ state, dispatch: store.dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useDispatch = () => useContext(StoreContext).dispatch
export const useSelector = (selector) =>
    selector(useContext(StoreContext).state)




// export const useDispatch = () => {
//     const store = useContext(StoreContext)
//     return store.dispatch
// }

// export const useSelector = (selector) => {
//     const store = useContext(StoreContext)
//     return selector(store.state)
// }

