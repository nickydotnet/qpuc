import React, { useEffect, useState } from 'react'
import { Column, Line, Wrapper, Separation, TableDiv } from './style'

function Table() {
  //State qui stock les utilisateurs
  const [user, setUser] = useState([])

  //On récupère tous les utilisateurs au premier appel du composant
  useEffect(() => {
    fetch(`https://qpuc-backend.herokuapp.com/api/auth`)
      .then((response) => response.json())
      .then((requestData) => {
        setUser(requestData)
      })
  }, [])

  function renderTableData() {
    //On tri les joueurs par ordre de highscore décroissant
    user.sort((a, b) => b.highscore - a.highscore)
    return user.map((joueur) => {
      const { _id, username, highscore } = joueur
      return (
        //Une ligne du tableau est définie par l'id du joueur et contient une colonne avec le pseudo du joueur et une autre avec son highscore
        <div>
          <Separation />
          <Line key={_id}>
            <Column>{username}</Column>
            <Column>{highscore}</Column>
          </Line>
        </div>
      )
    })
  }

  return (
    <Wrapper>
      <TableDiv>
        <tbody>
          <Line>
            {' '}
            <Column>PSEUDO</Column>
            <Column>SCORE</Column>
          </Line>
          <Separation />
          {renderTableData()}
        </tbody>
      </TableDiv>
    </Wrapper>
  )
}

export default Table
