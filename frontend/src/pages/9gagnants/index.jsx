import { useEffect, useState, useContext } from 'react'
import {
  AnswerSelectedContext,
  QuestionListContext,
  ErrorContext,
  ScoreContext,
  ConnexionContext,
  TimeContext,
} from '../../utils/context'
import { useHistory } from 'react-router-dom'
import Answer from '../../components/Answer'
import {
  MainWrapper,
  InfoWrapper,
  Time,
  TimeCounter,
  Score,
  ScoreCounter,
  Errors,
  ErrorsCounter,
  AnswersWrapper,
  Question,
  QuestionPoints,
  Answers,
  Theme,
  Title,
} from './style'
import { Loader } from '../../utils/style/Atoms'

function Gagnants9() {
  //Les states permettent de stocker les réponses et la question sur la page

  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState({})

  //Permet de changer la couleur de la réponse sur laquelle on a cliqué
  const { changeClicked } = useContext(AnswerSelectedContext)

  //Permet de savoir quelles quetions ont déjà été posées
  const { questionList, oldQuestion } = useContext(QuestionListContext)

  //Permet de savoir si l'utilisateur est connecté
  const { connected } = useContext(ConnexionContext)

  //Permet de savoir le score de l'épreuve et de le modifier depuis d'autres pages grace au contexte
  const { score, resetScore } = useContext(ScoreContext)

  //Idem que pour le score mais avec les erreurs
  const { errors, resetErrors } = useContext(ErrorContext)

  //Permet de compter le temps total de jeu grace au contexte
  const { time, addSecond } = useContext(TimeContext)

  // eslint-disable-next-line no-unused-vars
  //Permet d'afficher un chargement lorsque les questions sont récupérées.
  const [isDataLoading, setDataLoading] = useState(false)
  let history = useHistory()

  //Permet de remplacer les anciennes réponses par celles de la question actuelle
  const updateData = (value1, value2, value3, value4) => {
    let newData = [...answers]
    newData.splice(0, 1, value1)
    newData.splice(1, 1, value2)
    newData.splice(2, 1, value3)
    newData.splice(3, 1, value4)
    //On mélange le tableau pour ne pas que les réponses soient toujours au même endroit
    const shuffledData = newData.sort((a, b) => 0.5 - Math.random())
    setAnswers(shuffledData)
  }

  //useEffect qui se lance à chaque fois que le joueur répond que ce soit juste ou faux
  useEffect(() => {
    //On dit que les données chargent

    setDataLoading(true)
    //On récupère toutes les questions

    fetch(`https://salmon-moss-0fb9c7203.5.azurestaticapps.net/api/question/`)
      .then((response) => response.json())
      .then((requestData) => {
        //On génère un entier aléatoire avec comme limite le nombre de réponses
        let questionNumber = Math.floor(Math.random() * requestData.length)

        if (questionList === []) {
          //Si c'est la première question à laquelle on répond on effectue pas de vérification
          setQuestion(requestData[questionNumber])
          updateData(
            requestData[questionNumber].question_answer,
            requestData[questionNumber].fake1,
            requestData[questionNumber].fake2,
            requestData[questionNumber].fake3
          )
          oldQuestion(requestData[questionNumber]._id)
        } else if (questionList.includes(requestData[questionNumber]._id)) {
          //Si la question qu'on a sélectionné a déjà été posée

          while (questionList.includes(requestData[questionNumber]._id)) {
            //On en prend une autre jusqu'à ce qu'elle n'ait jamais été posée
            questionNumber = Math.floor(Math.random() * requestData.length)
          }
          setQuestion(requestData[questionNumber])
          updateData(
            requestData[questionNumber].question_answer,
            requestData[questionNumber].fake1,
            requestData[questionNumber].fake2,
            requestData[questionNumber].fake3
          )
          oldQuestion(requestData[questionNumber]._id)
        } else {
          //Sinon c'est que la question n'a jamais été posée donc on peut définir la question actuelle comme celle-ci
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

  //Ce useEffect est appelé quand le temps change et permet de chronométrer la partie
  useEffect(() => {
    let interval = null
    //On augmente le temps d'une seconde
    interval = setInterval(() => {
      addSecond()
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  //Ce useEffect est appelé quand le score change
  useEffect(() => {
    //Si le score est supérieur ou égale à 9 on redirige vers la page suivante
    if (score >= 9) {
      changeClicked('')
      resetScore()
      history.push('/4suiteTheme')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])

  //Redirige le joueur si il tente d'accéder à la page par l'url sans être connecté
  useEffect(() => {
    window.scrollTo(0, 0)
    if (connected === false) {
      resetScore()
      resetErrors()
      history.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, connected])

  return (
    <MainWrapper>
      <Title>9 POINTS GAGNANTS</Title>
      <InfoWrapper>
        <Time>
          Temps :<TimeCounter>{time}</TimeCounter>
        </Time>
        <Score>
          Score :<ScoreCounter>{score}</ScoreCounter>
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
          <QuestionPoints>{question.points} POINT(S)</QuestionPoints>
          <Answers>
            <Answer answer={answers[0]} question={question} game={'9'}></Answer>
            <Answer answer={answers[1]} question={question} game={'9'}></Answer>
            <Answer answer={answers[2]} question={question} game={'9'}></Answer>
            <Answer answer={answers[3]} question={question} game={'9'}></Answer>
          </Answers>
        </AnswersWrapper>
      )}
    </MainWrapper>
  )
}

export default Gagnants9
