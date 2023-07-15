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
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
    cy.get('.right-container')
      .get('.toggle-container')
      .get('button').first().click();
  });

  it('should have a logo and be able to go back to main page', () => {
    cy.get('.header-container')
      .get('.left-container')
      .get('.logo-name').contains('p', 'street eatz').click()
    cy.contains('h2', 'hungry?')
  });

  it('should be able to go to Vendor View from home page', () => {
    cy.get('.status-container')
      .get('.status-header')
    cy.contains('welcome back!')
  });

  it('should display the restaurant name', () => {
    cy.get('.status-container')
      .get('.vendor-name')
    cy.contains('Ninja Ramen')
  });

  it('should display a toggle button to swtich from open and close', () => {
    cy.get('.status-toggle-container')
      .contains('p', 'closed')
      .get('.status-toggle-container')
      .contains('p', 'open')
      .get('.toggle-switch')
  });

  it('should have a location form', () => {
    cy.get('form')
      .get('.search-bar').type('12345 West Street')
      .get('img').get('.status-pin')
      .get('button').get('.broadcast-btn')
  })

  it('should display statisics', () => {
    cy.get('.statistics-container')
      .contains('h3', 'Ninja Ramen Statistics')
      .get('.statistics-info').contains('You have a total of 56 Streeteatz users who love your truck!')
      .get('.statistics-info').contains('You have a total of 12 Streeteatz users who need more convincing.')
  });

  it('should display a list of resources', () => {
    cy.get('.links-container')
      .contains('h3', 'Want to expand your business')
      .get('span').contains('Resources for Food Truck Owners')
  });

  it('should show a list of menu items', () => {
    cy.get('.menu-container')
      .get('.menu-item').contains('h3', 'Vegan Samosas')
      .get('.menu-top').contains('p', '$5.00')
      .get('.menu-item').contains('h3', 'Gulab Jamun')
      .get('.menu-bottom').contains('p', 'Milk doughnuts soaked in syrup')
  });
});