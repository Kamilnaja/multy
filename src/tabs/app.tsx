import { PersistGate } from "@plasmohq/redux-persist/integration/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "~base.css";
import "~style.css";
import Menu from "./menu";
import Routing from "./routing";
import { persistor, store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MemoryRouter>
          <div className="flex flex-col p-4">
            <Menu></Menu>
          </div>
          <Routing></Routing>
        </MemoryRouter>
      </PersistGate>
    </Provider>
  );
}
