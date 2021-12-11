import './index.css'
import {Component} from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <div className="title-with-score-container">
          <div className="logo-and-title-container">
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
            />
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar
