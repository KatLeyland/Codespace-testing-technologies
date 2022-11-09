describe('Rps', () => {
  it('open the test url', () => {
      //open URL
      cy.visit('http://127.0.0.1:5500/ROCK%20PAPER%20SCISSORS.html')
  })

  it('clicks rock button and checks output', () => {
      //Test rock button clicks and shows choice
      cy.get('[data-cy="rockbtn"]').click('center')
      cy.get('[data-cy="user-option"]').should("exist").should("have.text","Your Option: rock")

      //Test computer option exists 
      cy.get('[data-cy="computer-option"]').should("exist").should("contains.text","Computer Option: ")
      
      //Test computer option fills and correct result shown
      cy.get ('[data-cy="computer-option"]').then(($btn) => {
      if ($btn.text().includes('Computer Option: rock')) {
        cy.get('[data-cy="result"]').should("exist").should("have.text","Result: its a draw!")
      }
      else if ($btn.text().includes('Computer Option: paper')) {
        cy.get('[data-cy="result"]').should("exist").should("have.text","Result: you lose!")
      }
      else {
          cy.get('[data-cy="result"]').should("exist").should("have.text","Result: you win!")
        }
      })
    })

  it('clicks scissor button and checks output', () => {
      //Test scissor button and shows choice
      cy.get('[data-cy="scissorbtn"]').click('center')
      cy.get('[data-cy="user-option"]').should("exist").should("have.text","Your Option: scissors")

      //Test computer option fills and correct result shown
      cy.get ('[data-cy="computer-option"]').then(($btn) => {
        if ($btn.text().includes('Computer Option: scissors')) {
          cy.get('[data-cy="result"]').should("exist").should("have.text","Result: its a draw!")
        }
        else if ($btn.text().includes('Computer Option: rock')) {
          cy.get('[data-cy="result"]').should("exist").should("have.text","Result: you lose!")
        }
        else {
            cy.get('[data-cy="result"]').should("exist").should("have.text","Result: you win!")
          }
        })

  })

  it('clicks paper button and checks output', () => {
    //Test paper button and shows choice
      cy.get('[data-cy="paperbtn"]').click('center')
      cy.get('[data-cy="user-option"]').should("exist").should("have.text","Your Option: paper")

      //Test computer option fills and correct result shown
      cy.get ('[data-cy="computer-option"]').then(($btn) => {
        if ($btn.text().includes('Computer Option: paper')) {
          cy.get('[data-cy="result"]').should("exist").should("have.text","Result: its a draw!")
        }
        else if ($btn.text().includes('Computer Option: scissors')) {
          cy.get('[data-cy="result"]').should("exist").should("have.text","Result: you lose!")
        }
        else {
            cy.get('[data-cy="result"]').should("exist").should("have.text","Result: you win!")
          }
        })
  })
})
