import Logo from '../../assets/images/Logo.svg'
import { useState, useEffect, useRef, useContext } from 'react'
import {
  Input,
  LoginButton,
  HomeWrapper,
  Illustration,
  Container,
  RegisterButton,
  OverlayForm,
  ErrorMessage,
  TextLogin,
} from './style'
import { Loader } from '../../utils/style/Atoms'
import { useHistory } from 'react-router-dom'
import { ConnexionContext, IdContext } from '../../utils/context'

import '../../utils/style/Home.css'

function Home() {
  //State
  //Pseudo entré
  const [username, setUsername] = useState([])
  //Mdp entré
  const [password, setPassword] = useState([])
  //Etat d'envoi du formulaire de connexion
  const [stateForm, setStateForm] = useState([])
  //Nombre de fois où a été envoyé le formulaire
  const [countSendForm, setSendForm] = useState([])
  //Message de connexion
  const [message, setMessage] = useState('')
  //Etat de chargement des données
  const [isDataLoading, setDataLoading] = useState(false)

  //Avec le contexte on gère l'état de connexion de l'utilisateur
  const { changeConnected } = useContext(ConnexionContext)
  const { changeId } = useContext(IdContext)

  //history nous permet de rediriger vers une nouvelle page
  let history = useHistory()

  //Permet de ne pas vérifier le formulaire lors du chargement initial de la page
  const firstUpdate = useRef(true)

  //Ce useEffect est appelé à chaque envoi du formulaire
  useEffect(() => {
    //Si c'est le premier chargement de la page on ne fait rien

    if (firstUpdate.current) {
      firstUpdate.current = false
    } else {
      //Sinon
      setDataLoading(true)
      fetch(`https://orange-pond-007deb103.5.azurestaticapps.net/api/auth`) //On récupère les utilisateurs de la bdd
        .then((response) => response.json())
        .then((requestData) => {
          //On parcourt la liste des utilisateurs

          for (let i = 0; i < requestData.length; i++) {
            if (
              //On compare leurs pseudo et mdp

              requestData[i].username.toString() === username &&
              requestData[i].password.toString() === password
            ) {
              //Si on a une correspondance, on le notifie et on le redirige sur la page suivante

              setMessage('Connexion réussie !') //On met un message de réussite

              //On attend que l'utilisateur puisse lire le message et on redirige
              setTimeout(function () {
                changeId(requestData[i]._id)
                changeConnected() //On change l'état de connexion
                history.push('/rules') //Redirige vers la page des règles
                setStateForm(false) //On change l'état du formulaire
                setMessage('')
              }, 2000)
              break
            }
            if (i === requestData.length - 1 && stateForm === true) {
              //Sinon, on repasse à false l'état d'envoi du formulaire et on notifie de l'erreur

              setMessage('Identifiant ou mot de passe incorrect') //On met un message d'erreur
              setTimeout(function () {
                //On attend que l'utilisateur puisse lire le message
                setStateForm(false)
                setMessage('')
              }, 2000)
            }
          }
          setDataLoading(false)
        })
        .catch((error) => console.log(error))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, countSendForm])

  //Fonction appelée quand on clique sur le bouton de connexion et qui permete de changer l'état du formulaire pour vérifier les id de connexion
  function sendForm() {
    setStateForm(true)
    setSendForm(countSendForm + 1)
  }

  //Change le state contenant le pseudo entré dans l'input
  function changeUsername(event) {
    setUsername(event)
  }

  //Change le state contenant le mdp entré dans l'input
  function changePassword(event) {
    setPassword(event)
  }

  return (
    <HomeWrapper>
      <Illustration src={Logo} />
      {/* Si les données chargent */}

      {isDataLoading ? (
        //On affiche un Loader

        <Loader />
      ) : stateForm === true ? (
        //Si les infos de connexion sont bonnes on affiche ce mesage

        message === 'Connexion réussie !' ? (
          <OverlayForm>{message}</OverlayForm>
        ) : (
          //Si elles sont fausses on affiche un message d'erreur

          <Container>
            <TextLogin>Nom d'utilisateur :</TextLogin>
            <Input
              type="text"
              onChange={(event) => {
                changeUsername(event.target.value)
              }}
              name="username"
              placeholder="Entrez votre nom d'utilisateur"
            />
            <br />
            <br />
            <TextLogin>Mot de passe :</TextLogin>
            <Input
              type="password"
              onChange={(event) => {
                changePassword(event.target.value)
              }}
              name="password"
              placeholder="Entrez votre mot de passe"
            />
            <br />
            <ErrorMessage>{message}</ErrorMessage>
            <LoginButton onClick={sendForm}>CONNEXION</LoginButton>
          </Container>
        )
      ) : (
        //Si le formulaire n'a pas été envoyé on l'affiche

        <Container>
          <TextLogin>Nom d'utilisateur :</TextLogin>
          <Input
            type="text"
            onChange={(event) => {
              changeUsername(event.target.value)
            }}
            name="username"
            placeholder="Entrez votre nom d'utilisateur"
          />
          <br />
          <br />
          <TextLogin>Mot de passe :</TextLogin>
          <Input
            type="password"
            onChange={(event) => {
              changePassword(event.target.value)
            }}
            name="password"
            placeholder="Entrez votre mot de passe"
          />
          <br />
          <LoginButton onClick={sendForm}>CONNEXION</LoginButton>
        </Container>
      )}
      <RegisterButton to="/register" $isFullLink>
        S'INSCRIRE
      </RegisterButton>
    </HomeWrapper>
  )
}

export default Home
