//stuff that comes with the base app
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Routing and redux imports
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore } from 'redux'

//Import of our reducers.
//the reducers put the data in the store
import reducer from './reducers'

//Import our components
import Home from './components/Home'

//create the store with our reducers
let store = createStore(reducer)

//keep our routing history synced with the store
const history = syncHistoryWithStore(browserHistory, store)

//render the default application
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
