import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import SavedContainer from './SavedContainer'
class Home extends Component {


  render() {
    return (
      <div className="home">
        <div className='saved'>
          <Container fluid >
            <SavedContainer
              postComment={this.props.postComment}
              saved={this.props.saved}
              deleteWine={this.props.deleteWine}
              setWineInfo={this.props.setWineInfo}
            />
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
