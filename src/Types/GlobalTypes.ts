export type ActionType = {
    type: string,
    payload?: {
        data: string | boolean
    }
}

export type DataType = {
    searchValue: string,
    loginState: boolean
}

export interface AppContextType {
    data: DataType;
    dispatch: React.Dispatch<ActionType>;
}