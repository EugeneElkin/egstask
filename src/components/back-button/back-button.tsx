/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { AppContext, APP_ACTION_TYPE } from '../../contextes/appContext';

const backButton = () => {
    const { state: appState, dispatch } = useContext(AppContext);

    if (!appState.contributors) {
        return null;
    }

    const backHandler = () => {
        dispatch({
            type: APP_ACTION_TYPE.SET_CONTRIBUTORS,
            payload: null
        });
    };

    return (
        <button data-testid='backButtonContainer' onClick={backHandler}>Back</button>
    );
}

export { backButton as BackButton };