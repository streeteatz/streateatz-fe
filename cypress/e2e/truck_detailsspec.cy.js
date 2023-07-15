describe('Single Truck Page', () => {

  beforeEach(() => {
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/", {
      statusCode: 200,
      fixture: "truckData.json"
    })
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/vendors/7", {
      statusCode: 200,
      fixture: "singleTruckData.json"
    })
    cy.intercept("GET", " https://streeteatz-be-b15261620498.herokuapp.com/vendors/9", {
      statusCode: 200,
      fixture: "singleTruckData.json"
    })
    cy.intercept("GET", "https://streeteatz-be-b15261620498.herokuapp.com/items/", {
      statusCode: 200,
      fixture: "ramenMenu.json"
    })
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
    cy.get('.card-container')
      .get('.name').contains('Mac and Noodles').click();
  });

  it('should have a logo and be able to go back to main page', () => {
    cy.get('.header-container')
      .get('.left-container')
      .get('.logo-name').contains('p', 'street eatz').click()
    cy.contains('h2', 'hungry?')
  });

  it('should be able to go to Custormer from truck details page', () => {
    cy.get('.toggle-container')
      .get('button').get('.selected-btn').click()
    cy.contains('h2', 'hungry?')
  });

  it('should be able to go to Vendor View from truck details page', () => {
    cy.get('.toggle-container')
      .get('button').get('.btn').click()
    cy.contains('welcome back!')
  });

  it('should see the name, address, tags, and wait time of the truck', () => {
    cy.get('.details-name').contains('h2', 'Ninja Ramen')
      .get('.details-status-container').contains('p', '100 Broadway St Denver, CO 80203')
      .get('.details-tags').contains('p', '#ramen #soup #noodles #asian')
      .get('.wait-time').contains('p', '10 minutes wait')
      .get('.details-image')
  });

  it('should see the likes and dislikes', () => {
    cy.get('.right-side')
      .get('.votes-container').contains('p', '56')
      .get('.details-icon').get('.downvoted')
  });

  it('should see a menu', () => {
    cy.get('.menu-container')
      // .get('.menu-item').contains('h3', 'Vegan Samosas')
      // .get('.menu-top').contains('p', '$5.00')
      // .get('.menu-item').contains('h3', 'Gulab Jamun')
      // .get('.menu-bottom').contains('p', 'Milk doughnuts soaked in syrup')
  });
});