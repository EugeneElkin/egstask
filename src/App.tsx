import './App.css';
import { BackButton } from './components/back-button/back-button';
import { Basket } from './components/basket/basket';
import { Dashboard } from './components/dashboard/dashboard';
import { SearchButton } from './components/search-button/search-button';
import { SearchInput } from './components/search-input/search-input';

function App() {
    return (
        <>
            <SearchInput />
            <SearchButton />
            <BackButton />
            <Dashboard />
            <Basket />
        </>
    );
}

export default App;
