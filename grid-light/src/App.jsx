import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [lights, setLights] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const [clickedLights, setClickedLights] = useState([]);

  const toggleLight = (p, c) => {
    let gridLight = lights;
    console.log("Function clicked", p, c);
    gridLight[p][c] = 1;

    setLights([...gridLight]);
    clickedLights.push([p, c]);
    setClickedLights([...clickedLights]);
  };

  useEffect(() => {
    if (clickedLights.length === 9) {
      console.log(this);
      for (let i = clickedLights.length - 1; i >= 0; i--) {
        setTimeout(() => {
          let p = clickedLights[i][0];
          let c = clickedLights[i][1];
          let gridLight = lights;
          gridLight[p][c] = 0;
          console.log(gridLight);
          setLights([...gridLight]);
        }, 300);
      }
    }
  }, [clickedLights]);

  return (
    <>
      <h2>Grid lights</h2>
      <div className="grid-container">
        {lights.map((light, pIndex) => {
          return (
            <div key={pIndex} className="grid-row">
              {light.map((l, cIndex) => {
                return (
                  <span
                    key={cIndex}
                    onClick={() => {
                      if (l !== 1) {
                        toggleLight(pIndex, cIndex);
                      }
                    }}
                    className={l === 0 ? "white" : "green"}
                  >
                    {l}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
