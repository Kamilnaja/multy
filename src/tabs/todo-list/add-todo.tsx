import { useState } from "react"
import { useDispatch } from "react-redux"
import { PRIORITIES } from "./priority"

const AddTodo = () => {
  const dispatch = useDispatch()
  const [category] = useState("")
  const [priority, setPriority] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", priority, description)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e)
    }
  }

  const prioritiesList = PRIORITIES.map((priority) => (
    <option key={priority}>{priority}</option>
  ))

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add Todo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex">
          <div className="grow-0 pr-2">
            <label htmlFor="priority" className="block mb-1 font-medium">
              Priority
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required>
              {prioritiesList}
            </select>
          </div>
          <div className="flex-grow">
            <label htmlFor="description" className="block mb-1 font-medium">
              Description
            </label>
            <input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={handleKeyDown}></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTodo
