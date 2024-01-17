// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onchange = event => {
    const val = event.target.value
    const len = val.length
    this.setState({
      count: len,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <div className="frst">
          <h1 className="head">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="in">
            Enter the phrase
          </label>
          <br />
          <input
            onChange={this.onchange}
            placeholder="Enter the Phrase"
            id="in"
            className="input"
            type="text"
          />
          <p className="pp">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}
export default LettersCalculator
