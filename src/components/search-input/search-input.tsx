/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { AppContext, APP_ACTION_TYPE } from '../../contextes/appContext';

const searchInput = () => {
    const { state: appState, dispatch } = useContext(AppContext);

    return (
        <input data-testid='searchInputContainer' type='text' value={appState.searchText} onChange={(e) => {
            dispatch({
                type: APP_ACTION_TYPE.SET_SEARCH_TEXT,
                payload: e.target.value,
            });
        }} />
    )
}

export { searchInput as SearchInput }
