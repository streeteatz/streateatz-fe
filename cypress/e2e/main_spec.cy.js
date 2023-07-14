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