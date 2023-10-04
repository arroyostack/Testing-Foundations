import { render, screen } from '@testing-library/react';
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

} );