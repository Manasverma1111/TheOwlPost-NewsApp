import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";

export class NavBar extends Component {
  componentDidMount() {
    // Close navbar when clicking a link (for mobile view)
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarToggler.click(); // Simulates a button click to close the menu
        }
      });
    });
  }

  render() {
    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">OwlPost</NavLink>
            <button className="navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                {/* <li className="nav-item"><a className="nav-link" to="/about">About</a></li> */}
                <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
                {/* <li className="nav-item"><NavLink className="nav-link" to="/general">General</NavLink></li> */}
                <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;



// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

// export class NavBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: "",
//     };
//   }

//   handleInputChange = (event) => {
//     this.setState({ searchQuery: event.target.value });
//   };

//   handleSearch = (event) => {
//     event.preventDefault();
//     if (this.state.searchQuery.trim() !== "") {
//       this.props.onSearch(this.state.searchQuery.trim()); // Send search query to parent
//     }
//   };

//   render() {
//     return (
//       <header>
//         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
//           <div className="container-fluid">
//             <NavLink className="navbar-brand" to="/">OwlPost</NavLink>
//             <button className="navbar-toggler" type="button"
//               data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent" aria-expanded="false"
//               aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
//                 <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
//                 <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
//                 <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
//                 <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
//                 <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
//                 <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
//               </ul>
//               <form className="d-flex" role="search" onSubmit={this.handleSearch}>
//                 <input className="form-control me-2" type="search" 
//                   placeholder="Search news..." 
//                   aria-label="Search" 
//                   value={this.state.searchQuery} 
//                   onChange={this.handleInputChange} />
//                 <button className="btn btn-outline-primary" type="submit">Search</button>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </header>
//     );
//   }
// }

// export default NavBar;
