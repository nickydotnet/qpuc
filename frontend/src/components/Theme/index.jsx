import { ThemeSelector } from './style'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context/index'
import { useHistory } from 'react-router-dom'

function Theme({ theme }) {
  //Permet de modifier le thème choisi pour le 4 à la suite
  const { SelectTheme } = useContext(ThemeContext)
  let history = useHistory()

  //Change le thème choisi par le joueur
  function changeTheme(theme) {
    //On change le thème dans le contexte puis on redirige vers la page du jeu 4 à la suite
    SelectTheme(theme)
    setTimeout(function () {
      history.push('/4suite')
    }, 2000)
  }

  return (
    <ThemeSelector
      //Lorsque l'on clique sur un thème on modifie le thème choisi
      onClick={() => {
        changeTheme(theme)
      }}
    >
      {theme}
    </ThemeSelector>
  )
}

export default Theme
