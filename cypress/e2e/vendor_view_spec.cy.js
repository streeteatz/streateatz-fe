describe('Vendor Page', () => {

  beforeEach(() => {
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/", {
      statusCode: 200,
      fixture: "truckData.json"
    });
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/9", {
      statusCode: 200,
      fixture: "singleTruckData.json"
    })
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/items/", {
      statusCode: 200,
      fixture: "menuData.json"
    })
    // cy.intercept("GET", "http://localhost:3001/socket.io/?EIO=4&transport=polling&t=ObMVm5g", {
    //   statusCode: 200,
    //   fixture: "truckData.json"
    // })
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
    cy.get('.right-container')
      .get('.toggle-container')
      .get('button').first().click();
  });

  it('should be able to go to Vendor View from home page', () => {
    cy.get('.status-container')
      .get('.status-header')
    cy.contains('welcome back!')
  });


})