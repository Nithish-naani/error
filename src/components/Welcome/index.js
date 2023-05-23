// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  trueBtn = () => {
    this.setState(prevState => ({isSubscribed: prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    let clickBtn

    if (isSubscribed) {
      clickBtn = (
        <button className="button" type="button" onClick={this.trueBtn}>
          Subscribed
        </button>
      )
    } else {
      clickBtn = (
        <button className="button" type="button" onClick={this.trueBtn}>
          Subscribe
        </button>
      )
    }

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        {clickBtn}
      </div>
    )
  }
}
export default Welcome
