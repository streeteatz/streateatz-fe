beforeEach(() => {
  cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/", {
    statusCode: 200,
    fixture: "truckData.json"
  })
  .visit("http://localhost:3000/")
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

it("should display a list of food truck cards", () => {
  cy.get
});
