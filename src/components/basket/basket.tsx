/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { AppContext } from '../../contextes/appContext';

const basket = () => {
    const { state: appState } = useContext(AppContext);

    if (!appState.basketItems) {
        return null;
    }

    return (
        <div data-testid='basketTopContainer'>
            <div><b>Basket:</b></div>
            <div data-testid='basketItemsContainer'>
                {appState.basketItems.map(item => {
                    return (<div key={item.id}>{item.login}</div>);
                })}
            </div>
        </div>
    )
}

export { basket as Basket };