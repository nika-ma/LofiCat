import React, {useState} from 'react';
import Question from '../components/Question';
import QuizSideBar from '../components/QuizSideBar';
import SideBarButtonQuestion from '../components/SideBarButtonQuestion';
import QuestionContent from '../components/QuestionContent';
import './quiz.css';

const Quiz = () => {
  // const tempQuizData = {
  //   'q1' : {
  //     'question': 'This is Question1, add data later.',
  //     'question_number': 1,
  //     'answered?': false,
  //     'potential_answers': ['This is potential answer A', 'This is potential answer B', 'This is potential answer C', 'This is potential answer D'],
  //     'correct_answer': potential_answers[0]
  //   },
  //   'q2' : {
  //     'question': 'This is Question2, add data later.',
  //     'question_number': 2,
  //     'answered?': false,
  //     'potential_answers': ['This is potential answer A', 'This is potential answer B', 'This is potential answer C', 'This is potential answer D'],
  //     'correct_answer': potential_answers[1]
  //   },
  //   'q3' : {
  //     'question': 'This is Question3, add data later.',
  //     'question_number': 3,
  //     'answered?': false,
  //     'potential_answers': ['This is potential answer A', 'This is potential answer B', 'This is potential answer C', 'This is potential answer D'],
  //     'correct_answer': potential_answers[2]
  //   },
  //   'q4' : {
  //     'question': 'This is Question4, add data later.',
  //     'question_number': 4,
  //     'answered?': false,
  //     'potential_answers': ['This is potential answer A', 'This is potential answer B', 'This is potential answer C', 'This is potential answer D'],
  //     'correct_answer': potential_answers[3]
  //   }

  // };
  const [data, setData] = useState('This is before the button click');
  const [answered, setAnswered] = useState(false);
  //const [title, setTitle] = useState('this is the title');
  // const questionText = "hello this is question text after clicking the button";
  // //testContent="hi this is test content"
  // const fetchContent = async () => {
  //   // const response = await axios.get("http://localhost:3006/chapters/1");
  //   // console.log(response.data);
  //   // setData(response.data);
  //   setData(questionText);
  // };

  const answerQuestion = async (letter) => {
    //check if answer is correct

    setAnswered(true);
  };

  return (
    <>
      <div class="container-center-horizontal">
        <input type="hidden" id="anPageName" name="page" value="quiz" />
        <div class="quiz screen">
          <div class="overlap-group10">
            <img class="study_background" src="img/study-background-1@1x.png" />
            <QuestionContent questionNumber='Question 1' question='this is the question' />
            <img class="lickcat" src="img/lickcat@2x.png" />
            <div class="overlap-group9">
              <div class="overlap-group-3"><div class="quiz-chapter-1 valign-text-middle">QUIZ: Chapter 1</div></div>
              <SideBarButtonQuestion questionNumber="Question 1" onClick=
                {
                  () => {
                    console.log('test');
                  }
                }/>
              <SideBarButtonQuestion questionNumber="Question 1" onClick=
                {
                  () => {
                    console.log('test');
                  }
                }/>
              <a href="/study">
                <div class="group-22"><div class="back-to-studying valign-text-middle">back to studying...</div></div></a>
              <a href="/study"><img class="arrow-2" src="img/arrow-2@2x.svg" /> </a>
              <div class="overlap-group7"><div class="final-exam valign-text-middle">FINAL EXAM</div></div>
              <div class="loops valign-text-middle">Loops</div>
              <div class="overlap-group8">
                <img class="ellipse-3-1" src="img/ellipse-3@2x.svg" />
                <div class="number valign-text-middle poppins-normal-white-30px">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
