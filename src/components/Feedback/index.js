// Write your React code here.
import {Component} from 'react'
import './index.css'
import Emoji from '../Emoji'
import Submit from '../Submit'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  feedbackSubmit = id => {
    this.setState({isEmojiClicked: true})
  }

  render() {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="content-container">
          {!isEmojiClicked && (
            <div>
              <h1 className="feedback-question-para">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list-container">
                {emojis.map(each => (
                  <Emoji
                    emoji={each}
                    key={each.id}
                    feedbackSubmit={this.feedbackSubmit}
                  />
                ))}
              </ul>
            </div>
          )}
          {isEmojiClicked && <Submit loveEmojiUrl={loveEmojiUrl} />}
        </div>
      </div>
    )
  }
}

export default Feedback
