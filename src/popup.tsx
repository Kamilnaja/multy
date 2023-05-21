import "~base.css"
import "~style.css"

export default function IndexPopup() {
  return (
    <div className="flex items-center justify-center h-16 w-40">
      <button
        onClick={() => {
          chrome.tabs.create({
            url: "./tabs/app.html"
          })
        }}>
        Open todo page
      </button>
    </div>
  )
}
