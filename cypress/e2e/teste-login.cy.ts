import { URL_LOGIN } from "../page/url-login";
import { LoginPage } from "../page/loginPage";

const loginPage = new LoginPage()

beforeEach(() => {
    cy.visit(URL_LOGIN)
})

describe('Realizando teste de login (Sucesso)', () => {

  it('CT01 - Informar usuário e senha válidos.', () => {
    loginPage.campoUsuario()
    loginPage.campoSenha()
    loginPage.botaoLogin()
    loginPage.verificacaoAcessoSite()

  })

})

describe('Realizando teste de login (Falha)', () => {

  it('CT02 - Informar usuário inválida e senha valida.', () => {
    loginPage.campoUsuarioInvalido()
    loginPage.campoSenha()
    loginPage.botaoLogin()
    loginPage.mensagemErroUsarioSenhaInvalido()

  })

  it('CT03 - Informar usuário válido e senha inválida.', () => {
    loginPage.campoUsuario()
    loginPage.campoSenhaInvalida()
    loginPage.botaoLogin()
    loginPage.mensagemErroUsarioSenhaInvalido()
    
  })

  it('CT04 - Deixar os campos de usuário e senha em branco.', () => {
    loginPage.botaoLogin()
    loginPage.mensagemErroCamposUsuarioVazios()
    
  })

  it('CT05 - Informar usuário validado e não informar a senha.', () => {
    loginPage.campoUsuario()
    loginPage.botaoLogin()
    loginPage.mensagemErroCamposSenhaVazios()
    
  })

   it('CT06 - Não informar o usuário e informar a senha correta', () => {
    loginPage.campoSenha()
    loginPage.botaoLogin()
    loginPage.mensagemErroCamposUsuarioVazios()
    
  })

  

})