import { Component } from "react";
import dataGlass from "../dataGlasses.json";

class RenderGlasses extends Component {
  renderGlass = () => {
    return dataGlass.map((glass, index) => {
      return (
        <li key={index} className="list-group-item border p-2 m-2" style={{cursor:"pointer"}}>
          <img className="w-100" alt="imgText" src={glass.url} />
        </li>
      );
    });
  };

  render() {
    let glassStyle = {
      maxWidth: "150px",
      position: "absolute",
      left: "3.2rem",
      top: "4.7rem",
      opacity: "0.7",
    };
    let descStyle = {
      position: "absolute",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "white",
    };
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <div className="box-item" style={{ position: "relative", maxWidth: "250px" }}>
              <img alt="imgtext" className="w-100" src="./assets/imgs/glassesImage/model.jpg" />
              <img alt="imgtext" style={glassStyle} src="./assets/imgs/glassesImage/v1.png" />
              <div className="desc p-2" style={descStyle}>
                <h3>Title</h3>
                <p className="m-0">loremlor eml oremlo remlor em loremlore mlorem</p>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div className="box-item" style={{ position: "relative" }}>
              <img alt="imgtext" style={{ maxWidth: "250px" }} src="./assets/imgs/glassesImage/model.jpg" />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <ul className="list-group listGlass p-3 m-0 bg-white d-flex justify-content-center flex-row">{this.renderGlass()}</ul>
        </div>
      </div>
    );
  }
}

export default RenderGlasses;
