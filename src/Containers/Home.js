import React, { Component } from 'react'
import SavedContainer from './SavedContainer'
class Home extends Component {


  render() {
    return (
      <div className="home">
        <div className='saved'>
          <SavedContainer
            postComment={this.props.postComment} 
            saved={this.props.saved} 
            deleteWine={this.props.deleteWine}
            setWineInfo={this.props.setWineInfo} 
            />
        </div>
      </div>
    );
  }
}

export default Home;
