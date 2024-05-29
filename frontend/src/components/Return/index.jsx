import { useHistory } from 'react-router-dom'
import Logo from '../../assets/images/goBack.svg'
import { Arrow, Illustration } from './style'

function Return(path) {
  const history = useHistory()

  //Redirige vers une page en fonction de l'endroit où l'on se trouve
  function goBack() {
    if (path.path === '/leaderboard') {
      //Si on est sur le leaderboard on retourne aux règles

      history.push('/rules')
    } else {
      //Sinon on revient simplement à la page précédente

      history.goBack()
    }
  }

  return (
    <Arrow
      //En cliquant on appel la fonction pour changer de page
      onClick={() => {
        goBack()
      }}
      page={path.path}
    >
      <Illustration src={Logo} />
    </Arrow>
  )
}

export default Return
