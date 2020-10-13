import React, { Component } from 'react'
import SavedWines from '../Components/SavedWines'

class SavedContainer extends Component {
  
//   getSavedWines = () => {
//     let allWines = this.props.allWines
//     let allUserWines = this.props.userWines
//     let userId = JSON.parse(sessionStorage.getItem('user')).user_id
//     let userWines = allUserWines.filter(wine => wine.user_id === userId)
//     let wineIds = userWines.map(wine => wine.wine_id)
//     let userWineData = []
//     for (let i = 0; i < wineIds.length; i++) {
//       let wine = allWines.filter(wine => wine.id === wineIds[i])[0]
//       userWineData.push(wine)
//     }
//     this.setState({ saved: userWineData })
//   }

//   componentDidMount() {
//     this.getSavedWines()
//   }

  // shouldComponentUpdate(prevProps, prevState) {
  //   if (prevState.saved !== this.state.saved) {
  //     this.getSavedWines()
  //   } else {return}
  // }

  // componentDidUpdate() {
  //   this.getSavedWines()
  // }


  renderSavedWines = () => {
    return this.props.saved.map(wine => <SavedWines key={wine.id} wine={wine} />)
  }
  render() {
    return (
      <div className="home">
        <div className='saved-wines'>
          <h3>My saved wines:</h3>
          {this.props.saved ? this.renderSavedWines() : <p>You don't have any saved wines yet.</p>}
        </div>
      </div>
    );
  }
}

export default SavedContainer;
