import React, { Component } from "react";

export default class CustomSlide extends Component {
    render() {
        // const { index, ...props } = this.props;
        let wine = this.props.wine
        return (
            <div className="saved-slide" id='saved-slide'>
                <h3>{wine.title}</h3>
                <div className='slide-img'>
                    <img src={wine.imageUrl} alt={wine.title} />
                </div>
                {/* <p>{wine.description}</p> */}
                {/* <h3>{index}</h3> */}
            </div>
        );
    }
}