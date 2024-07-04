import './index.css'

const EventItem = props => {
  const {content, activeTab, click} = props
  const {id, imageUrl, name, location, registrationStatus} = content
  const active = activeTab === id ? 'active' : ''

  const clickes = () => {
    click(id, registrationStatus)
  }

  return (
    <li className="item-container">
      <button className="button" onClick={clickes}>
        <img src={imageUrl} alt="event" className={`event-image ${active}`} />
      </button>
      <h1 className="name">{name}</h1>
      <p className="place">{location}</p>
    </li>
  )
}

export default EventItem
