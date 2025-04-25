import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
        return (
        <div className='my-3'>
            <div className="card hover-rise fade-in glass-card">
            {/* <span className="position-absolute badge rounded-pill bg-success"
                style={{ top: '10px', right: '10px', zIndex: 1 }}>
                {source}
            </span> */}
            <span className="position-absolute translate-middle badge rounded-pill bg-success"
                style={{ left: "90%", top: "10px", zIndex: '1' }}>
                {source}
            </span>
                <img src={!imgUrl? "https://media.zenfs.com/en/Benzinga/b6cc65a7866d4fa83aea81cb82e910fb": imgUrl} className="card-img-top zoom-img" alt="..." />
                <div className="card-body zoom-text">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-primary">Updated by {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}

export default NewsItem
