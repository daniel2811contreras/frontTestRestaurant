import React from 'react'
// context
import {RestaurantProvider} from './context/restauran'
// component
import Apli from './component'
function App() {
  return (
    <RestaurantProvider>
      <Apli />
    </RestaurantProvider>
  );
}

export default App;
