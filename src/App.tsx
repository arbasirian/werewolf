import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PlayersPage } from "pages";
import { PlayersHeader, Template } from "components";
import usePlayersStore from "store/players.store";

const App: React.FC = () => {
  const { players } = usePlayersStore();
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<></>} />

          <Route
            path="/"
            element={
              <Template
                header={<PlayersHeader />}
                footer={players.length > 0 ? <>here</> : null}
              >
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
