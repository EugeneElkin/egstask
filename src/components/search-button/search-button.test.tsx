import { screen } from '@testing-library/react';
import { render } from '../../utils/testing';
import { SearchButton } from './search-button';

describe('Search button', () => {
    beforeEach(async () => {
    });
    it('is shown by default', () => {
        render(<SearchButton></SearchButton>);
        const searchButtonContainer = screen.queryByTestId('searchButtonContainer');
        expect(searchButtonContainer).toBeInTheDocument();
    });
})