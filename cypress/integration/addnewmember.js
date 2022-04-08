/// <reference types="cypress" />

import { login } from "./logintest.spec";
/*
method to Add new member in the system and make the user available in group
**/ 
function addNewMember(testdata){
    login(testdata.username,testdata.password);
    cy.get('#dropdownMenuOffset').click();
    cy.get('a').contains('Administrative').click();
    cy.wait(5000);
    cy.get('#student_first_name').type('ross');
    cy.get('#student_last_name').type('sant');
    cy.get('#add_student_gender').select('M');
    cy.get('#add_student_gender').select('F');
    cy.get('#add_student_free_school_meals').select('N');
    cy.get('#add_student_free_school_meals').select('Y');
    cy.get('#add_student_free_school_meals').select('Unknown');
    cy.get('#add_student_special_educational_needs').select('N');
    cy.get('#add_student_special_educational_needs').select('Y');
    cy.get('#add_student_grade').select('Year 1');
    cy.get('#add_student_teacher').type('Node');
    cy.get('#add_student_accessibility').select('DYS');
    cy.get('twl-filter-students input').eq(0).type('ross');
    cy.get('tbody').contains('tr', 'ross').then(tableRow => {
    cy.wrap(tableRow).find('a').click()
    cy.get('twl-image-button button')
    cy.get('.button-left').get('button').eq(2).click()
    cy.get('.button-left').get('button').eq(2).click()
    cy.get('.button-left').get('button').eq(2).click()
    cy.get('.button-left').get('button').eq(2).click()
    cy.get('.button-left').get('button').eq(2).click()
    cy.get('.button-left').get('button').eq(2).click()
    cy.get('.button-right').get('button').eq(3).click()
    cy.get('.button-right').get('button').eq(3).click()
    cy.get('.button-right').get('button').eq(3).click()
    cy.get('.button-right').get('button').eq(3).click()
    cy.get('.button-right').get('button').eq(3).click() 
    })
}
describe('Our first suite',() => {
    before(function () {
        cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata;
        })
    })
    beforeEach(() => {
        addNewMember(this.testdata);
      })
it.only('Should Add New member', function(){

})

})





 




  

