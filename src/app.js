import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <main>
            <Route exact path='/'>
              <h1>Hello, you've been Blogged!</h1>
            </Route>
          </main>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
