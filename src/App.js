import './App.css';
import NavBar from './components/NavBar';
import React, { Component } from 'react';
import News from './components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API;
  country = "us"

  state = {
    progress : 0
  }

  setProgress = (progress) => {
    this.setState({progress : progress});
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
          color="#00a6ff"
          progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={this.country} category="general" />} />
            {/* <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} /> */}
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={this.country} category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={this.country} category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={this.country} category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={this.country} category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={this.country} category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}




// import './App.css';
// import NavBar from './components/NavBar';
// import React, { Component } from 'react';
// import News from './components/News';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
//   pageSize = 9;
//   apiKey = process.env.REACT_APP_NEWS_API;
//   country = "us";

//   state = {
//     progress: 0,
//     searchQuery: ""  // New state for search query
//   };

//   setProgress = (progress) => {
//     this.setState({ progress: progress });
//   };

//   handleSearch = (query) => {
//     this.setState({ searchQuery: query }); // Update searchQuery state
//   };

//   render() {
//     return (
//       <div>
//         <Router>
//           <NavBar onSearch={this.handleSearch} />
//           <LoadingBar height={3} color="#00a6ff" progress={this.state.progress} />
//           <Routes>
//             <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={this.country} category="general" searchQuery={this.state.searchQuery} />} />
//             <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={this.country} category="business" searchQuery={this.state.searchQuery} />} />
//             <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" searchQuery={this.state.searchQuery} />} />
//             <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={this.country} category="health" searchQuery={this.state.searchQuery} />} />
//             <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={this.country} category="science" searchQuery={this.state.searchQuery} />} />
//             <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={this.country} category="sports" searchQuery={this.state.searchQuery} />} />
//             <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={this.country} category="technology" searchQuery={this.state.searchQuery} />} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
