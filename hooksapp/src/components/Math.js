// math.js in src  which is consumed in App.js
export function add(a, b) {
  return a + b;
  }


  /*
import OtherComponent from './OtherComponent';

const MyComponent = () => (
  <OtherComponent/>
);
After:

import Loadable from 'react-loadable';

const LoadableOtherComponent = Loadable({
  loader: () => import('./OtherComponent'),
  loading: () => <div>Loading...</div>,
});

const MyComponent = () => (
  <LoadableOtherComponent/>
);
React Loadable helps you create loading states, error states, timeouts, preloading, and more. It can even help you server-side render an app with lots of code-splitting.


  */

  /*
// Route-based code splitting
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./routes/About'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </Router>
);


  */