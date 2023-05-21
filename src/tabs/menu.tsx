import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <div className="flex flex-col p-4">
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-xl font-bold">
            Home
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/templates" className="hover:text-gray-300">
                Templates
              </Link>
            </li>
            <li>
              <Link to="/stats" className="hover:text-gray-300">
                Stats
              </Link>
            </li>
            <li>
              <Link to="/options" className="hover:text-gray-300">
                Options
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
