import { auth, providers } from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth";



/**
 * Retrieve and monitor the authentication state from Firebase.
 * @param auth firebase.auth.Auth instance for the app monitor
 * @returns [user(firebase.user||undefined), loading(boolean), error(firebase.auth.Error||undefined), auth (Firebase.auth), providers (ohject of providers)]
 */
export const useAuth = () => [...useAuthState(auth), auth, providers]  // => [user, loading, error] 