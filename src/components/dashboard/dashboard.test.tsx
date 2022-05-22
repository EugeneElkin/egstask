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
        render(<Dashboard></Dashboard>, {
            repositories: [
                { id: '1', name: 'Repo1' },
                { id: '2', name: 'Repo2' },
                { id: '3', name: 'Repo3' }
            ],
            searchText: ''
        });
        const dashboard = screen.queryByTestId('dashboardContainer');
        expect(dashboard).toBeInTheDocument();
        const reposItemsContainer = screen.queryByTestId('reposItemsContainer');
        expect(reposItemsContainer?.childNodes.length).toBe(3);
    });
    it('is shown when contributors are set and has correct number of corresponding items', () => {
        render(<Dashboard></Dashboard>, {
            repositories: [
                { id: '1', name: 'Repo1' }
            ],
            contributors: [
                { id: '1', login: 'Vasily' },
                { id: '2', login: 'Vasily' },
                { id: '3', login: 'Vasily' }
            ],
            searchText: ''
        });
        const dashboard = screen.queryByTestId('dashboardContainer');
        expect(dashboard).toBeInTheDocument();
        const contribsItemsContainer = screen.queryByTestId('contribsItemsContainer');
        expect(contribsItemsContainer?.childNodes.length).toBe(3);
    });
    it('proclaim that looking organization does not exist', () => {
        render(<Dashboard></Dashboard>, { searchText: 'SomeOrg', repositories: null });
        const noOrganizationLabel = screen.queryByTestId('noOrganizationLabel');
        expect(noOrganizationLabel).toHaveTextContent('Organization not found');
    });
    it('proclaim that looking organization does not have repositories', () => {
        render(<Dashboard></Dashboard>, { searchText: 'SomeOrg', repositories: [] });
        const noRepositoriesLabel = screen.queryByTestId('noRepositoriesLabel');
        expect(noRepositoriesLabel).toHaveTextContent('Repositories not found');
    });
})