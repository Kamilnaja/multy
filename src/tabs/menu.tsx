export default function Menu() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between">
          <a href="#" className="text-xl font-bold">
            Home
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Templates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Stats
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Options
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
