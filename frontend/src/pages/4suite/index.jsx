import { useEffect, useState, useContext } from 'react'
import {
  AnswerSelectedContext,
  QuestionListContext,
  ErrorContext,
  ScoreContext,
  ConnexionContext,
  TimeContext,
  ThemeContext,
  SoundContext,
} from '../../utils/context'
import { useHistory } from 'react-router-dom'
import Answer from '../../components/Answer'
import { Loader } from '../../utils/style/Atoms'
import timeSound from '../../assets/music/time.mp3'
import endTimeSound from '../../assets/music/endTimer.mp3'

import {
  Wrapper,
  InfoWrapper,
  Time,
  TimeCounter,
  Timer,
  TimerCounter,
  Errors,
  ErrorsCounter,
  AnswersWrapper,
  Question,
  Answers,
  PointsBar,
  Point,
  Pass,
  Title,
} from './style'

function Suite4() {
  //State
  //Défini si les données chargent ou non
  const [isDataLoading, setDataLoading] = useState(false)
  //Contient le temps restant pour répondre
  const [timer, setTimer] = useState(60)
  //Contient les réponses de la question
  const [answers, setAnswers] = useState([])
  //Contient la question
  const [question, setQuestion] = useState({})
  //Contient le nombre de bonnes réponses maximum répondu d'affilé
  const [bestScore, setBestScore] = useState(0)

  //Context
  //Défini sur quoi on a cliqué
  const { changeClicked } = useContext(AnswerSelectedContext)
  //Liste des questions déjà posées
  const { questionList, oldQuestion } = useContext(QuestionListContext)
  //Etat de connexion du joueur
  const { connected } = useContext(ConnexionContext)
  //Thème choisi
  const { choosenTheme } = useContext(ThemeContext)
  //Change le score
  const { score, resetScore, changeScore } = useContext(ScoreContext)
  //Permet de savoir si le joueur souhaite du son ou non
  const { soundState } = useContext(SoundContext)
  //Erreurs faites durant la partie
  const { errors, addError } = useContext(ErrorContext)
  //Temps écoulé depuis le début de la partie
  const { time, addSecond } = useContext(TimeContext)

  let history = useHistory()

  //Change les réponses affichées lorsque la question est renouvelée
  const updateData = (value1, value2, value3, value4) => {
    let newData = [...answers]
    newData.splice(0, 1, value1)
    newData.splice(1, 1, value2)
    newData.splice(2, 1, value3)
    newData.splice(3, 1, value4)
    const shuffledData = newData.sort((a, b) => 0.5 - Math.random()) //Permet de mélanger l'ordre des réponses
    setAnswers(shuffledData)
  }

  //useEffect appelé dès que le joueur répond à une question qu'il ait bon ou faux
  useEffect(() => {
    setDataLoading(true)
    fetch(`https://orange-pond-007deb103.5.azurestaticapps.net/api/question/`)
      .then((response) => response.json())
      .then((requestData) => {
        //On choisi une question au hasard

        let questionNumber = Math.floor(Math.random() * requestData.length)
        //Si elle a déjà été posée ou n'appartient pas au thème on change de question

        if (
          questionList.includes(requestData[questionNumber]._id) ||
          requestData[questionNumber].theme !== choosenTheme[0]
        ) {
          while (
            questionList.includes(requestData[questionNumber]._id) ||
            requestData[questionNumber].theme !== choosenTheme[0]
          ) {
            questionNumber = Math.floor(Math.random() * requestData.length)
          }
          //Si la question remplie les conditions on la pose en mettant à jour le state et on l'ajoute à la liste des questions posées
          setQuestion(requestData[questionNumber])
          updateData(
            requestData[questionNumber].question_answer,
            requestData[questionNumber].fake1,
            requestData[questionNumber].fake2,
            requestData[questionNumber].fake3
          )
          oldQuestion(requestData[questionNumber]._id)
        } else {
          //Si elle remplie directement les conditions

          setQuestion(requestData[questionNumber])
          updateData(
            requestData[questionNumber].question_answer,
            requestData[questionNumber].fake1,
            requestData[questionNumber].fake2,
            requestData[questionNumber].fake3
          )
          oldQuestion(requestData[questionNumber]._id)
        }
        setDataLoading(false)
      })
      .catch((error) => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score, errors])

  //useEffect appelé quand le temps change
  useEffect(() => {
    //Si le score actuel est meilleur que le highscore on change le highscore par le score actuel

    if (score >= bestScore) {
      setBestScore(score)
    }

    //Si le timer vaut 0 on joue un son, on change le score dans le context et on affiche le nombre de bonnes réponses d'affilé puis on redirige vers la page suivante
    if (timer === 0) {
      if (soundState === true) {
        new Audio(endTimeSound).play()
      }
      setTimeout(function () {
        changeScore(bestScore)
        alert(
          `Temps écoulé, vous avez réussi à répondre à ${bestScore} réponse(s) d'affilée(s) !`
        )
        history.push('/beforeFace2Face')
      }, 1000)
    }

    //Sinon on joue un son et on diminue le temps restant
    let interval = null
    if (soundState === true) {
      new Audio(timeSound).play()
    }
    interval = setInterval(() => {
      addSecond()
      setTimer((time) => time - 1)
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer])

  //useEffect appelé quand le score change
  useEffect(() => {
    //Si le score vaut 4, on redirige vers le jeu suivant

    if (score === 4) {
      changeClicked('')
      history.push('/beforeFace2Face')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])

  //Permet de rediriger le joueur si il accède à la page par l'url
  useEffect(() => {
    window.scrollTo(0, 0)
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  return (
    <Wrapper>
      <Title>4 A LA SUITE : {choosenTheme[0]}</Title>
      <InfoWrapper>
        <Time>
          Temps :<TimeCounter>{time}</TimeCounter>
        </Time>
        <Timer>
          Temps restant :<TimerCounter>{timer}</TimerCounter>
        </Timer>
        <Errors>
          Erreurs :<ErrorsCounter>{errors}</ErrorsCounter>
        </Errors>
      </InfoWrapper>
      {isDataLoading ? (
        <Loader />
      ) : (
        <AnswersWrapper>
          <Question>{question.question_statement}</Question>
          <PointsBar>
            <Point value={1} score={score}>
              1
            </Point>
            <Point value={2} score={score}>
              2
            </Point>
            <Point value={3} score={score}>
              3
            </Point>
            <Point value={4} score={score}>
              4
            </Point>
          </PointsBar>
          <Answers>
            <Answer answer={answers[0]} question={question} game={'4'}></Answer>
            <Answer answer={answers[1]} question={question} game={'4'}></Answer>
            <Answer answer={answers[2]} question={question} game={'4'}></Answer>
            <Answer answer={answers[3]} question={question} game={'4'}></Answer>
          </Answers>
          <Pass
            onClick={() => {
              addError()
              resetScore()
            }}
          >
            Passer
          </Pass>
        </AnswersWrapper>
      )}
    </Wrapper>
  )
}

export default Suite4
