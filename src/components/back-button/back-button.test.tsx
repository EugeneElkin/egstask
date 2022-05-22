import { screen } from '@testing-library/react';
import { render } from '../../utils/testing';
import { BackButton } from './back-button';

describe('Back button', () => {
    beforeEach(async () => {
    });
    it('is hidden by default', () => {
        render(<BackButton></BackButton>, { contributors: null, searchText: '' });
        const backBtn = screen.queryByTestId('backButtonContainer');
        expect(backBtn).not.toBeInTheDocument();
    });
    it('is shown when contributors are set', () => {
        render(<BackButton></BackButton>, { contributors: [], searchText: '' });
        const backBtn = screen.queryByTestId('backButtonContainer');
        expect(backBtn).toBeInTheDocument();
    });
})