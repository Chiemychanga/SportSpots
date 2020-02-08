// src/App.js
import React from 'react';

// imports from Amplify library
import { API, graphqlOperation } from 'aws-amplify'
//import uuid to create a unique client ID
import uuid from 'uuid/v4'

// import query definition
import { listGyms as ListGyms } from './graphql/queries'
// import the mutation
import { createGym as CreateGym } from './graphql/mutations'

const CLIENT_ID = uuid()

class App extends React.Component {
  // define some state to hold the data returned from the API
  state = {
    // gyms: []
    sport: '', name: '', time: '', gyms: []
  }

  // execute the query in componentDidMount
  async componentDidMount() {
    try {
      const gymData = await API.graphql(graphqlOperation(ListGyms))
      console.log('gymData:', gymData)
      this.setState({
        gyms: gymData.data.listGyms.items
      })
    } catch (err) {
      console.log('error fetching gyms...', err)
    }
  }
  createGym = async() => {
    const { sport, name, time } = this.state
    if (sport === '' || name === '' || time === '') return

    const gym = { sport, name, time, clientId: CLIENT_ID }
    const gyms = [...this.state.gyms, gym]
    this.setState({
      gyms, sport: '', name: '', time: ''
    })

    try {
      await API.graphql(graphqlOperation(CreateGym, {input: gym }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating gym...', err)
    }
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <>
        <input
          name='sport'
          onChange={this.onChange}
          value={this.state.sport}
          placeholder='sport'
        />
        <input
          name='name'
          onChange={this.onChange}
          value={this.state.name}
          placeholder='name'
        />
        <input
          name='time'
          onChange={this.onChange}
          value={this.state.time}
          placeholder='time'
        />
        <button onClick={this.createGym}>Create Gym</button>
        {
          this.state.gyms.map((gym, index) => (
            <div key={index}>
              <h3>{gym.sport}</h3>
              <h5>{gym.name}</h5>
              <p>{gym.time}</p>
            </div>
          ))
        }        
      </>
    )
  }
}

export default App