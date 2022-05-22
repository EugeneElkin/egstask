import { createContext, Dispatch, ReactNode, useReducer } from 'react';

export enum APP_ACTION_TYPE {
    SET_CONTRIBUTORS = 'SET_CONTRIBUTORS',
}

export interface IAppAction {
    type: APP_ACTION_TYPE;
    payload: IContributor[] | IRepository[];
}

export interface IAppState {
    searchText?: string;
    repositories?: IRepository[];
    contributors?: IContributor[];
    basketItems?: IContributor[];
}

export interface IRepository {
    id: string,
    name: string
}

export interface IContributor {
    id: string,
    name: string
}

interface IAppContext {
    dispatch: Dispatch<IAppAction>;
    state: IAppState;
}

const AppReducer = (state: IAppState, action: IAppAction): IAppState => {
    switch (action.type) {
        case APP_ACTION_TYPE.SET_CONTRIBUTORS: {
            return {
                ...state,
                contributors: [...action.payload]
            };
        }
        default: {
            return state;
        }
    }
};

export const initialAppState: IAppState = {
}

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider = ({ initialState, children }: { initialState: IAppState; children: ReactNode }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
