import './index.css'

const statusList = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {content} = props
  switch (content) {
    case statusList.yetToRegister:
      return (
        <div className="status-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="registration-image"
          />
          <p className="details">
            A live performance brings so much to your relationship with dance.
            Seeing dance live can often make you fall totally in love with
            this.beautiful art form.
          </p>
          <button className="register-btn">Register Here</button>
        </div>
      )

    case statusList.registered:
      return (
        <div className="status-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registration-image"
          />
          <p className="sub-heading">
            You have already registered for the event
          </p>
        </div>
      )

    case statusList.closed:
      return (
        <div className="status-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="registration-image"
          />
          <p className="details">
            Stay tuned. We will reopen te registrations soon!
          </p>
        </div>
      )
    default:
      return (
        <div>
          <p className="initial-status">
            Click on an event to, view its registration details
          </p>
        </div>
      )
  }
}

export default ActiveEventRegistrationDetails
