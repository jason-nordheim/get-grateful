import React from 'react';
import { BallTriangle } from '@agney/react-loading';

import Header from './Header'
import Feed from './Feed'

import { useAuth } from '../hooks/useAuth'
import Login from './Login'

// function App() {
//   const { containerProps, indicatorEl } = useLoading({
//     loading: true,
//   });
//   return <section {...containerProps}>{indicatorEl}</section>;
// }


function App() {
  const [user, loading, error] = useAuth()
  return (
    <div className="app">
      <Header />
      <main>
      {
        loading // display animated loader if loading 
          ? <BallTriangle /> 
          : error  // display any errors if something goes wrong authenticating with firebase 
            ? <p>{error} </p> 
            : user 
              ? <Feed /> 
              : <Login /> 
              /* 
              /* 
              logged in? 
                --> feed 
              
              Unauthenticated
                --> Login scrren 
              */
      }
      </main>
      
    </div>
  );
}

export default App;
