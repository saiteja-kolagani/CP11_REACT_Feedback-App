import './index.css'

const Submit = props => {
  const {loveEmojiUrl} = props
  return (
    <>
      <div className="image-container animate-ping">
        <img src={loveEmojiUrl} alt="love emoji" className="image" />
      </div>
      <h1 className="heading">Thank You!</h1>
      <p className="para">
        We will use your feedback to improve our customer support performance.
      </p>
    </>
  )
}

export default Submit
