import { useEffect, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";


const App = () => {
  const [ users, setUsers ] = useState( [] );


  const onUserAdd = ( user ) => {
    console.log( "🚀 ~ file: App.js:11 ~ onUserAdd ~ user:", user );
    setUsers( previousValue => [ ...previousValue, user ] );
  };

  return (
    <>
      <UserForm onUserAdd={ onUserAdd } />
      <hr />
      <UserList users={ users } />
    </>
  );
};

export default App;
