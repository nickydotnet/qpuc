import ErrorIllustration from '../../assets/images/error.svg'

import {
  Container,
  ErrorWrapper,
  ErrorTitle,
  ErrorSubtitle,
  Illustration,
  Redirect,
} from './style'

//Page contenant une illustration et une redirection sur la page d'accueil lorsque l'url entrée n'existe pas sur le site

function Error() {
  return (
    <Container>
      <ErrorWrapper>
        <ErrorTitle>OUPS...</ErrorTitle>
        <Illustration src={ErrorIllustration} />
        <ErrorSubtitle>
          Il semblerait que la page que vous cherchez n’existe pas
        </ErrorSubtitle>
        <Redirect to="/" $isFullLink>
          Accueil
        </Redirect>
      </ErrorWrapper>
    </Container>
  )
}

export default Error
