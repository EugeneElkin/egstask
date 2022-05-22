import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../utils/testing';
import { Dashboard } from '../dashboard/dashboard';
import { BackButton } from './back-button';

describe('Back button', () => {
    beforeEach(async () => {
    });
    it('is hidden by default', () => {
        render(<BackButton></BackButton>);
        const backBtn = screen.queryByTestId('backButtonContainer');
        expect(backBtn).not.toBeInTheDocument();
    });
    it('is shown when contributors are set', () => {
        render(<BackButton></BackButton>, { contributors: [] });
        const backBtn = screen.queryByTestId('backButtonContainer');
        expect(backBtn).toBeInTheDocument();
    });
    it('makes dashboard showing the list of repositories after a click', async () => {
        render(<Dashboard />, { contributors: undefined });
        let boardRepos = screen.queryByTestId('boardRepos');
        let boardContribs = screen.queryByTestId('boradContribs');
        expect(boardRepos).not.toBeInTheDocument();
        expect(boardContribs).toBeInTheDocument();
        const backBtn = screen.queryByTestId('backButtonContainer');
        fireEvent.click(backBtn as HTMLElement);
        boardRepos = screen.queryByTestId('boardRepos');
        boardContribs = screen.queryByTestId('boradContribs');
        expect(boardRepos).toBeInTheDocument();
        expect(boardContribs).not.toBeInTheDocument();
    });
})