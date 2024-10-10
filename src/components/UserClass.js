import React from "react";
import { createBrowserRouter } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + " constructor");

    this.state = {
      userInfo: {
        name: "hello",
      },
    };
    console.log("State variable created");
  }

  async componentDidMount() {
    console.log(this.props.name + " componentDidMount");
    const data = await fetch("https://api.github.com/users/Aditya-Rajawat");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + " componentdidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + " componentWillUnmount");
  }

  render() {
    // const { name , location } = this.props

    console.log(this.props.name + " render");

    const { name, login, avatar_url } = this.state.userInfo;

    // debugger;

    return (
      <div className="flex bg-gray-200 rounded-3xl my-20 text-3xl mx-10 items-center p-10">
        <img
          className="rounded-[50%] w-52 h-52 mx-5 border-8 border-white"
          src={avatar_url}
          alt=""
        />
        <div className="flex flex-col justify-center gap-14 w-full p-10 text-gray-700 font-semibold text-xl mx-5 px-10 bg-gray-50 backdrop-filter backdrop-blur-20 rounded-2xl">
          <p>
            Name : <span className="font-light">{name}</span>
          </p>
          <p>
            Login : <span className="font-light">{login}</span>
          </p>
          <p>
            Contact :{" "}
            <span className="font-light">adityarajawat04@gmail.com</span>
          </p>
        </div>
      </div>
    );
  }
}

export default UserClass;
