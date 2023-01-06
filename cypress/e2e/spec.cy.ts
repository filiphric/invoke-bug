before(() => {
  cy.task('testSetupData', {
    "boards": [
      {
        "name": "shopping",
        "user": 0,
        "starred": false,
        "created": "2023-01-05",
        "id": 1
      }
    ],
    "cards": [
      {
        "order": 0,
        "boardId": 1,
        "listId": 1,
        "name": "milk",
        "created": "2023-01-05",
        "deadline": "2023-01-08",
        "description": "",
        "completed": false,
        "id": 2
      },
      {
        "order": 1,
        "boardId": 1,
        "listId": 1,
        "name": "bread",
        "created": "2023-01-05",
        "deadline": "2023-01-08",
        "description": "",
        "completed": false,
        "id": 3
      },
      {
        "order": 2,
        "boardId": 1,
        "listId": 1,
        "name": "juice",
        "created": "2023-01-05",
        "deadline": "2023-01-08",
        "description": "",
        "completed": false,
        "id": 4
      }
    ],
    "lists": [
      {
        "boardId": 1,
        "name": "groceries",
        "order": 0,
        "created": "2023-01-05",
        "id": 1
      }
    ],
    "users": []
  })
})

it('premenné', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('text')
    .as('boardName')

  // comment this out and it will return text
  cy.get('[data-cy=board-item]')
    .click()

  // if we go back, the value returns
  // cy.go('back')

  cy.get('@boardName')
    .then((boardName) => {
      cy.log(boardName) // should say "shopping"
      console.log(boardName)

    })
})
