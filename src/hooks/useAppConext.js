import { GratefulContext} from '../context/GratefulContext'

/* hook to get the global state/context */
export const useAppContext = () => useContext(GratefulContext);
export default useAppContext;
