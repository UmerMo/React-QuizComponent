import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { button_text } = this.props;
    return (
      <li>
        <button>{button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;
