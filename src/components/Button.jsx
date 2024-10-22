// Start coding here

export function Button({ type }) {
  return (
    <div>
        <button className="p-1 w-20">
      {type === "primary" ? (
        <h1 className="text-base text-white bg-blue-400 rounded-md ">
          Button
        </h1>
      ) : (
        <h1 className="text-base text-white bg-blue-700 border-blue-300 rounded-md ">
          Button
        </h1>
      )}</button>
    </div>
  );
}

