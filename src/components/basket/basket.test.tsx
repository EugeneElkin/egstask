import { screen } from '@testing-library/react';
import { render } from '../../utils/testing';
import { Basket } from './basket';

describe('Basket', () => {
    beforeEach(async () => {
    });
    it('is hidden by default', () => {
        render(<Basket></Basket>);
        const basketTopContainer = screen.queryByTestId('basketTopContainer');
        expect(basketTopContainer).not.toBeInTheDocument();
    });
    it('is show when there are items and has correct number of corresponding elements', () => {
        render(<Basket></Basket>, { basketItems: [{ id: '1', login: 'Vasily' }, { id: '2', login: 'Wolf' }], searchText: '' });
        const basketTopContainer = screen.queryByTestId('basketTopContainer');
        expect(basketTopContainer).toBeInTheDocument();
        const basketItemsContainer = screen.queryByTestId('basketItemsContainer');
        expect(basketItemsContainer?.childNodes.length).toBe(2);
    });
})