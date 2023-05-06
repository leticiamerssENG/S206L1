/// <reference types="cypress"/>>

describe ('Criando cenário de teste para o site globalsqa', () => {

  it('Caso de teste: Registrando um usuário no site com sucesso', () =>{     // Caso de teste // .skip o cypress ignora e teste a partir dos demais
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') //visita pagina
    cy.get('.btn-link').click() // Clica no botao 'Register'
    cy.get('#firstName').type('inatel') // Preenche campo 'First Name'
    cy.get('#Text1').type('inatel')
    cy.get('#username').type('inatel')
    cy.get('#password').type('inatel')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful') // contain.text - o texto deve estar contido, mas, pode haver mais coisas escrito
  })

  it('Caso de teste: Registrando um usuário no site com falha (faltando senha)', () =>{     // Caso de teste 2
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register') //visita pagina
    cy.get('#firstName').type('inatel') // Preenche campo 'First Name'
    cy.get('#Text1').type('inatel')
    cy.get('#username').type('inatel')
    cy.get('#password').type('inatel')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required') // have.text - deve conter apenas o texto referenciado (1ª assertiva)
    cy.get('.btn-primary').should('be.disabled') // (2ª assertiva)
  })

  it('Caso de teste: Realizando login com sucesso', () => {

    let info = criarUsuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })

  it('Caso de teste: Deletando um usuário com sucesso', () => {

    let info = criarUsuario()
    cy.login(info[0], info[1])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.login(info[0], info[1]) 
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')   
  })

  // Caso de teste login com falha (senha incorreta)
  it('Caso de teste: Realizando login com falha (senha incorreta)', () => {

    login_try()
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')
    
  })


})

function criarUsuario(){

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let user = horas + minutos + seg + 'Id'
  let senha = horas + minutos + seg + 'senha'
  let userInfo = [user, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login') //visita pagina
  cy.get('.btn-link').click() // Clica no botao 'Register'
  cy.get('#firstName').type(user) // Preenche campo 'First Name'
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userInfo
}

function login_try(){
  
  let info = criarUsuario()
  cy.get('#username').type(info[0])
  cy.get('#password').type(info[1] + 'teste')
  cy.get('.btn-primary').click()
}