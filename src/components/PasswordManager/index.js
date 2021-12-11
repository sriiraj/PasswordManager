import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import Navbar from '../Navbar'
import PasswordManagerItem from '../PasswordManagerItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class PasswordManager extends Component {
  state = {
    UpdatePasswordList: [],
    ShowPasswordFlag: false,
    InputWebsite: '',
    InputName: '',
    InputPassword: '',
    searchInput: '',
  }

  OnChangeWebsite = event => {
    this.setState({InputWebsite: event.target.value})
  }

  OnChangeName = event => {
    this.setState({InputName: event.target.value})
  }

  OnChangePassword = event => {
    this.setState({InputPassword: event.target.value})
  }

  OnCheckBox = () => {
    this.setState(i => ({ShowPasswordFlag: !i.ShowPasswordFlag}))
  }

  OnAddData = event => {
    event.preventDefault()
    const {InputWebsite, InputName, InputPassword} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const NewPassword = {
      id: v4(),
      website: InputWebsite,
      name: InputName,
      password: InputPassword,
      initialClassName: initialBackgroundColorClassName,
      ItemStarFlag: false,
    }
    this.setState(i => ({
      UpdatePasswordList: [...i.UpdatePasswordList, NewPassword],
      InputWebsite: '',
      InputName: '',
      InputPassword: '',
    }))
  }

  OnDelete = id => {
    this.setState(i => ({
      UpdatePasswordList: i.UpdatePasswordList.filter(j => j.id !== id),
    }))
  }

  OnSearchPasswords = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      UpdatePasswordList,
      InputWebsite,
      InputName,
      InputPassword,
      searchInput,
      ShowPasswordFlag,
    } = this.state
    const filterResult = UpdatePasswordList.filter(i =>
      i.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const ArrayLength = filterResult.length
    let NoPassword
    if (ArrayLength === 0) {
      NoPassword = (
        <div className="No-password-container">
          <img
            className="no-psd-img"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
          />
          <p className="no-passwords-title">No Passwords</p>
        </div>
      )
    } else if (ArrayLength > 0) {
      NoPassword = (
        <ul className="list-container">
          {filterResult.map(i => (
            <PasswordManagerItem
              key={i.id}
              ItemDetails={i}
              OnDelete={this.OnDelete}
              MaskedPSD={ShowPasswordFlag}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="app-main-container">
        <Navbar />
        <div className="app-container">
          <div className="responsive-container">
            <div className="password-container">
              <form className="form" onSubmit={this.OnAddData}>
                <h1 className="password-manager-heading">Add New Password</h1>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="input-icon"
                    alt="website"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input-field"
                    value={InputWebsite}
                    onChange={this.OnChangeWebsite}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      className="input-icon"
                      alt="username"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input-field"
                    value={InputName}
                    onChange={this.OnChangeName}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      className="input-icon"
                      alt="password"
                    />
                  </div>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-field"
                    value={InputPassword}
                    onChange={this.OnChangePassword}
                  />
                </div>
                <div className="button-container">
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
              <img
                className="password-manager-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
            </div>
          </div>
          <div className="password-manager-container">
            <div className="PM-container">
              <div className="password-manager-heading">
                <h1 className="heading-PM">
                  Your Passwords
                  <p className="password-count">{ArrayLength}</p>
                </h1>
                <div className="search-container">
                  <img
                    className="search-icon"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                  <input
                    type="search"
                    className="search-input"
                    placeholder="Search"
                    onChange={this.OnSearchPasswords}
                  />
                </div>
              </div>
              <hr />
              <div className="show-password-container">
                <input
                  type="checkbox"
                  id="ShowPassword-ck"
                  name="ShowPassword-ck"
                  value="check"
                  className="checkbox"
                  onClick={this.OnCheckBox}
                />
                <label htmlFor="ShowPassword-ck" className="ShowPassword-label">
                  Show Passwords
                </label>
              </div>
              {NoPassword}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
