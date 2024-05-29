import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
  PlayButton,
  RulesWrapper,
  Wrapper,
  TextWrapper,
  LeaderboardButton,
  Title,
} from './style'
import { ConnexionContext, SoundContext } from '../../utils/context'
import opening from '../../assets/music/opening.mp3'

function Rules() {
  //Permet de savoir si le son est activé ou non
  const { soundState } = useContext(SoundContext)
  //permet de savoir si le joueur est connecté ou non
  const { connected } = useContext(ConnexionContext)

  let history = useHistory()
  //Permet de rediriger vers l'accueil si une personne tente d'accéder à cet écran par l'URL
  useEffect(() => {
    window.scrollTo(0, 0) //Permet de ramener la vue de l'écran au sommet de la page
    if (soundState === true) {
      new Audio(opening).play()
    }
    if (connected === false) {
      history.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, connected])

  return (
    <RulesWrapper>
      <Title>INSTRUCTIONS</Title>
      <Wrapper>
        <TextWrapper>
          Bienvenue dans "Questions pour un cogniticien" ! <br /> <br />
          Je suppose que vous connaissez déjà le jeu "Questions pour un
          Champion", ici, le principe est le même sauf qu'au lieu de répondre à
          des questions de culture générale vous allez répondre à des questions
          sur l'ENSC, ses élèves, ses professeurs et sa vie étudiante. <br />
          <br />
          Les règles sont simples. Une partie se décompose en 3 jeux.
          <ul>
            <li>
              Le 9 points gagnants qui consiste à répondre correctement à des
              questions rapportant plus ou moins de points et qui portent sur
              différents thèmes.
            </li>
            <br />
            <li>
              Le 4 à la suite qui consiste à répondre de manière correcte à 4
              questions d'affilée sur un thème choisi. Toute mauvaise réponse
              ramène le compteur de points à 0. De plus, vous êtes limité dans
              le temps. Le score retenu sera le meilleur effectué.
            </li>
            <br />
            <li>
              Le Face à Face qui consiste à une suite de questions où le temps
              est précieux. En effet, plus vous mettez de temps à répondre,
              moins vous gagnerez de points. Attention, si vous mettez trop de
              temps cela comptera comme une erreur et la question changera ! Le
              but est d'arriver à 12 points le plus vite possible.
            </li>
          </ul>
          Votre score final dépend du temps total que vous avez mis, de votre
          nombre d'erreurs ainsi que de votre score au 4 à la suite. Vous pouvez
          consulter le tableau des scores en cliquant sur le bouton
          "LEADERBOARD" ci-dessous ou, lancer une partie en cliquant sur
          "JOUER".
        </TextWrapper>
        <PlayButton to="/9gagnants" $isFullLink>
          {/*Redirige vers la première épreuve*/}
          JOUER
        </PlayButton>
        <LeaderboardButton to="/leaderboard" $isFullLink>
          {/*Redirige vers le leaderboard*/}
          LEADERBOARD
        </LeaderboardButton>
      </Wrapper>
    </RulesWrapper>
  )
}

export default Rules
