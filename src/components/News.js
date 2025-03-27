import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'


export class News extends Component {
    
    static defaultProps = {
        country: 'sa',
        pageSize: 9,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        setProgress: PropTypes.func,
    }

    capitalizeFirstLetter = (str) => {
        if (str.length === 0) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        console.log("Constructor called");
        this.state = {
            articles: [], // Initialize with an empty array
            loading: false,
            page: 1,
        };
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Newschimp`;
    }

    

    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true }); // Set loading to true while fetching
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
            this.setState({
                articles: parsedData.articles || [], // Default to an empty array if undefined
                loading: false,
            });
            this.props.setProgress(100);
        } catch (error) {
            console.error("Error fetching news:", error);
            this.setState({ loading: false });
        }
    }

    handlePrevClick = async () => {
        // this.props.setProgress(0);
        console.log("prev clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true }); // Set loading to true while fetching
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles || [], // Default to an empty array if undefined
                loading: false,
                page: this.state.page - 1, // Update page number after fetch
            });
            // this.props.setProgress(100);
        } catch (error) {
            console.error("Error fetching news:", error);
            this.setState({ loading: false });
        }
    }

    handleNextClick = async () => {
        // this.props.setProgress(0);
        console.log("next clicked");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true }); // Set loading to true while fetching
            try {
                let data = await fetch(url);
                let parsedData = await data.json();
                console.log(parsedData);
                this.setState({
                    articles: parsedData.articles || [], // Default to an empty array if undefined
                    loading: false,
                    page: this.state.page + 1, // Update page number after fetch
                });
                // this.props.setProgress(100);
            } catch (error) {
                console.error("Error fetching news:", error);
                this.setState({ loading: false });
            }
        }    
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className='text-center' 
                style={
                    {margin: '30px 0px', fontSize: '2.5rem', 
                        marginTop: '70px',
                        fontWeight: '600', 
                        color: '#2c3e50', 
                        fontFamily: 'Roboto, sans-serif', 
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', 
                        padding: '10px', 
                        background: 'radial-gradient(circle, rgba(63,238,251,1) 0%, rgba(63,94,251,1) 100%)', 
                        borderRadius: '10px', 
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}
                    }>OwlPost - Top '{this.capitalizeFirstLetter(this.props.category)}' Headlines</h1>
                {/* <spinner/> */}
                {this.state.loading ? (
                    <p>Loading...</p> // Show a loading indicator while fetching data
                ) : (
                    <div className="row">
                        {this.state.articles && this.state.articles.length > 0 ? (
                            this.state.articles.map((element) => (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title.slice(0, 45) : "No Title"}
                                        description={element.description ? element.description.slice(0, 88) : "No Description"}
                                        imgUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        // source={element.source.name}
                                        source={element.source.name.length > 10 ? element.source.name.slice(0, 10) + '...' : element.source.name}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No news articles available.</p>
                        )}
                    </div>
                )}
                <div className="container d-flex justify-content-end">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
                        &larr; Previous
                    </button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark mx-2" onClick={this.handleNextClick}>
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;



// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import PropTypes from "prop-types";

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     pageSize: 9,
//     category: "general",
//     searchQuery: "",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//     apiKey: PropTypes.string.isRequired,
//     searchQuery: PropTypes.string,
//     setProgress: PropTypes.func.isRequired,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       page: 1,
//     };
//     document.title = `OwlPost - ${this.capitalizeFirstLetter(this.props.category)}`;
//   }

//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   async updateNews() {
//     this.props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
//     let data = await fetch(url);
//     this.props.setProgress(40);
//     let parsedData = await data.json();
//     this.props.setProgress(70);

//     this.setState({
//       articles: parsedData.articles || [],
//       totalResults: parsedData.totalResults || 0,
//     });

//     this.props.setProgress(100);
//   }

//   componentDidMount() {
//     this.updateNews();
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.category !== this.props.category || prevProps.searchQuery !== this.props.searchQuery) {
//       this.updateNews();
//     }
//   }

//   handlePrevClick = () => {
//     this.setState({ page: this.state.page - 1 }, () => {
//       this.updateNews();
//     });
//   };

//   handleNextClick = () => {
//     this.setState({ page: this.state.page + 1 }, () => {
//       this.updateNews();
//     });
//   };

//   filterArticles = () => {
//     const { articles } = this.state;
//     const { searchQuery } = this.props;

//     if (!searchQuery) return articles;

//     return articles.filter(article => 
//       article.title && article.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   render() {
//     const filteredArticles = this.filterArticles();

//     return (
//       <div className="container my-3">
//         <h1 className="text-center">
//           OwlPost - Top "{this.capitalizeFirstLetter(this.props.category)}" Headlines
//         </h1>

//         <div className="row">
//           {filteredArticles.length > 0 ? (
//             filteredArticles.map((element) => (
//               <div className="col-md-4" key={element.url}>
//                 <NewsItem
//                   title={element.title ? element.title.slice(0, 45) : "No Title"}
//                   description={element.description ? element.description.slice(0, 88) : "No Description"}
//                   imgUrl={element.urlToImage}
//                   newsUrl={element.url}
//                   author={element.author}
//                   date={element.publishedAt}
//                   source={element.source.name.length > 10 ? element.source.name.slice(0, 10) + "..." : element.source.name}
//                 />
//               </div>
//             ))
//           ) : (
//             <p className="text-center my-3">No news articles found for "{this.props.searchQuery}"</p>
//           )}
//         </div>

//         <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             className="btn btn-dark"
//             onClick={this.handlePrevClick}
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
//             className="btn btn-dark"
//             onClick={this.handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;
