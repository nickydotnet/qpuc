import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { PlayButton, MainWrapper, Wrapper, TextWrapper, Title } from './style'
import { ConnexionContext } from '../../utils/context'

function BeforeFace2Face() {
  let history = useHistory()
  const { connected } = useContext(ConnexionContext)

  //Permet de rediriger vers l'accueil si une personne tente d'accéder à cet écran par l'URL
  useEffect(() => {
    window.scrollTo(0, 0) //Permet de ramener la vue de l'écran au sommet de la page
    if (connected === false) {
      history.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, connected])

  return (
    <MainWrapper>
      <Title>BRAVO ! C'EST BIENTOT LA FIN !</Title>
      <Wrapper>
        <TextWrapper>
          Félicitations, vous êtes venus à bout du 9 points gagnants et du 4 à
          la suite. Il ne vous reste plus qu'à prendre part au Face à Face.
          <br /> <br />
          Dans cette version revisitée du jeu, le but est toujours d'atteindre
          les 12 points, la quantité de points gagnés étant degressive en
          fonction du temps mis. <br />
          Mais, ici, vous n'affrontez personne d'autres que vous-même. En effet,
          il faudra vous "contenter" de faire le moins d'erreurs possible !
          <br /> <br />
          Appuyez sur "FACE A FACE" pour vous lancer dans l'épreuve finale !
        </TextWrapper>
        <PlayButton to="/faceaface" $isFullLink>
          {/*Redirige vers le face à face*/}
          FACE A FACE
        </PlayButton>
      </Wrapper>
    </MainWrapper>
  )
}

export default BeforeFace2Face
