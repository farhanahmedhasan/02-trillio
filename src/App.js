import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hotel from './components/Hotel';

import Tours from './components/Tours';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <div className='content'>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Hotel />
            </Route>

            <Route path='/tours'>
              <Tours />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
