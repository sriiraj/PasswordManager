import './index.css'

const PasswordManagerItem = props => {
  const {ItemDetails, OnDelete, MaskedPSD} = props
  const {id, website, name, password, initialClassName} = ItemDetails
  const initial = website ? website[0].toUpperCase() : ''

  const OnClickDelete = () => {
    OnDelete(id)
  }
  const MaskedPassword = () => {
    let Value
    if (MaskedPSD) {
      Value = <p className="password">{password}</p>
    } else {
      Value = (
        <p className="password">
          <img
            className="Star-img"
            src="https:assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        </p>
      )
    }
    return Value
  }

  return (
    <li className="list-item-container">
      <div className="list-main">
        <div className={initialClassName}>
          <p className="initial-label">{initial}</p>
        </div>
        <div className="description-container">
          <p className="website">{website}</p>
          <p className="username">{name}</p>
          {/* <p className="password">{password}</p> */}
          {MaskedPassword()}
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        testid="delete"
        onClick={OnClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PasswordManagerItem
