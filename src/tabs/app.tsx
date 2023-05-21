import { MemoryRouter } from "react-router-dom"
import "~base.css"
import "~style.css"
import Menu from "./menu"
import Routing from "./routing"

export default function Todo() {
  return (
    <MemoryRouter>
      <div className="flex flex-col p-4">
        <Menu></Menu>
      </div>
      <Routing></Routing>
    </MemoryRouter>
  )
}
