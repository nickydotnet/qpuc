import { useState, useEffect } from 'react'
import {
  RegisterWrapper,
  Title,
  Container,
  RegisterButton,
  Input,
  RegisterForm,
  UpPage,
} from './style'
import { useHistory } from 'react-router-dom'
import Return from '../../components/Return'
import { Loader } from '../../utils/style/Atoms'

import '../../utils/style/Home.css'

function Register() {
  //State pour conserver les données entrées par l'utilisateur
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  let history = useHistory()

  //Permet de ramener la vue de l'écran au sommet de la page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //Modifie le state du pseudo
  function changeUsername(event) {
    setUsername(event)
  }

  //Modifie le state du mdp
  function changePassword(event) {
    setPassword(event)
  }

  //Crée un utilisateur dans la bdd
  const clickRegister = (e) => {
    //On vérifie que le pseudo et le mdp répondent au minimum requis

    if (username.length >= 3 && password.length >= 5) {
      //On utilise une requête POST pour écrire l'username et le mdp dans la bdd
      setDataLoading(true)
      fetch('https://salmon-moss-0fb9c7203.5.azurestaticapps.net/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.message === 'Utilisateur créé !') {
            //On prévient l'utilisateur qu'il est bien inscrit et on le redirige vers la page d'accueil

            alert('Inscription effectuée !')
            history.push('/')
          } else {
            //Sinon on le prévient qu'il y a eu un problème

            alert("Erreur lors de l'inscription")
          }
          setDataLoading(false)
        })
        .catch((error) => console.log(error))
    } else if (username.length === 0) {
      //Si il n'a pas rempli le champ pseudo

      alert('Veuillez choisir un pseudo !\n (minimum 3 caractères)')
    } else if (username.length <= 3) {
      //Si il son pseudo est trop court

      alert('Veuillez choisir un pseudo plus long ! \n (minimum 3 caractères)')
    } else if (password.length === 0) {
      //Si il n'a pas rempli le champ mdp

      alert('Veuillez choisir un mot de passe !\n (minimum 5 caractères)')
    } else {
      //Si le mdp est trop court

      alert(
        'Veuillez choisir un mot de passe plus long ! \n (minimum 5 caractères)'
      )
    }
  }

  return (
    <RegisterWrapper>
      <Title>Inscription</Title>
      {isDataLoading ? (
        //On affiche un Loader

        <Loader />
      ) : (
        <Container>
          <UpPage>
            <Return />
            <RegisterForm>
              <label style={{ 'font-size': '30px' }}>Nom d'utilisateur :</label>
              <Input
                type="text"
                placeholder="Choisissez un nom d'utilisateur"
                onChange={(event) => {
                  //Lorsque l'utilisateur modifie le champ, on modifie le state du pseudo

                  changeUsername(event.target.value)
                }}
              />
              <br />
              <br />
              <label style={{ 'font-size': '30px' }}>Mot de passe :</label>
              <Input
                type="password"
                placeholder="Choisissez un mot de passe"
                onChange={(event) => {
                  //Lorsque l'utilisateur modifie le champ, on modifie le state du mdp

                  changePassword(event.target.value)
                }}
              />
              <br />
              <RegisterButton onClick={clickRegister}>
                S'INSCRIRE
              </RegisterButton>
            </RegisterForm>
          </UpPage>
        </Container>
      )}
    </RegisterWrapper>
  )
}

export default Register
