import { createContext } from "react";
import { AppContextType } from "./Types/GlobalTypes";


export const ACTIONS = {
    SET_LOGIN_STATE: 'set-login-state',
    UPDATE_SEARCH: 'update-search'
}


export const AppContext = createContext<AppContextType | null>(null);
