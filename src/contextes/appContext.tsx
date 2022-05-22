import { createContext, Dispatch, ReactNode, useReducer } from 'react';

export enum APP_ACTION_TYPE {
    ADD_TO_BASKET = 'ADD_TO_BASKET',
    SET_REPOSITORIES = 'SET_REPOSITORIES',
    SET_CONTRIBUTORS = 'SET_CONTRIBUTORS',
    SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
}

export interface IAppAction {
    type: APP_ACTION_TYPE;
    payload: IContributor | IContributor[] | IRepository[] | string | null;
}

export interface IAppState {
    searchText: string;
    repositories?: IRepository[] | null;
    contributors?: IContributor[] | null;
    basketItems?: IContributor[];
}

export interface IRepository {
    id: string,
    name: string
}

export interface IContributor {
    id: string,
    login: string
}

interface IAppContext {
    dispatch: Dispatch<IAppAction>;
    state: IAppState;
}

const AppReducer = (state: IAppState, action: IAppAction): IAppState => {
    switch (action.type) {
        case APP_ACTION_TYPE.ADD_TO_BASKET: {
            const newItem = action.payload as IContributor;
            const existedItem = state.basketItems?.find(item => item.id === newItem.id);
            return {
                ...state,
                basketItems: (state.basketItems?.length
                    ? (existedItem ? [...state.basketItems] : [...state.basketItems, action.payload])
                    : [action.payload]
                ) as IContributor[]
            };
        }
        case APP_ACTION_TYPE.SET_REPOSITORIES: {
            return {
                ...state,
                repositories: action.payload ? [...action.payload as IRepository[]] : null
            };
        }
        case APP_ACTION_TYPE.SET_CONTRIBUTORS: {
            return {
                ...state,
                contributors: action.payload ? [...action.payload as IContributor[]] : null
            };
        }
        case APP_ACTION_TYPE.SET_SEARCH_TEXT: {
            return {
                ...state,
                searchText: action.payload as string
            };
        }
        default: {
            return state;
        }
    }
};

export const initialAppState: IAppState = {
    searchText: ''
}

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider = ({ initialState, children }: { initialState: IAppState; children: ReactNode }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
