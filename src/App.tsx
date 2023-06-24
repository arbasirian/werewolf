import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {PlayersPage} from 'pages';
import {PlayersHeader, Template} from 'components';

const App: React.FC = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<></>} />

          <Route
            path="/"
            element={
              <Template header={<PlayersHeader />}>
                <PlayersPage />
              </Template>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
