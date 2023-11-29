// Import necessary modules for the project
import { React, useState, Component } from "react";
import "./App.css";
import { Button, Modal } from "antd";
import { SVGAttributes } from "react";

// Creating a class-based component(transforming function component)
class App extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Kola Gabriel",
        bio: "Kola Gabriel is a passionate and detail-oriented software engineer with a proven track record of designing and implementing complex software solutions. With a strong background in computer science and hands-on experience in full-stack development, Kola thrives in collaborative environments where innovative ideas are translated into robust and scalable software applications.His expertise encompasses a wide range of technologies, including front-end development with React.js, back-end development with Node.js, and database management with MongoDB. Kola is well-versed in the latest industry trends and is dedicated to staying ahead of the curve in an ever-evolving technological landscape.Outside of coding, Kola is an avid learner, always exploring new technologies and frameworks to expand his skill set. He is also passionate about sharing knowledge with the community, whether through writing tech blogs, participating in meetups, or mentoring aspiring developers.With a relentless commitment to excellence and a genuine enthusiasm for software development, Kola Gabriel is a valuable asset to any team striving to build cutting-edge and impactful software solutions.",
        imgSrc:
          "https://th.bing.com/th/id/OIP._tSfQ4W6y7yLOqxMejgq2wHaHg?rs=1&pid=ImgDetMain",
        profession: "Software Engineer",
      },
      show: false,
      intervalId: null,
      timeSinceMount: 0,
    };
  }

  // Lifecycle method to handle interval setup
  componentDidMount() {
    // Set up an interval to update timeSinceMount every second
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);

    // Save the intervalId in the state for cleanup on unmount
    this.setState({ intervalId });
  }

  // Button click handler to toggle show state
  handleToggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  // Lifecycle method to clean up interval on component unmount
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <>
        <div className="card shadow-2xl">
          <div className="mx-auto shadow-2xl max-w-2xl rounded-lg w-full p-8 bg-orange-300">
            {/* Button to trigger the show state */}
            <button
              onClick={this.handleToggleShow}
              style={{
                fontFamily: "serif",
                padding: "18px",
                margin: "15px",
                border: "none",
              }}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 hover:bg-sky-700 rounded-2xl cursor-help shadow-2xl"
            >
              <svg class="animate-ping w-1 h-1 m-1"></svg> Display Profile
            </button>

            {/* Display person's profile when click and its show is true */}
            {show && (
              <div className="shadow-2xl rounded-3xl">
                <img
                  src={person.imgSrc}
                  alt="my_image"
                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
                  }}
                />

                <h2
                  style={{
                    padding: "20px",
                    fontFamily: "Creepster",
                    letterSpacing: "3px",
                    fontWeight: "700px",
                    fontSize: "44px",
                  }}
                >
                  {person.fullName}
                </h2>
                <div
                  className="p-12 mt-3 text-justify"
                  style={{
                    fontFamily: "cursive",
                    boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                  }}
                >
                  <p className="text-base/6"> 🚀 {person.bio}</p>
                </div>
                <p className="pb-7">
                  💼 Profession:{" "}
                  <span className="font-bold">{person.profession}</span>
                </p>
              </div>
            )}

            {/* Display time since mount */}
            <p className="mt-3 rounded-2xl">
              ⏰ Time since mount:{" "}
              <span className="text-xl">{timeSinceMount}</span> seconds
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default App;
