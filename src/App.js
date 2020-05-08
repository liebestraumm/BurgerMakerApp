import React from 'react';
import Layout from './components/Layout/Layout';
import classes from './App.css';
import BurgerMaker from './containers/BurgerMaker/BurgerMaker';
function App() {
  return (
    <div>
      <Layout>
        <p>
          <BurgerMaker />
        </p>
      </Layout>
    </div>
  );
}

export default App;
