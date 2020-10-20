import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Item } from 'semantic-ui-react'


class RecResults extends Component {

    handleClick = () => {
        let userId = JSON.parse(sessionStorage.getItem('user')).id
        this.props.postWine({ ...this.props.wine, user_id: userId })
        alert('Your wine has been saved to your profile!')
        // return <Link to='/home' />
    }

    render() {
        // let userId = JSON.parse(sessionStorage.getItem('user')).user_id
        // console.log({...this.props.wine, user_id: userId})
        let wine = this.props.wine
        console.log(wine.title)
        return (
            <div className="rec-results">
                <Item.Group>
                    <Item className='saved-wine'>
                        <Item.Image className='item-image' size='tiny' src={wine.imageUrl} />
                        <Item.Content>
                            <Item.Header>{wine.title}</Item.Header>
                            <Item.Meta>Description</Item.Meta>
                            <Item.Description>
                                {wine.description}
                            </Item.Description>
                            <Item.Extra>
                                <Link to='/home'><button onClick={this.handleClick} >Save Wine</button></Link>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
                {/* <Grid.Row>
                <Grid.Column> */}
                {/* <Card>
                    <Image src={wine.imageUrl} wrapped ui={false} id='card-image'/>
                    <Card.Content>
                        <Card.Header>{wine.title}</Card.Header>
                        <Card.Meta>
                            <span className='rating'>Rating: {wine.averageRating}</span>
                            <span className='price'>Price: {wine.price}</span>
                        </Card.Meta>
                        <Card.Description>
                            {wine.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                       <Link to='/home'><button onClick={this.handleClick} >Save Wine</button></Link>
                    </Card.Content>
                </Card> */}
                {/* </Grid.Column>
                </Grid.Row> */}
                {/* // <h1>{wine.title}</h1>
                // <img src={wine.imageUrl} alt={wine.title} />
                // <h3>{wine.description}</h3>
                // <h3>{wine.price}</h3>
                // <Link to='/home'><button onClick={this.handleClick} >Save Wine</button></Link> */}
            </div>
        );
    }
}

export default RecResults;
