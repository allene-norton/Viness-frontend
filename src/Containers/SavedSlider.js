import React, { Component } from "react";
import Wine from '../Components/SavedSlide'
import 'semantic-ui-css/semantic.min.css'


export default class SimpleSlider extends Component {
    render() {
        const renderSavedWines = () => {
            return this.props.saved.map(wine => <Wine key={wine.id} wine={wine} postComment={this.props.postComment} deleteWine={this.props.deleteWine} setWineInfo={this.props.setWineInfo} />)
        }

        if (this.props.saved !== null && this.props.saved.length >= 1) {
            return (
                <div>
                        <p style={{ fontSize: '3rem', paddingTop:'50px'}}>saved wines:</p>
                            {renderSavedWines()}
                </div>
            );
        } else {
            return (
                <div>
                    <p style={{ fontSize: '3rem', paddingTop:'300px', paddingLeft: '100px'}}>Get started by getting a recommendation or wine pairing!</p>
                </div>
            )
        }
    }
}