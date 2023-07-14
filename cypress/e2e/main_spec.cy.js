beforeEach(() => {
  cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/", {
    statusCode: 200,
    fixture: "truckData.json"
  })
  .visit("http://localhost:3000/")
  // cy.wait(2000)
});

it("should display a title", () => {
  cy.contains('h2', 'hungry?')
});

it("should have a logo and display app name", () => {
  cy.get('img').should('have.class', 'logo-img')
  cy.get('p').should('have.class', 'logo-name')
});

it("should have a search bar, icon and search buttons", () => {
  cy.get('input').should('have.class', 'search-field')
  cy.get('button').should('have.class', 'searchQuerySubmit')
  cy.get('button').contains('open now')
  cy.get('button').contains('favorites')
  cy.get('button').contains('clear')
});

it("should have a toggle button with vendors and customers", () => {
  cy.get('.toggle-container').children().should('have.length', 2)
  cy.get('button').contains('vendors')
  cy.get('button').contains('customers')
});

it("should have a notifications icon", () => {
  cy.get('.notifications-container').children().should('have.length', 2)
  cy.get('div').children('.notifications-btn')
  cy.get('div').children('.notifications-icon')
});

it("should display a list of food truck cards with content", () => {
  cy.get('.vendor-display').children().should('have.length', 2)
  cy.get('[class="card-container"]:first').children().should('have.length', 3)
  cy.get('[class="card-container"]:first').children('.star-icon')
  cy.get('[class="card-container"]:first').children('.card-details-container')
    .children('a').children('.name').contains('Mac and Noodles')
  cy.get('[class="card-container"]:first').children('.card-details-container')
    .children('.details-status-container').children('.status-icon-closed')
  cy.get('[class="card-container"]:first').children('.card-details-container')
    .children('.details-status-container').children('.status').contains('closed')
  cy.get('[class="card-container"]:first').children('.card-details-container')
    .children('.details-status-container').children('.pin')
  cy.get('[class="card-container"]:first').children('.card-details-container')
    .children('.details-status-container').children('.location').contains('500 E 17th Ave Denver, CO')
  cy.get('[class="card-container"]:first').children('.card-details-container')
    .children('.tags').contains('#macaroni #cheese #noodles #macncheese')
  cy.get('[class="card-container"]:first').children('.card-details-container')
    .children('.votes-container').children('.notUpvoted')
  cy.get('[class="card-container"]:first').children('.card-details-container')
    .children('.votes-container').children('.upvotes').contains(666)
  cy.get('[class="card-container"]:first').children('.card-details-container')
    .children('.votes-container').children('.downvoted')
  cy.get('[class="card-container"]:first').children('.card-details-container')
    .children('.votes-container').children('.downvotes').contains(12)
});
