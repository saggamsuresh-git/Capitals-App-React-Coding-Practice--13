import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  //   state = {list: countryAndCapitalsList}
  state = {
    isSelected: 'NEW_DELHI',
  }

  getValue = event => {
    this.setState({isSelected: event.target.value})
    // console.log(this.isSelected)
  }

  render() {
    const {isSelected} = this.state
    // console.log(isSelected)
    const filteredList = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === isSelected,
    )

    return (
      <div className="bg-container">
        <div className="capitals-container">
          <div className="card-items-container">
            <h1>Countries and Capitals</h1>
            <select
              onChange={this.getValue}
              //   name="capitals"
              id="capitals"
              value={isSelected}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  key={eachCountry.id}
                  id={eachCountry.id}
                  value={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitals"> is capital of which country?</label>
            <h1>{filteredList[0].country}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
