import './index.css'

const Emoji = props => {
  const {emoji, feedbackSubmit} = props
  const {name, imageUrl, id} = emoji
  const submitFeedback = () => {
    feedbackSubmit(id)
  }

  return (
    <li className="list">
      <button onClick={submitFeedback}>
        <img src={imageUrl} alt={name} className="image hover:animate-spin" />
      </button>
      <p className="emoji-name">{name}</p>
    </li>
  )
}

export default Emoji
