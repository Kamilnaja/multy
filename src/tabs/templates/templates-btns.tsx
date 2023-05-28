export default function TemplatesBtns() {
  function handleOnClick(): void {
    console.log("handleOnClick");
  }

  return (
    <div className="flex justify-end absolute right-0">
      <button className="pr-2" onClick={handleOnClick}>
        Add to todos
      </button>
      <button className="pr-2">Edit</button>
      <button className="">Archive</button>
    </div>
  );
}
