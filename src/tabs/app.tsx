import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import "~base.css"
import "~style.css"
import Menu from "./menu"
import Routing from "./routing"
import store from "./store/store"

export default function Todo() {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <div className="flex flex-col p-4">
          <Menu></Menu>
        </div>
        <Routing></Routing>
      </MemoryRouter>
    </Provider>
  )
}
