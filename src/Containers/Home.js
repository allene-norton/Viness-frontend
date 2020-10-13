import React, { Component } from 'react'
import Logout from '../Components/Logout'
import SavedWines from '../Components/SavedWines'

class Home extends Component {
  state = {
    saved: []
  }

  getSavedWines = () => {
    let allWines = this.props.allWines
    let allUserWines = this.props.userWines
    let userId = JSON.parse(sessionStorage.getItem('user')).user_id
    let userWines = allUserWines.filter(wine => wine.user_id === userId)
    let wineIds = userWines.map(wine => wine.wine_id)
    let userWineData = []
    for (let i = 0; i < wineIds.length; i++) {
      let wine = allWines.filter(wine => wine.id === wineIds[i])[0]
      userWineData.push(wine)
    }
    this.setState({ saved: userWineData })
  }

  componentDidMount() {
    this.getSavedWines()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.saved !== this.state.saved) {
  //     this.getSavedWines()
  //   } else {return}
  // }

  // componentDidUpdate() {
  //   this.getSavedWines()
  // }


  renderSavedWines = () => {
    return this.state.saved.map(wine => <SavedWines key={wine.id} wine={wine} />)
  }
  render() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    return (
      <div className="home">
        <h2>Viness Home Page</h2>
        <h3>{user.name}</h3>
        <img src={user.imageUrl} alt={user.name} />
        <div className='saved-wines'>
          <h3>My saved wines:</h3>
          {this.state.saved.length >= 1 ? this.renderSavedWines() : <p>You don't have any saved wines yet.</p>}
        </div>
        <Logout />
      </div>
    );
  }
}

export default Home;
