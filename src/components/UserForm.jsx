import { useState } from "react";


export const UserForm = ( { onUserAdd } ) => {
    const [ email, setEmail ] = useState( '' );
    const [ name, setName ] = useState( '' );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        onUserAdd( { name, email } );
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="name">Enter Name</label>
                <input
                    id="name"
                    type="text"
                    value={ name }
                    onChange={ event => setName( event.target.value ) }
                />
            </div>
            <div>
                <label htmlFor="email">Enter Email</label>
                <input
                    id="email"
                    type="text"
                    value={ email }
                    onChange={ event => setEmail( event.target.value ) }
                />
            </div>

            <button>Add User</button>
        </form>
    );
};
