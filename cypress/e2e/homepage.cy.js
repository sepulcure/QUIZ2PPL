describe("Testing the application", function() {
  it("should login with username and password", function() {

      // visit the lambdageeks page
      //Test S
      cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')

      cy.get(':nth-child(1) > .form-control').type('rhd')

      cy.get(':nth-child(2) > .form-control').type('raihan123')

      cy.get('.btn').click()

      cy.get('[href="tambah_kategori.php"]').click()
      //Test Case 01
    cy.get('#validationCustom01').type("Anime")
    cy.get('.m-3 > .btn').click();

    //Test Case 02
    cy.get('.m-3 > .btn').click

    //Test Case 03
    cy.get('#validationCustom01').type("Adventure")
    cy.get('.m-3 > .btn').click();

    //Logout
    cy.get('#navbarDropdown').click();
    cy.get('.dropdown-item').click();

      
  });
});