import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";
// import Conditional from "./components/Conditinal";
//import ContactCard from "./components/ContactCard";

//login
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: true
//     };
//     this.changeStatus = this.changeStatus.bind(this);
//   }

//   changeStatus() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       };
//     });
//   }

//   render() {
//     let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In";
//     let dispText = this.state.isLoggedIn ? "in" : "out";
//     return (
//       <div>
//         <h1>You are logged {dispText}</h1>
//         <button onClick={this.changeStatus}>{buttonText}</button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       unreadMessages: []
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.unreadMessages.length > 0 && (
//           <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
//         )}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: true
//     };
//   }

//   componentDidMount() {
//     setTimeout(
//       () =>
//         this.setState({
//           isLoading: false
//         }),
//       1500
//     );
//   }

//   render() {
//     return (
//       <div>
//         <Conditional isLoading={this.state.isLoading} />
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   componentDidMount() {
//     // runs once to render component
//   }

//   componentWillReceiveProps() {
//     if (nextProps.whatever !== this.props.whatever) {
//       // do something important here
//     }
//   }

//   shouldComponentUpdate(nextProps, nextState)  {
//     // return true if want it to update
//     // return false if not
//   }

//   componentWillUnmount() {
//     // eg: remove event listener
//     // teardown or cleanup your code before your component disappears
//   }

//   render() {
//     return <div>Code goes here</div>;
//   }
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//     this.add = this.add.bind(this);
//     this.sub = this.sub.bind(this);
//   }

//   add() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       };
//     });
//   }

//   sub() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count - 1
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.sub}>Subtract</button>
//       </div>
//     );
//   }
// }

// function App() {s
//   return (
//     <div>
//       <img
//         onMouseOver={() => console.log("Hovered")}
//         src="https://www.fillmurray.com/200/100"
//       />
//       <br />
//       <br />
//       <button onClick={() => console.log("I was clicked!")}>Click me</button>
//     </div>
//   );
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false
//     };
//   }

//   render() {
//     let status = "";
//     if (this.state.isLoggedIn === true) {
//       status = "in";
//     } else {
//       status = "out";
//     }
//     return (
//       <div>
//         <h1>You are currently logged {status}</h1>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Nachiket",
//       age: "23"
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age} years old</h3>
//       </div>
//     );
//   }
// }

// function App() {
//   const todoItems = todosData.map(item => (
//     <TodoItem key={item.id} item={item} />
//   ));

//   return <div className="todo-list">{todoItems}</div>;
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header username="Nachiket" />
//         <Greeting />
//       </div>
//     );
//   }
// }

// // #2
// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}!</p>
//       </header>
//     );
//   }
// }

// // #3
// class Greeting extends React.Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;

//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "night";
//     }
//     return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
//   }
// }

export default App;
