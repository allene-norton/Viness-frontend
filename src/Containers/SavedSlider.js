import React, { Component } from "react";
import { Item, Grid } from 'semantic-ui-react'
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
                    {/* <Grid container centered stackable columns={4} > */}
                        {/* <Item.Group> */}
                            {renderSavedWines()}
                        {/* </Item.Group> */}
                    {/* </Grid> */}
                </div>
            );
        } else {
            return (
                <div>
                    {/* <p style={{fontSize: '3rem'}}>You don't have any saved wines.</p> */}
                    <p style={{ fontSize: '3rem', paddingTop:'300px'}}>Get started by getting a recommendation or wine pairing!</p>
                </div>
            )
        }
        // return (
        //     <div>
        //         <Slider {...settings}>
        //             {this.props.saved !== null && this.props.saved.length >= 1 ? renderSavedWines() : <p>You don't have any saved wines yet.</p>}
        //         </Slider>
        //     </div>
        // );
    }
}