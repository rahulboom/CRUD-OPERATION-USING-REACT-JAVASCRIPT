import React from "react";
import "./Record.css";

class Record extends React.Component {
  constructor() {
    super();
    /*let arr1;
        function fetchData(){
            
            fetch("../data/emp.json")
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                arr1 = data;
                this.setState({arr:arr1})
                console.log(this.state.arr);
            });
            
        }*/
    let item;

    this.state = {
      flag: true,
      flag1: true,
      tar: 59,
      tar1: "",
      arr: [
        {
          name: "vishal",
          id: 123456,
          skills: "ReactJS",
          project: "cognizant Internal",
          HCM: "rohit",
          gender: "male.png",
        },
        {
          name: "ajay",
          id: 123457,
          skills: "AngularJS",
          project: "cognizant Internal",
          HCM: "rohit",
          gender: "male.png",
        },
        {
          name: "sonu",
          id: 123458,
          skills: "JS",
          project: "cognizant Internal",
          HCM: "rohit",
          gender: "male.png",
        },
        {
          name: "thakur",
          id: 123459,
          skills: "ReactJS",
          project: "cognizant Internal",
          HCM: "rohit",
          gender: "male.png",
        },
        {
          name: "saumya",
          id: 123460,
          skills: "JS",
          project: "cognizant Internal",
          HCM: "rohit",
          gender: "woman.png",
        },
        {
          name: "ritesh",
          id: 123461,
          skills: "AngularJS",
          project: "cognizant Internal",
          HCM: "rohit",
          gender: "male.png",
        },
        {
          name: "riya",
          id: 123462,
          skills: "ReactJS",
          project: "cognizant Internal",
          HCM: "rohit",
          gender: "woman.png",
        },
        {
          name: "anil",
          id: 123463,
          skills: "AngularJS",
          project: "cognizant Internal",
          HCM: "rohit",
          gender: "male.png",
        },
        {
          name: "vanshika",
          id: 123464,
          skills: "JS",
          project: "cognizant Internal",
          HCM: "rohit",
          gender: "woman.png",
        },

        {
          name: "john",
          id: 123465,
          skills: "ReactJS",
          project: "cognizant Internal",
          HCM: "rohit",
          gender: "male.png",
        },
      ],
    };
  }
  press = () => {
    let flag = !this.state.flag;
    this.setState({ flag: flag });
  };
  look = () => {
    let flag1 = !this.state.flag1;
    this.setState({ flag1: flag1 });
  };
  dele = (ind) => {
    let { arr } = this.state;
    arr.splice(ind, 1);
    this.setState({ arr: arr });
  };
  ins = (go) => {
    let { tar } = this.state;
    tar = go;
    this.setState({ tar: go });
  };
  inp = (tod) => {
    let { tar1, arr } = this.state;
    for (let emp of arr) {
      if (emp.id == tod) {
        emp.skills = tar1;
      }
    }
    this.setState({ arr: arr, tar: 59 });
  };
  changeHandler = (event) => {
    let toss = event.target.value;
    this.setState({ tar1: toss });
  };

  /*init = () =>{
         this.fetchData();
    }*/

  render() {
    //setTimeout(() => { this.setState({ arr: arr1 }) }, 100);
    let { arr } = this.state;
    arr.sort(function (a, b) {
        let x = a.gender.toLowerCase();
        let y = b.gender.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    // console.log(this.state.arr)
    return (
      <div className="bd">
        <div>
          <div className="im">
            <img
              src={require("../assets/img/squares.png")}
              alt=""
              onClick={this.press}
            ></img>
          </div>
          <div id="togg">
            {this.state.flag == true && (
              <div className="grid-container" id="gi">
                {arr.map((item, ind) => {
                  return (
                    <div key={ind}>

                      {this.state.tar == ind ? (
                        <div className="grid-item">
                          <div className="w3-card-4">
                            <div onClick={() => this.dele(ind)}>
                              <img
                                src={require("../assets/img/close.png")}
                                alt=""
                                style={{
                                  width: "25px",
                                  height: "auto",
                                  float: "right",
                                }}
                              ></img>
                            </div>
                            <img
                              src={require(`../assets/img/${item.gender}`)}
                              alt="Alps"
                              style={{ width: "100%", clear: "right" }}
                            ></img>
                            <div className="w3-container w3-center">
                              <div className="cap">
                                <div>Name:{item.name}</div>
                                <div>id:{item.id}</div>
                                <div>
                                  skills:
                                  <input
                                    type="text"
                                    id="ce"
                                    style={{ width: "13%" }}
                                    onChange={this.changeHandler}
                                  ></input>
                                </div>
                                <div>Project:{item.project}</div>
                                <div>HCM:{item.HCM}</div>
                                <div
                                  onClick={() => this.inp(item.id)}
                                  style={{ color: "blue", marginLeft: "70%" }}
                                >
                                  Save
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid-item">
                          <div className="w3-card-4">
                            <div onClick={() => this.dele(ind)}>
                              <img
                                src={require("../assets/img/close.png")}
                                alt=""
                                style={{
                                  width: "25px",
                                  height: "auto",
                                  float: "right",
                                }}
                              ></img>
                            </div>
                            <img
                              src={require(`../assets/img/${item.gender}`)}
                              alt="Alps"
                              style={{ width: "100%", clear: "right" }}
                            ></img>
                            <div className="w3-container w3-center">
                              <div className="cap">
                                <div>Name:{item.name}</div>
                                <div>id:{item.id}</div>
                                <div>skills:{item.skills}</div>
                                <div>Project:{item.project}</div>
                                <div>HCM:{item.HCM}</div>
                                <div
                                  onClick={() => this.ins(ind)}
                                  style={{ color: "blue", marginLeft: "70%" }}
                                >
                                  Edit
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="im1" style={{ height: "60px" }}>
            <img
              src={require("../assets/img/equal.png")}
              alt=""
              onClick={this.look}
            ></img>
          </div>
          <div id="togg1">
            {this.state.flag1 == true && (
              <div className="li">
                <ul>
                  <li>Name</li>
                  <li>Id</li>
                  <li>Skill</li>
                  <li>Project</li>
                  <li>HCM</li>
                  <li></li>
                </ul>
                {arr.map((item, ind) => {
                  return (
                    <div id="ti" key={ind}>
                      {this.state.tar == ind ? (
                        <ul>
                          <li>{item.name}</li>
                          <li>{item.id}</li>

                          <li>
                            <input
                              type="text"
                              id="ch"
                              style={{ width: "18%" }}
                              onChange={this.changeHandler}
                            ></input>
                          </li>

                          <li>{item.project}</li>
                          <li>{item.HCM}</li>
                          <li>
                            <img
                              src={require("../assets/img/save.png")}
                              alt=""
                              style={{ width: "25px", height: "auto" }}
                              onClick={() => this.inp(item.id)}
                            ></img>
                            <img
                              src={require("../assets/img/close.png")}
                              alt=""
                              style={{ width: "25px", height: "auto" }}
                              onClick={() => this.dele(ind)}
                            ></img>
                          </li>
                        </ul>
                      ) : (
                        <ul>
                          <li>{item.name}</li>
                          <li>{item.id}</li>

                          <li>{item.skills}</li>

                          <li>{item.project}</li>
                          <li>{item.HCM}</li>
                          <li>
                            <img
                              src={require("../assets/img/edit.png")}
                              alt=""
                              style={{ width: "25px", height: "auto" }}
                              onClick={() => this.ins(ind)}
                            ></img>
                            <img
                              src={require("../assets/img/close.png")}
                              alt=""
                              style={{ width: "25px", height: "auto" }}
                              onClick={() => this.dele(ind)}
                            ></img>
                          </li>
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Record;
