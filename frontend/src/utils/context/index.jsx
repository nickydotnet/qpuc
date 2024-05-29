import React, { useState, createContext } from 'react'

//Context pour le son, il permet de définir si les sons seront joués ou non et est changé avec un bouton
export const SoundContext = createContext()

export const SoundProvider = ({ children }) => {
  const [soundState, setSound] = useState(true) //Le son est activé de base
  const changeSound = () => {
    setSound(soundState === false ? true : false) //Si il est désactivé on l'active et sinon on le désactive
  }

  return (
    <SoundContext.Provider value={{ soundState, changeSound }}>
      {children}
    </SoundContext.Provider>
  )
}

//Permet de changer et de récupérer le score du jeu Face à Face
export const FaceScoreContext = createContext()

export const FaceScoreProvider = ({ children }) => {
  const [faceScore, setFaceScore] = useState(0) //De base le score vaut 0
  const addFacePoints = (points) => {
    setFaceScore(faceScore + points) //On ajoute le nombre de points passé en paramètre
  }
  const resetFacePoints = () => {
    //On met le score à 0
    setFaceScore(0)
  }

  return (
    <FaceScoreContext.Provider
      value={{ faceScore, addFacePoints, resetFacePoints }}
    >
      {children}
    </FaceScoreContext.Provider>
  )
}

//Permet de compter le temps d'une partie
export const TimeContext = createContext()

export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(0) //On commence à 0 secondes

  const addSecond = () => {
    //On ajoute une seconde en appelant cette fonction
    setTime(time + 1)
  }

  const resetTime = () => {
    //On remet le temps à 0 avec celle-ci
    setTime(0)
  }

  return (
    <TimeContext.Provider value={{ time, addSecond, resetTime }}>
      {children}
    </TimeContext.Provider>
  )
}

//Permet d'avoir accès au Thème du 4 à la suite
export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [choosenTheme] = useState([])
  const SelectTheme = (theme) => {
    //On défini le thème comme étant celui passé en paramètre
    choosenTheme.splice(0, 1, theme)
  }

  return (
    <ThemeContext.Provider value={{ choosenTheme, SelectTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

//Permet de gérer le score du joueur
export const ScoreContext = createContext()

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0) //Il vaut d'abord 0
  const changeScore = (points) => {
    //On peut directement définir sa valeur avec cette fonction
    setScore(points)
  }
  const addPoints = (points) => {
    //Ou on peut ajouter un nombre de point avec celle-ci
    setScore(score + points)
  }
  const resetScore = () => {
    //On peut aussi réinitialiser son score
    setScore(0)
  }

  return (
    <ScoreContext.Provider
      value={{ score, addPoints, resetScore, changeScore }}
    >
      {children}
    </ScoreContext.Provider>
  )
}

//Permet de gérer le nombre d'erreurs du joueur
export const ErrorContext = createContext()

export const ErrorProvider = ({ children }) => {
  const [errors, setError] = useState(0) //On commence avec 0 erreurs
  const addError = () => {
    //On peut ajouter une erreur
    setError(errors + 1)
  }
  const resetError = () => {
    //Ou réinitialiser le nombre d'erreurs
    setError(0)
  }

  return (
    <ErrorContext.Provider value={{ errors, addError, resetError }}>
      {children}
    </ErrorContext.Provider>
  )
}

//Gère la liste des questions déjà posées
export const QuestionListContext = createContext()

export const QuestionListProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [questionList, setQuestion] = useState([])
  const oldQuestion = (questionID) => {
    //On peut rajouter l'ID d'une question à cette liste
    questionList.push(questionID)
  }

  const resetList = () => {
    //Ou réinitialiser la liste
    questionList.splice(0, questionList.length)
  }

  return (
    <QuestionListContext.Provider
      value={{ questionList, oldQuestion, resetList }}
    >
      {children}
    </QuestionListContext.Provider>
  )
}

//Gère la réponse sélectionnée
export const AnswerSelectedContext = createContext()

export const SelectedAnswerProvider = ({ children }) => {
  const [listAnswer] = useState([])
  const changeClicked = (answer) => {
    //Si il y a déjà une réponse sélectionnée non nulle alors on remplace la réponse sélectionnée par celle passée en paramètre
    if (listAnswer.length === 1 && answer !== listAnswer[0]) {
      listAnswer.splice(0, 1, answer)
    }
    //Si il n'y en a aucun on définie la réponse sélectionée par celle passée en paramètre directement
    if (listAnswer.length === 0) {
      listAnswer.push(answer)
    }
  }

  return (
    <AnswerSelectedContext.Provider value={{ listAnswer, changeClicked }}>
      {children}
    </AnswerSelectedContext.Provider>
  )
}

//Permet de connaitre l'ID de l'utilisateur
export const IdContext = createContext()

export const IdProvider = ({ children }) => {
  const [id] = useState([])
  const changeId = (newId) => {
    //On défini l'ID comme étant l'ID passé en paramètre
    id.splice(0, 1, newId)
  }

  return (
    <IdContext.Provider value={{ id, changeId }}>{children}</IdContext.Provider>
  )
}

//Permet de connaître l'état de connexion du joueur
export const ConnexionContext = createContext()

export const ConnexionProvider = ({ children }) => {
  const [connected, setConnected] = useState(false) //Il est d'abord déconnecté
  const changeConnected = () => {
    //Si il est connecté on le déconnecte et sinon on le connecte
    setConnected(connected === true ? false : true)
  }

  return (
    <ConnexionContext.Provider value={{ connected, changeConnected }}>
      {children}
    </ConnexionContext.Provider>
  )
}
