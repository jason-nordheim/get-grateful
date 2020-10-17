import { auth } from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth";

/**
 * Retrieve and monitor the authentication state from Firebase.
 * @param auth firebase.auth.Auth instance for the app monitor
 * @returns [user(firebase.user||undefined), loading(boolean), error(firebase.auth.Error||undefined)]
 */
export const useAuthState(auth) // => [user, loading, error] 