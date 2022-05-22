import { screen } from '@testing-library/react';
import { render } from '../../utils/testing';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
    beforeEach(async () => {
    });
    it('is hidden by default', () => {
        render(<Dashboard></Dashboard>);
        const dashboard = screen.queryByTestId('dashboardContainer');
        expect(dashboard).not.toBeInTheDocument();
    });
    it('is shown when repositories are set and has correct number of corresponding items', () => {
        render(<Dashboard></Dashboard>, { repositories: [{ id: '1', name: 'Repo1' }, { id: '2', name: 'Repo2' }, { id: '3', name: 'Repo3' }] });
        const dashboard = screen.queryByTestId('dashboardContainer');
        expect(dashboard).toBeInTheDocument();
        const reposItemsContainer = screen.queryByTestId('reposItemsContainer');
        expect(reposItemsContainer?.childNodes.length).toBe(3);
    });
    it('is shown when contributors are set and has correct number of corresponding items', () => {
        render(<Dashboard></Dashboard>, { contributors: [{ id: '1', name: 'Vasily' }, { id: '2', name: 'Vasily' }, { id: '3', name: 'Vasily' }] });
        const dashboard = screen.queryByTestId('dashboardContainer');
        expect(dashboard).toBeInTheDocument();
        const contribsItemsContainer = screen.queryByTestId('contribsItemsContainer');
        expect(contribsItemsContainer?.childNodes.length).toBe(3);
    });
    it('proclaim that looking organization does not exist', () => {
        render(<Dashboard></Dashboard>, { searchText: 'SomeOrg' });
        const noResultsLabel = screen.queryByTestId('noResultsLabel');
        expect(noResultsLabel).toHaveTextContent('Organization not found');
    });
    it('proclaim that looking organization does not have repositories', () => {
        render(<Dashboard></Dashboard>, { searchText: 'SomeOrg' });
        const noResultsLabel = screen.queryByTestId('noResultsLabel');
        expect(noResultsLabel).toHaveTextContent('Repositories not found');
    });
})