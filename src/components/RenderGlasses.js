import { Component } from "react";
import dataGlass from "../dataGlasses.json";

class RenderGlasses extends Component {
  state = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./assets/imgs/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };

  renderGlass = () => {
    return dataGlass.map((glass, index) => {
      return (
        <li
          key={index}
          className="list-group-item border p-2 m-2"
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.changeGlass(glass);
          }}
        >
          <img className="w-100" alt="imgText" src={glass.url} />
        </li>
      );
    });
  };

  changeGlass = (glass) => {
    this.setState(glass);
  };

  render() {
    let keyAnimation = `
    @keyframes animationGlass${Date.now()} {
      from {
        width:0;
        transform:rotate(-45deg);
      }
      to{
        width: 150px;
        transform:rotate(0deg);
      }
    }`;
    let glassStyle = {
      maxWidth: "150px",
      position: "absolute",
      left: "3.2rem",
      top: "4.7rem",
      opacity: "0.7",
      transform: "rotate(0deg)",
      animation: `animationGlass${Date.now()} 1s`,
    };
    let descStyle = {
      position: "absolute",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "white",
    };
    return (
      <div className="container mt-5">
        <style>{keyAnimation}</style>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <div className="box-item" style={{ position: "relative", maxWidth: "250px" }}>
              <img alt="imgtext" className="w-100" src="./assets/imgs/glassesImage/model.jpg" />
              <img className="animationGlass" alt="imgtext" style={glassStyle} src={this.state.url} />
              <div className="desc p-2" style={descStyle}>
                <h3>{this.state.name}</h3>
                <p className="m-0">{this.state.desc}</p>
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
