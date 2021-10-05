
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains refresh button', ()=>{
            cy.get('#restart').should('be.visible');
        });
    });

    describe('click on the button subtracts remaining guesses', ()=>{
        it('lower remaining guesses by one each time', () => {
            cy.get('#submit').click();
            cy.get('#result').should('be.visible');
        });
    });
});