import React from 'react';
import './studentass.css';
import Question from './StudentAssessment/Question';
import Quiz from './StudentAssessment/Quiz';
import Result from './StudentAssessment/Result';
import jwt_decode from 'jwt-decode';
class Sassessment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          questionId: 1,
          question: this.props.location.data[0]["question_statement"],
          answerOptions: this.props.location.data[0]["options"],
          answer: '',
          answersCount: {},
          result: '',
          mcq: this.props.location.data,
          correct_answer: this.props.location.data[0]["answer"],
          result: '',
          score:0,
          tid: this.props.location.tid
        };
        console.log(this.state)
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        // this.setNextQuestion=this.setNextQuestion.bind(this);
        // this.setUserAnswer=this.setUserAnswer.bind(this);
      }
      componentDidMount(){
        //   this.setState({question:this.state.mcq[0]["question_statement"],answerOptions:this.state.mcq[0]["options"],answer:this.state.mcq[0]["answer"]})
        //   console.log(this.state)
      }
      setUserAnswer(answer) {
        this.setState((state, props) => ({
          score: (this.state.correct_answer===answer)?this.state.score+1:this.state.score,
          answer: answer
        }));
        console.log(this.state)
        fetch('http://localhost:5000/set_answers', {
      method: 'POST',
      body: JSON.stringify({'question_number':this.state.tid.toString()+"_"+this.state.questionId,'answer':answer,'username':jwt_decode(localStorage.usertoken).identity.username,'id':this.state.tid}),
      headers: new Headers({
        "content-type": "application/json"
      }),
    })}
      setNextQuestion() {
          console.log("setnext");
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        this.setState({
          counter: counter,
          questionId: questionId,
          question: this.state.mcq[counter]["question_statement"],
          answerOptions: this.state.mcq[counter]["options"],
          answer: '',
          correct_answer: this.state.mcq[counter]["answer"]
        });
      }
      handleAnswerSelected(event) {
        console.log("handle")
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < Object.keys(this.state.mcq).length) {
          if(this.state.answer===this.state.correct_answer){
            setTimeout(() => this.setNextQuestion(), 300);
          }
          else{
            setTimeout(() => this.setNextQuestion(), 3000);
          }
          } else {
            setTimeout(() => this.setResults(this.state.score), 300);
          }
      }
    
      setResults(result) {
          this.setState({ result: true });
      }

    renderQuiz(){
        return (
            <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={Object.keys(this.state.mcq).length}
        onAnswerSelected={this.handleAnswerSelected}
        correct_answer={this.state.correct_answer}
      />
        );
    }

    renderResult() {
      return <Result quizResult={this.state.score} full={Object.keys(this.state.mcq).length} />;
    }

    render(){
      return (
        <div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
      )
    }
}

export default Sassessment;