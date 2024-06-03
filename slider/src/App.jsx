import "./App.css";

function App() {
  const CSS_PROPERTIES = [
    "color",
    "margin",
    "padding",
    "border",
    "width",
    "height",
    "background",
    "font",
    "display",
    "position",
    "top",
    "bottom",
    "left",
    "right",
    "overflow",
    "align",
    "justify",
    "float",
    "clear",
    "text",
    "transform",
    "animation",
    "transition",
    "visibility",
    "opacity",
    "zindex",
    "flex",
    "grid",
    "gap",
    "order",
  ];

  const handleNext = () => {
    document.getElementById("propCont").scrollLeft += 200;
  };

  const handlePrevious = () => {
    document.getElementById("propCont").scrollLeft -= 200;
  };

  return (
    <>
      <div className="slider">
        <button onClick={handlePrevious}>{"<"}</button>
        <div id="propCont" className="props-container">
          <div id="content" className="css-props-container">
            {CSS_PROPERTIES.map((item) => {
              return <span className="css-props">{item}</span>;
            })}
          </div>
        </div>
        <button onClick={handleNext}>{">"}</button>
      </div>
    </>
  );
}

export default App;
