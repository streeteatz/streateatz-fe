describe('Search Component', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/", {
      statusCode: 200,
      fixture: "truckData.json"})
      .visit("http://localhost:3000/")
  })
  it('Should Render a search bar', () => {
   cy.get('.search-field').should('exist')
  })
  it("Should fill in the search bar", () => {
    cy.get('.search-field').type('noodles')
      .should('have.value', 'noodles')
  })
  it("Should hit the search icon and show the results", () => {
    cy.get('.search-field').type('noodles')
    cy.get('.searchQuerySubmit').click()
    cy.get('.name').contains('p', "Mac and Noodles")
    cy.get('.location').contains('p', '500 E 17th Ave Denver, CO')
    cy.get('.upvotes').contains('p', '666')
    cy.get('.downvotes').contains('p', '12')
  })
  it('Should be able to find the favorite button', () => {
    cy.get(`[value="favorites"]`).should('exist')
  })
  it('Should have no favorites by default', () => {
    cy.get(`[value="favorites"]`).click()
    cy.get(`.card-container`).should('not.exist')
  })
  it("Should be able to favorite a card", () => {
    cy.get(':nth-child(1) > .star-icon').as('starIcon') 
    cy.get('@starIcon').should('have.attr', 'src').should('not.include', 'fav.png') 
    cy.get('@starIcon').click()
    cy.get(`[value="favorites"]`).click()
    cy.get(`.card-container`).should('have.length', 1) 
    cy.get('.name').contains('p', "Mac and Noodles")
    cy.get('.location').contains('p', '500 E 17th Ave Denver, CO')
    cy.get('.upvotes').contains('p', '666')
    cy.get('.downvotes').contains('p', '12')
  })
  it("Should be able to favorite and unfavorite a card and not have it display in favorites", () => {
    cy.get(':nth-child(1) > .star-icon').click()
    cy.get(':nth-child(2) > .star-icon').click()
    cy.get(`[value="favorites"]`).click()
    cy.get(`.card-container`).should('have.length', 2) 
    cy.get(`:nth-child(1) > .card-details-container > a > .name`).contains('p', "Mac and Noodles")
    cy.get(`:nth-child(2) > .card-details-container > a > .name`).contains('p', 'Deja Roux Cajun & Soul')
    cy.get(':nth-child(1) > .star-icon').click()
    cy.get(`.clear-btn`).click()
    cy.get(`:nth-child(1) > .star-icon`).should('have.attr', 'src').should('not.include', 'fav.png') 
    cy.get(`[value="favorites"]`).click()
    cy.get(`.card-container`).should('have.length', 1) 
    cy.get(`:nth-child(1) > .card-details-container > a > .name`).contains('p', 'Deja Roux Cajun & Soul')
  })
  it("Should be able to clear the filtered results by clicking the clear button", () => {
    cy.get(':nth-child(2) > .star-icon').click()
    cy.get(`[value="favorites"]`).click()
    cy.get(`.card-container`).should('have.length', 1) 
    cy.get(`:nth-child(1) > .card-details-container > a > .name`).contains('p', 'Deja Roux Cajun & Soul')
    cy.get(`.clear-btn`).click()
    cy.get(`.card-container`).should('have.length', 2) 
    cy.get(`:nth-child(1) > .star-icon`).should('have.attr', 'src').should('not.include', 'fav.png') 
    cy.get(`:nth-child(1) > .card-details-container > a > .name`).contains('p', "Mac and Noodles")
    cy.get(`:nth-child(2) > .card-details-container > a > .name`).contains('p', 'Deja Roux Cajun & Soul')
  })
})