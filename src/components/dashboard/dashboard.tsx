/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { gthubAPI } from '../../axios-instances/github-instance';
import { AppContext, APP_ACTION_TYPE, IContributor } from '../../contextes/appContext';
import classes from './dashboard.module.css';

const dashboard = () => {
    const { state: appState, dispatch } = useContext(AppContext);

    const requestContributors = (repoName: string) => {
        gthubAPI.get(`repos/${appState.searchText}/${repoName}/contributors`)
            .then(res => {
                dispatch({
                    type: APP_ACTION_TYPE.SET_CONTRIBUTORS,
                    payload: res.data as IContributor[]
                });
            }).catch(err => {
                dispatch({
                    type: APP_ACTION_TYPE.SET_CONTRIBUTORS,
                    payload: null
                });
            });
    }

    const addToBasket = (contributor: IContributor) => {
        dispatch({
            type: APP_ACTION_TYPE.ADD_TO_BASKET,
            payload: contributor
        });
    }

    if (appState.repositories === undefined && !appState.contributors) {
        return null;
    }

    return (
        <div data-testid='dashboardContainer'>
            {appState.repositories === null
                ? <div data-testid='noOrganizationLabel'>Organization not found</div>
                : null}
            {appState.repositories?.length === 0
                ? <div data-testid='noRepositoriesLabel'>Repositories not found</div>
                : null}
            {!appState.contributors
                ? <div data-testid='reposItemsContainer'>
                    {appState.repositories?.map(repo => {
                        return (
                            <div key={repo.id} className={classes.listItem} onClick={() => { requestContributors(repo.name) }}>
                                <div>{repo.name}</div>
                            </div>)
                    })}
                </div>
                : null}
            {appState.contributors
                ? <div data-testid='contribsItemsContainer'>
                    {appState.contributors?.map(contrib => {
                        return (
                            <div key={contrib.id} className={classes.listItem} onClick={() => { addToBasket(contrib) }}>
                                <div>{contrib.login}</div>
                            </div>)
                    })}
                </div>
                : null}
        </div>
    )
}

export { dashboard as Dashboard };