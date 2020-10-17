import { AppContext } from '../context/AppContext'

/* hook to get the global state/context */
export const useAppContext = () => useContext(AppContext);
export default useAppContext;
