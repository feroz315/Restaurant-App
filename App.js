import React from 'react';
import { Provider } from 'react-redux';
// import { mystore,persistor } from './ReduxFolder/Store';
import { store } from './ReduxFolder/Store';
// import Main from './ReduxFolder/Main';
// import { PersistGate } from 'redux-persist/integration/react';
import StackNavigation from './Screens/AppNavigator';
    


const App = () => {
   
 return (
   
    <Provider store={store}>   
      
       <StackNavigation />

      </Provider>
 )
};


export default App;
