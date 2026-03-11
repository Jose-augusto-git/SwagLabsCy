export class LoginPage {

    campoUsuario(){
        cy.get('#user-name').type('standard_user')
        
    }

    campoUsuarioInvalido(){
        cy.get('#user-name').type('standard')

    }

    campoSenha(){
        cy.get('#password').type('secret_sauce')

    }

    campoSenhaInvalida(){
        cy.get('#password').type('secret')

    }


    botaoLogin(){
        cy.get('#login-button').click()

    }

    verificacaoAcessoSite(){
        cy.location('pathname').should('eq', '/inventory.html')

    }

    mensagemErroUsarioSenhaInvalido(){
        cy.get('.error-message-container').last()
        .should('be.visible')
        .invoke('text')
        .should('match',/Epic sadface: Username and password do not match any user in this service/i)

    }

    mensagemErroCamposUsuarioVazios(){
        cy.get('.error-message-container').last()
        .should('be.visible')
        .invoke('text')
        .should('match',/Epic sadface: Username is required/i)
    }


    mensagemErroCamposSenhaVazios(){
        cy.get('.error-message-container').last()
        .should('be.visible')
        .invoke('text')
        .should('match',/Epic sadface: Password is required/i)
    }



    
}
