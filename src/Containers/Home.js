import React, { Component } from 'react'
import Logout from '../Components/Logout'
import SavedWines from '../Components/SavedWines'

class Home extends Component {
  renderSavedWines = () => {
    let allWines = this.props.allWines
    let allUserWines = this.props.userWines
    let userId = JSON.parse(localStorage.getItem('user')).user_id
    let userWines = allUserWines.filter(wine => wine.user_id === userId)
    let wineIds = userWines.map(wine => wine.wine_id)
    let userWineData = []
    for (let i = 0; i < wineIds.length; i++) {
      let wine = allWines.filter(wine => wine.id === wineIds[i])[0]
      userWineData.push(wine)
    }
    return userWineData.map(wine => <SavedWines key={wine.id} wine={wine} />)
  }
  render() {
    let user = JSON.parse(localStorage.getItem('user'))
    return (
      <div className="home">
        <h2>Viness Home Page</h2>
        <h3>{user.name}</h3>
        <img src={user.imageUrl} alt={user.name} />
        <div className='saved-wines'>
          <h3>My saved wines:</h3>
          {this.renderSavedWines()}
        </div>
        <Logout />
      </div>
    );
  }
}

export default Home;
