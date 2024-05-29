import { LeaderboardWrapper, PageTitle, TableBg, UpPage } from './style'
import { useHistory, useLocation } from 'react-router-dom'
import TableL from '../../components/Leaderboard/'
import { ConnexionContext } from '../../utils/context'
import { useEffect, useContext, useState } from 'react'
import Return from '../../components/Return'

function Leaderboard() {
  //State qui compte le nb de pseudo
  const [nbpseudo, setNBPseudo] = useState(0)
  //Les contextes et history permettent une redirection en fonction de l'état du joueur et l'utilisation du bouton retour
  const { pathname } = useLocation()
  const { connected } = useContext(ConnexionContext)
  let history = useHistory()

  //On récupère tous les utilisateurs et on compte leur nombre pour adapter la taille du fond du tableau en pixel
  useEffect(() => {
    fetch(`https://orange-pond-007deb103.5.azurestaticapps.net/api/auth`) //On récupère les utilisateurs de la bdd
      .then((response) => response.json())
      .then((requestData) => {
        //On défini le nombre de pseudo comme le nombre d'utilisateurs inscrits + 1 (pour la ligne pseudo/score)

        setNBPseudo(requestData.length + 1)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Permet la redirection lorsque l'utilisateur n'est pas connecté
  useEffect(() => {
    window.scrollTo(0, 0)
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  return (
    <LeaderboardWrapper>
      <UpPage>
        <Return path={pathname} />
        <PageTitle>LEADERBOARD</PageTitle>
      </UpPage>
      <TableBg numberPseudo={nbpseudo * 48}>
        <TableL />
        {/* On utilise le composant TableL pour afficher nos pseudos et scores */}
      </TableBg>
    </LeaderboardWrapper>
  )
}

export default Leaderboard
