import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz_position: 1
    };
  }

  render() {
    const quizQuestions = quizData.quiz_questions;
    const { quiz_position } = this.state;

	const isQuizEnd = quiz_position -1 === quizData.quiz_questions.length;

	if(isQuizEnd) {
		return (
			<div>
				<QuizEnd></QuizEnd>
			</div>
		)
	} else {
		return (
			<div>
			<QuizQuestion quiz_question={quizQuestions[quiz_position - 1]} />
		  </div>
		)
	}
  }
}

export default Quiz;
