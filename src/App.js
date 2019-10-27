import React,{Suspense, lazy, Fragment} from 'react';
import './App.css';
// import Head from './components/Head';
// import Clicker from './components/Clicker'
const Head = lazy(() => import('./components/Head'));
const Clicker= lazy(() => import('./components/Clicker'));


function App() {
  return (<Fragment>
     <Suspense fallback={<div>Loading...</div>}>
              <Head />
              <Clicker />
      </Suspense>         
          </Fragment>
  );
}

export default App;
