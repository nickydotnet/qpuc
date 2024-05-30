import { FooterContainer, Repository, Credits, GitHub } from './style'

//Pied de page contenant une redirection sur le dépôt GitHub du jeu

function Footer() {
  return (
    <FooterContainer>
      <Credits></Credits>
      <Repository>
        <GitHub to="//github.com/EvanJannot/QPUC" $isFullLink target="_blank">
        </GitHub>
      </Repository>
    </FooterContainer>
  )
}

export default Footer
