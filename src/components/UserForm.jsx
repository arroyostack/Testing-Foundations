import { useState } from "react";


export const UserForm = ( { onUserAdd } ) => {
    const [ email, setEmail ] = useState( '' );
    const [ name, setName ] = useState( '' );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        onUserAdd( { name, email } );
        setEmail( '' );
        setName( '' );
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Name</label>
                <input value={ name } onChange={ event => setName( event.target.value ) } type="text" />
            </div>
            <div>
                <label>Email</label>
                <input value={ email } onChange={ event => setEmail( event.target.value ) } type="text" />
            </div>

            <button>Add User</button>
        </form>
    );
};
