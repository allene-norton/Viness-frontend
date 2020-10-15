import React, { Component } from 'react'
import SavedWines from '../Components/SavedWines'

class SavedContainer extends Component {

  renderSavedWines = () => {
    return this.props.saved.map(wine => <SavedWines key={wine.id} wine={wine} postComment={this.props.postComment} />)
  }
  render() {
    return (
      <div className="home">
        <div className='saved-wines'>
          <h3>My saved wines:</h3>
          {console.log(this.props.saved)}
          {this.props.saved.length >= 1 ? this.renderSavedWines() : <p>You don't have any saved wines yet.</p>}
        </div>
      </div>
    );
  }
}

export default SavedContainer;
