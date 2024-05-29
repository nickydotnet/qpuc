import { useContext, useEffect, useState } from 'react'
import {
  ErrorContext,
  ScoreContext,
  ConnexionContext,
  TimeContext,
  IdContext,
  QuestionListContext,
} from '../../utils/context'
import { useHistory } from 'react-router-dom'
import Confetti from 'react-confetti'

import {
  ScoreWrapper,
  InfoWrapper,
  TotalTime,
  TotalErrors,
  Separation,
  FinalScore,
  ScoreNumber,
  LeaderboardButton,
  Title,
  Score4,
} from './style'

function Score() {
  //Nombre d'erreurs au cours de la partie
  const { errors, resetError } = useContext(ErrorContext)
  //Temps de jeu
  const { time, resetTime } = useContext(TimeContext)
  //Score du 4 à la suite
  const { score, resetScore } = useContext(ScoreContext)
  //id du joueur
  const { id } = useContext(IdContext)
  //Permet de réinitialiser la liste des questions posées
  const { resetList } = useContext(QuestionListContext)

  //Score du joueur après calcul
  const [finalScore, setFinalScore] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
    //Calcul du score final par rapport au score du 4 à la suite, du temps écoulé et du nombre d'erreurs

    let calculus = score * (600 - time - errors * 30)
    setFinalScore(calculus)

    //Récupère les utilisateurs
    fetch(`https://orange-pond-007deb103.5.azurestaticapps.net/api/auth`)
      .then((response) => response.json())
      .then((requestData) => {
        for (let i = 0; i < requestData.length; i++) {
          if (requestData[i]._id === id[0]) {
            //Si l'utilisateur parcouru est l'utilisateur connecté

            if (requestData[i].highscore <= calculus) {
              //Si le score de cette partie est supérieur au highscore enregistré

              //On le met à jour
              fetch(`https://orange-pond-007deb103.5.azurestaticapps.net/api/auth/${id[0]}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  highscore: calculus,
                }),
              })
            }
          }
        }
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Permet de rediriger le joueur si il accède à l'url sans être connecté
  let history = useHistory()
  const { connected } = useContext(ConnexionContext)
  useEffect(() => {
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  return (
    <ScoreWrapper>
      <Confetti
        width={document.documentElement.clientWidth}
        height={document.documentElement.clientHeight}
        colors={['#355F9F', '#F2A616', '#FEE301', '#1F2869', '#50A0D3']}
      />
      <Title>PARTIE TERMINEE</Title>
      <InfoWrapper>
        <TotalTime>Temps Total : {time}</TotalTime>
        <Score4>Score 4 à la suite : {score}</Score4>
        <TotalErrors>Nombre d'Erreurs : {errors}</TotalErrors>
        <Separation />
        <FinalScore>
          Score Final :<ScoreNumber>{finalScore}</ScoreNumber>
        </FinalScore>
      </InfoWrapper>
      <LeaderboardButton
        //Redirige vers le leaderboard et remet à 0 tous les compteurs du context
        to="/leaderboard"
        onClick={() => {
          resetError()
          resetScore()
          resetTime()
          resetList()
        }}
        $isFullLink
      >
        LEADERBOARD
      </LeaderboardButton>
    </ScoreWrapper>
  )
}

export default Score
