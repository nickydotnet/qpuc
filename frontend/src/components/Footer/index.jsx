import { FooterContainer, Repository, Credits, GitHub } from './style'

//Pied de page contenant une redirection sur le dépôt GitHub du jeu

function Footer() {
  return (
    <FooterContainer>
      <Credits>Made by Evan Jannot</Credits>
      <Repository>
        <GitHub to="//github.com/EvanJannot/QPUC" $isFullLink target="_blank">
          Check the project's GitHub
        </GitHub>
      </Repository>
    </FooterContainer>
  )
}

export default Footer
