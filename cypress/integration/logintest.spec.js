
export function login(userId,password){
    cy.visit('/')
    cy.contains('Home').click()
    cy.get('#username').type(`${userId}`);
    cy.get('#password').type(`${password}`);
    cy.get('button').click();
    cy.wait(5000);
}
before(function () {
    cy.fixture('credentials').then(function (testdata) {
        this.testdata = testdata;
    })
})
describe('Our first suite',() => {
    it('Should fail login for wrong username', function(){
    login('abc@gmail.com','ytererer');
    cy.get('p').contains(' Invalid credentials, please try again ');
    });
    it('Should  login for correct credentials', function(){
    login(this.testdata.username,this.testdata.password);
    });

})