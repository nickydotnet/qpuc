import Logo from '../../assets/images/LogoB.svg'
import DisconectIcon from '../../assets/images/disconnect.svg'
import SoundOn from '../../assets/images/sound.svg'
import SoundOff from '../../assets/images/mute.svg'
import { useContext } from 'react'
import {
  ConnexionContext,
  ErrorContext,
  QuestionListContext,
  ScoreContext,
  TimeContext,
  SoundContext,
} from '../../utils/context'
import {
  HeaderContainer,
  DisconnectButton,
  Illustration,
  Icon,
  SoundButton,
} from './style'
import { useLocation, useHistory } from 'react-router-dom'

function Header() {
  //Permet de gérer l'état de connexion du joueur
  const { changeConnected, connected } = useContext(ConnexionContext)
  //Permet de réinitialiser les erreurs, le score, le temps et la liste des questions posées
  const { resetError } = useContext(ErrorContext)
  const { resetScore } = useContext(ScoreContext)
  const { resetTime } = useContext(TimeContext)
  const { resetList } = useContext(QuestionListContext)
  const { pathname } = useLocation()
  //Permet d'activer ou désactiver le son
  const { soundState, changeSound } = useContext(SoundContext)
  let history = useHistory()

  if (
    pathname !== '/rules' &&
    pathname !== '/leaderboard' &&
    pathname !== '/9gagnants' &&
    pathname !== '/4suiteTheme' &&
    pathname !== '/4suite' &&
    pathname !== '/beforeFace2Face' &&
    pathname !== '/faceaface' &&
    pathname !== '/score'
  ) {
    //Si on est pas sur l'une des pages ci-dessus on affiche pas le header
    return null
  } else {
    //Sinon on l'affiche
    return (
      <HeaderContainer>
        <Illustration src={Logo} />
        <SoundButton
          //En cliquant sur le bouton de son on active ou désactive ce dernier
          onClick={() => {
            changeSound()
          }}
        >
          {soundState === true ? (
            //En fonction de l'état du son on affiche une icone différente
            <Icon src={SoundOn} />
          ) : (
            <Icon src={SoundOff} />
          )}
        </SoundButton>
        <DisconnectButton
          //En cliquant sur le bouton de déconnexion on déconnecte le joueur et on réinitialise la valeur des erreurs, du score, du temps et la liste des questions
          onClick={() => {
            changeConnected()
            resetError()
            resetScore()
            resetTime()
            resetList()
            //Puis on redirige à l'accueil
            history.push('/')
          }}
        >
          {connected === true ? <Icon src={DisconectIcon} /> : ' '}
          {/* Si le joueur est connecté on affiche un logo pour se déconnecter */}
        </DisconnectButton>
      </HeaderContainer>
    )
  }
}

export default Header
