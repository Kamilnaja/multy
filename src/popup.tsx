import "~base.css";
import "~style.css";

export default function IndexPopup() {
  setTimeout(() => {
    chrome.tabs.create({
      url: "./tabs/app.html"
    });
  });
  return <></>;
}
