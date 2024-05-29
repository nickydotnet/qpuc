import { useEffect, useState, useContext } from 'react'
import {
  AnswerSelectedContext,
  QuestionListContext,
  ErrorContext,
  ConnexionContext,
  TimeContext,
  FaceScoreContext,
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
  Score,
  ScoreCounter,
  Errors,
  ErrorsCounter,
  AnswersWrapper,
  Question,
  Theme,
  Answers,
  PointsBar,
  Point,
  Title,
} from './styles'

function FaceAFace() {
  //State
  //Réponses de la question actuelle
  const [answers, setAnswers] = useState([])
  //Question actuelle
  const [question, setQuestion] = useState({})
  //Points de la réponse
  const [points, setPoints] = useState(4)
  //Temps pour répondre à la question
  const [timer, setTimer] = useState(20)

  //Context
  //Etat de chargement des données
  const [isDataLoading, setDataLoading] = useState(false)
  //Element cliqué
  const { changeClicked } = useContext(AnswerSelectedContext)
  //Liste des questions posées
  const { questionList, oldQuestion } = useContext(QuestionListContext)
  //Etat de connexion du joueur
  const { connected } = useContext(ConnexionContext)
  //Nombre d'erreurs du joueur sur la partie
  const { errors, addError } = useContext(ErrorContext)
  //Temps écoulé depuis le début de la partie
  const { time, addSecond } = useContext(TimeContext)
  //Score du Face à Face
  const { faceScore, resetFacePoints } = useContext(FaceScoreContext)
  //Etat d'activation du son
  const { soundState } = useContext(SoundContext)

  let history = useHistory()
  let percent = 100

  //Modifie le nombre de points que vaut une question en fonction du pourcentage de temps restant
  const percentage = (timerValue) => {
    percent = (timerValue / 20) * 100
    if (percent > 75 && percent <= 100) {
      setPoints(4)
    } else if (percent > 50 && percent <= 75) {
      setPoints(3)
    } else if (percent > 25 && percent <= 50) {
      setPoints(2)
    } else if (percent <= 25) {
      setPoints(1)
    }
  }

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

  //A chaque fois que le joueur gagne des points ou fait une erreur on appelle ce useEffect
  useEffect(() => {
    //On défini le temps à 20 secondes

    setTimer(20)
    setDataLoading(true)
    //On récupère les questions

    fetch(`https://orange-pond-007deb103.5.azurestaticapps.net/api/question/`)
      .then((response) => response.json())
      .then((requestData) => {
        let questionNumber = Math.floor(Math.random() * requestData.length)
        //On en prend une aléatoirement

        if (questionList.includes(requestData[questionNumber]._id)) {
          //Si elle a déjà été posée

          while (questionList.includes(requestData[questionNumber]._id)) {
            //On en prend une autre

            questionNumber = Math.floor(Math.random() * requestData.length)
          }
          //On met à jour les données contenant la question et les réponses

          setQuestion(requestData[questionNumber])
          updateData(
            requestData[questionNumber].question_answer,
            requestData[questionNumber].fake1,
            requestData[questionNumber].fake2,
            requestData[questionNumber].fake3
          )
          //On ajoute la question à la liste des questions posées

          oldQuestion(requestData[questionNumber]._id)
        } else {
          //Si elle n'a pas été posée on met directement à jour les données et on l'ajoute à la liste des questions posées

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
  }, [faceScore, errors])

  //On vérifie quand le score change si il est supérieur ou égal à 12, si c'est le cas on redirige
  useEffect(() => {
    if (faceScore >= 12) {
      changeClicked('')
      resetFacePoints()
      history.push('/score')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faceScore])

  //A chaque fois que le timer diminue on appelle ce useEffect
  useEffect(() => {
    percentage(timer)
    if (timer === 0) {
      //Si le timer vaut 0 on ajoute une erreur et on joue un son

      if (soundState === true) {
        new Audio(endTimeSound).play()
      }
      addError()
    }
    let interval = null

    //Sinon on diminue le temps restant dans le timer en jouant un son
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

  //Permet de rediriger le joueur si il tente d'accéder à la page en étant déconnecté
  useEffect(() => {
    window.scrollTo(0, 0)
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  return (
    <Wrapper>
      <Title>FACE A FACE</Title>
      <InfoWrapper>
        <Time>
          Temps :<TimeCounter>{time}</TimeCounter>
        </Time>
        <Score>
          Score :<ScoreCounter>{faceScore}</ScoreCounter>
        </Score>
        <Errors>
          Erreurs :<ErrorsCounter>{errors}</ErrorsCounter>
        </Errors>
      </InfoWrapper>
      {isDataLoading ? (
        <Loader />
      ) : (
        <AnswersWrapper>
          <Question>{question.question_statement}</Question>
          <Theme>{question.theme}</Theme>
          <PointsBar>
            <Point value={1} score={points}>
              1
            </Point>
            <Point value={2} score={points}>
              2
            </Point>
            <Point value={3} score={points}>
              3
            </Point>
            <Point value={4} score={points}>
              4
            </Point>
          </PointsBar>
          <Answers>
            <Answer
              answer={answers[0]}
              question={question}
              game={'face'}
              points={points}
            ></Answer>
            <Answer
              answer={answers[1]}
              question={question}
              game={'face'}
              points={points}
            ></Answer>
            <Answer
              answer={answers[2]}
              question={question}
              game={'face'}
              points={points}
            ></Answer>
            <Answer
              answer={answers[3]}
              question={question}
              game={'face'}
              points={points}
            ></Answer>
          </Answers>
        </AnswersWrapper>
      )}
    </Wrapper>
  )
}

export default FaceAFace
