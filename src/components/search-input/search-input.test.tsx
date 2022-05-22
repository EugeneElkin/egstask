import { screen } from '@testing-library/react';
import { render } from '../../utils/testing';
import { SearchInput } from './search-input';

describe('Search input', () => {
    beforeEach(async () => {
    });
    it('is shown by default', () => {
        render(<SearchInput></SearchInput>);
        const searchInputContainer = screen.queryByTestId('searchInputContainer');
        expect(searchInputContainer).toBeInTheDocument();
    });
    it('contains entered value', () => {
        render(<SearchInput></SearchInput>, { searchText: 'Some repo request' });
        const searchInputContainer = screen.queryByTestId('searchInputContainer');
        expect(searchInputContainer).toHaveValue('Some repo request');
    });
})