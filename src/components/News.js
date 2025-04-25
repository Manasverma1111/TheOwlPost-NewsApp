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
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - OwlPost`;
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
                {/* <h1 className='text-center heading-title'>OwlPost - Top '{this.capitalizeFirstLetter(this.props.category)}' Headlines</h1>
                <h3 className="text-center news-subheading">
                    Stay curious, stay informed — your daily dose of news begins here 📰
                </h3> */}
                <div className="heading-title">
                    <h1>
                        OwlPost - Top '{this.capitalizeFirstLetter(this.props.category)}' Headlines
                    </h1>
                    <h3 className="news-subheading">
                        Stay curious, stay informed — your daily dose of news begins here 📰
                    </h3>
                </div>

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

