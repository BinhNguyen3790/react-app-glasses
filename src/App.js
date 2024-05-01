import RenderGlasses from "./components/RenderGlasses";

function App() {
  return (
    <div className="App container-fluid p-0 vh-100" style={{ backgroundImage: "url(./assets/imgs/glassesImage/background.jpg)", backgroundSize: "cover" }}>
      <div className="bg-page p-0 vh-100" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
        <h1 className="py-3 px-2 text-white text-center" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
          glasses project
        </h1>
        <RenderGlasses />
      </div>
    </div>
  );
}

export default App;
