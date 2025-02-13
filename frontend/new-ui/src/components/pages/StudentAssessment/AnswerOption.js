import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
    // console.log("answeroptions");
    // console.log(props)
  return (
    <li className="answerOption">
      <input
        type="radio"
        className={"radioCustomButton"+(props.answer===props.correct_answer).toString()}
        name="radioGroup"
        checked={props.answerContent === props.answer}
        id={props.answerContent}
        value={props.answerContent}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerContent}>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  // answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;