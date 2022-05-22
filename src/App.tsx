import './App.css';
import { BackButton } from './components/back-button/back-button';
import { Basket } from './components/basket/basket';
import { Dashboard } from './components/dashboard/dashboard';
import { SearchButton } from './components/search-button/search-button';
import { SearchInput } from './components/search-input/search-input';
import classes from './App.module.css';

function App() {
    return (
        <>
            <div className={classes.searchForm}>
                <SearchInput />
                <SearchButton />
            </div>
            <div className={classes.contentBox}>
                <div className={classes.listContent}>
                    <BackButton />
                    <Dashboard />
                </div>
                <div className={classes.basketContent}>
                    <Basket />
                </div>
            </div>


        </>
    );
}

export default App;
