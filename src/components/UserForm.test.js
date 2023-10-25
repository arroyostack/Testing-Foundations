import { render, screen, waitForElement } from '@testing-library/react';
import user from '@testing-library/user-event';
import { UserForm } from './UserForm';

describe( 'Test in <UserForm />', () => {

    test( 'UserForm shows two inputs and a button', () => {
        // Render component.
        render( <UserForm /> );

        // Manipulate component or find emlements in it.
        // Aim to find elements by role as best practices.
        const inputs = screen.getAllByRole( 'textbox' );
        const button = screen.getByRole( 'button' );

        // Asertion. What we expect it to do.
        expect( inputs ).toHaveLength( 2 );
        expect( button ).toBeInTheDocument();
    } );

    test( 'should call onUserAdd when the form is submitted', async () => {
        const mockFunction = jest.fn();
        // / 1. Try to render component.
        render( <UserForm onUserAdd={ mockFunction } /> );
        // 2. Find two inputs
        // const [ nameInput, emailInput ] = screen.getAllByRole( 'textbox' );
        const nameInput = screen.getByRole( 'textbox', {
            name: /name/i
        } );

        const emailInput = screen.getByRole( 'textbox', {
            name: / enter email/i
        } );
        // 3. Simulate typing a name.
        user.click( nameInput );
        user.keyboard( 'Olayi' );
        // 4. Simulate typing an email
        user.click( emailInput );
        user.keyboard( 'olayi@gmail.com' );
        // 5. Find the button.
        const button = screen.getByRole( 'button' );
        // 6. Simulate clicking the button.
        user.click( button );
        // 7. Assertion to make sure 'onUserAdd' gets call with email and name.
        expect( mockFunction ).toHaveBeenCalled();
        expect( mockFunction ).toHaveBeenCalledWith( { name: 'Olayi', email: 'olayi@gmail.com' } );
    } );

} );