import { screen } from '@testing-library/react';
import { render } from '../../utils/testing';
import { Basket } from './basket';

describe('Search button', () => {
    beforeEach(async () => {
    });
    it('is hidden by default', () => {
        render(<Basket></Basket>);
        const basketTopContainer = screen.queryByTestId('basketTopContainer');
        expect(basketTopContainer).not.toBeInTheDocument();
    });
    it('is show when there are items and has correct number of corresponding elements', () => {
        render(<Basket></Basket>, { basketItems: [{ id: '1', name: 'Vasily' }, { id: '1', name: 'Wolf' }] });
        const basketTopContainer = screen.queryByTestId('basketTopContainer');
        expect(basketTopContainer).not.toBeInTheDocument();
        const basketItemsContainer = screen.queryByTestId('basketItemsContainer');
        expect(basketItemsContainer?.childNodes.length).toBe(2);
    });
})