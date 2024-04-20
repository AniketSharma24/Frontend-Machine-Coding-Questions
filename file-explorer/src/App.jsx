import { useState } from "react";
import { mockFileData, type } from "./data/mockFileData";
import List from "./components/list";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(mockFileData);

  return (
    <>
      <h3>File Explorer</h3>
      <div className="explorer">
        <List list={data} />
      </div>
    </>
  );
}

export default App;
