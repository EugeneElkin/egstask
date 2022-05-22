import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { AppContextProvider, IAppState, initialAppState } from '../contextes/appContext';

const customRender = (
    ui: ReactElement,
    appState: IAppState = initialAppState,
    options?: RenderOptions
) => {

    const uiWithinAppContext = (<AppContextProvider initialState={appState}>{ui}</AppContextProvider>);

    return render(uiWithinAppContext, options);
};

export { customRender as render };