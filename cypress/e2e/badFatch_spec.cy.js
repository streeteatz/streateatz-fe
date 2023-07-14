describe('Bad Fetch Call Home', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/", {
      statusCode: 500,
    })
    cy.visit('http://localhost:3000/').wait(2000);
  })
  it('Should Display an error message', () => {
    cy.get(`.error-fetch`).contains('p', 'Oops, something has gone wrong on our end, try again!')
    cy.get(`.home-button`).contains("refresh")
  })
})
describe('Bad Fetch Call Vendor View', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/9", {
      statusCode: 500,
    })
    cy.visit('http://localhost:3000/vendor-view').wait(2000);
  })
  it('Should Display an error message', () => {
    cy.get(`.error-fetch`).contains('p', 'Oops, something has gone wrong on our end, try again!')
    cy.get(`.home-button`).contains("refresh")
  })
})
describe('Bad Search', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/", {
      statusCode: 200,
      fixture: 'truckData.json'
    })
    cy.visit('http://localhost:3000/').wait(2000);
  })
  it('Should Display a message upon an invalid search', () => {
    cy.get('.search-field').type('Son Wukong')
    cy.get('.searchQuerySubmit').click()
    cy.get(`.search-error`).contains('p', 'No results for that search, try again!')
  })
  it('Should allow a user to clear an invalid search and try again', () => {
    cy.get('.search-field').type('Son Wukong')
    cy.get('.searchQuerySubmit').click()
    cy.get(`.search-error`).contains('p', 'No results for that search, try again!')
    cy.get(`.clear-btn`).click()
    cy.get(`:nth-child(1) > .card-details-container > a > .name`).contains('p', "Mac and Noodles")
    cy.get(`:nth-child(2) > .card-details-container > a > .name`).contains('p', 'Deja Roux Cajun & Soul')
    cy.get('.search-field').type('soulfood')
    cy.get('.searchQuerySubmit').click()
    cy.get(`:nth-child(1) > .card-details-container > a > .name`).contains('p', 'Deja Roux Cajun & Soul')

  })
})
describe('Bad url route', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/9", {
      statusCode: 200,
      fixture: 'truckData.json',
    })
    cy.visit('http://localhost:3000/Jacobrocksiguess').wait(2000);
  })
  it('Should Display an error message', () => {
   cy.get(`.error-url`).contains('p', 'You have reached a bad link. Check the URL and try again, or head back to the home page!')
   cy.get(`.home-button`).contains('home')
  })
  it('Should allow a user to go to the home page by clicking the home button', () => {
    cy.get(`.home-button`).click()
    cy.url().should('include', '/');
  })
})
