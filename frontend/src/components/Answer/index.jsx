import React, { useContext } from 'react'
import {
  AnswerSelectedContext,
  ErrorContext,
  FaceScoreContext,
  ScoreContext,
  SoundContext,
} from '../../utils/context'
import { AnswerBlock } from './style'
import correct from '../../assets/music/goodAnswer.mp3'
import incorrect from '../../assets/music/wrongAnswer.mp3'

function Answer({ answer, question, game, points }) {
  //Permet de savoir sur quelle réponse on a cliqué
  const { changeClicked, listAnswer } = useContext(AnswerSelectedContext)
  //Permet d'ajouter une erreur
  const { addError } = useContext(ErrorContext)
  //Permet de modifier le score
  const { addPoints, resetScore } = useContext(ScoreContext)
  //Permet de modifier le score du face à face
  const { addFacePoints } = useContext(FaceScoreContext)
  //Etat du son
  const { soundState } = useContext(SoundContext)

  //Joue les sons des réponses correctes ou incorrectes
  function Sound() {
    if (answer === question.question_answer) {
      new Audio(correct).play()
    } else {
      new Audio(incorrect).play()
    }
  }

  //Permet de valider ou non une question
  function Validate() {
    if (game === '9') {
      //Si le jeu est le 9 points gagnant

      if (answer === question.question_answer) {
        //Si c'est la bonne réponse
        //On ajoute les points associés à la question et on dit qu'aucune réponse n'est sélectionée dans la liste
        listAnswer.splice(0, 1, '')
        addPoints(question.points)
      } else {
        //Sinon on ajoute une erreur et on dit qu'aucune réponse n'est sélectionnée dans la liste
        listAnswer.splice(0, 1, '')
        addError()
      }
    } else if (game === '4') {
      //Si le jeu est le 4 à la suite

      if (answer === question.question_answer) {
        //Si c'est la bonne réponse
        //On ajoute 1 point

        listAnswer.splice(0, 1, '')
        addPoints(1)
      } else {
        //Sinon on ajoute une erreur et on réinitialise le score actuel

        listAnswer.splice(0, 1, '')
        addError()
        resetScore()
      }
    } else if (game === 'face') {
      //Si le jeu est le face à face

      if (answer === question.question_answer) {
        //Si c'est la bonne réponse
        //On ajoute le nombre de points a gagner

        listAnswer.splice(0, 1, '')
        addFacePoints(points)
      } else {
        //Sinon on ajoute une erreur

        listAnswer.splice(0, 1, '')
        addError()
      }
    }
  }

  return (
    <AnswerBlock
      clicked={listAnswer.includes(answer) ? true : false} //permet de changer l'apparence de la réponse en cliquant dessus
      goodAnswer={listAnswer[0] === question.question_answer ? true : false} //Modifie la couleur en vert si la réponse est bonne et rouge sinon
      onClick={() => {
        changeClicked(answer)
        //On change la réponse cliquée par celle-ci

        if (soundState === true) {
          //Si les sons sont activés, on les joue
          setTimeout(function () {
            Sound()
          }, 500)
        }

        setTimeout(function () {
          //On vérifie si la réponse est bonne
          Validate()
        }, 2000)
      }}
    >
      {answer}{' '}
    </AnswerBlock>
  )
}

export default Answer
