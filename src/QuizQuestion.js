import React, { Component } from 'react';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { quizQuestion } = this.props;

    console.log(this.props.quizQuestion);

    return (
      <main>
        <section>
          <p>// instruction text goes here</p>
        </section>
        <section className="buttons">
          <ul>
            <li>{quizQuestion}</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
