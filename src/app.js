import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './components/blogs/index.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <main>
            <Route exact path='/'>
              <h1>Hello, you've been Blogged!</h1>
              <Blog />
            </Route>
          </main>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
