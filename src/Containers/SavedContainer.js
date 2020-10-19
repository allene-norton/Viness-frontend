import React, { Component } from 'react'
import SavedSlider from './SavedSlider'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class SavedContainer extends Component {

  render() {
    return (
      <div className='saved-wines'>
        <SavedSlider
          saved={this.props.saved}
          postComment={this.props.postComment}
          deleteWine={this.props.deleteWine}
          setWineInfo={this.props.setWineInfo}
        />
      </div>
    );
  }
}

export default SavedContainer;
