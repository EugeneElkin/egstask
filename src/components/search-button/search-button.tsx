/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { gthubAPI } from '../../axios-instances/github-instance';
import { AppContext, APP_ACTION_TYPE, IRepository } from '../../contextes/appContext';

const searchButton = () => {
    const { state: appState, dispatch } = useContext(AppContext);

    const requestRepositories = () => {
        gthubAPI.get(`orgs/${appState.searchText}/repos`)
            .then(res => {
                dispatch({
                    type: APP_ACTION_TYPE.SET_REPOSITORIES,
                    payload: res.data as IRepository[]
                });
            }).catch(err => {
                if (err.response.status === 404) {
                    dispatch({
                        type: APP_ACTION_TYPE.SET_REPOSITORIES,
                        payload: null
                    });
                }
            });
    }

    return (
        <button data-testid='searchButtonContainer' onClick={requestRepositories}>Search</button>
    )
}

export { searchButton as SearchButton };