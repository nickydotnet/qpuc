import { useEffect, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ConnexionContext, ThemeContext } from '../../utils/context'

import Theme from '../../components/Theme/index'
import { Suite4Wrapper, Title, Themes, OverlayTheme } from './style'

function Suite4Theme() {
  let history = useHistory()

  //Contexte qui permet de savoir l'état de l'utilisateur
  const { connected } = useContext(ConnexionContext)

  //Contexte pour stocker le thème choisi par l'utilisateur
  const { choosenTheme } = useContext(ThemeContext)

  //State qui permet de changer le thème
  const [actualTheme, setActual] = useState('')

  //Redirige le joueur si il n'est pas connecté et tente d'accéder à la page par l'url
  useEffect(() => {
    window.scrollTo(0, 0)
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  //Change le thème actuel par celui stocké dans le contexte
  function ChangeTheme() {
    setActual(choosenTheme[0])
  }

  return (
    <Suite4Wrapper>
      <Title>Veuillez choisir un thème</Title>
      {actualTheme === '' ? (
        <Themes>
          {/* Lorsque l'on clique sur un thème, le composant Theme change le thème
          dans le contexte et on appelle la fonction ChangeTheme pour récupérer
          cette information du contexte */}

          <div
            onClick={() => {
              ChangeTheme()
            }}
          >
            <Theme theme={'Ecole'} />
          </div>
          <div
            onClick={() => {
              ChangeTheme()
            }}
          >
            <Theme theme={'Enseignants'} />
          </div>
          <div
            onClick={() => {
              ChangeTheme()
            }}
          >
            <Theme theme={'Eleve'} />
          </div>
          <div
            onClick={() => {
              ChangeTheme()
            }}
          >
            <Theme theme={'Vie Etudiante'} />
          </div>
        </Themes>
      ) : (
        <OverlayTheme>
          {/* Affiche un message contenant le thème choisi */}
          C'est parti pour un 4 à la suite sur le thème : {choosenTheme}
        </OverlayTheme>
      )}
    </Suite4Wrapper>
  )
}

export default Suite4Theme
