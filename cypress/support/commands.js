// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import { locators } from "./locators"
import variaveis from "./variaveis"

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('ResetarAmbiente', () => {
    cy.get(locators.Menu.menu(variaveis.geral.dataTestConfiguracao)).click()
    cy.get(locators.SubMenu.subMenu(variaveis.geral.endpointReset)).should('be.visible').click()
    cy.get(locators.Mensagem.identificarToast).should('be.visible')
    cy.get(locators.Mensagem.fecharToast).click()
    cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    cy.get(locators.Menu.menu(variaveis.geral.dataTestExtrato)).click()
    cy.get(locators.Extrato.btnExcluirTodasMovimentacoes).click({multiple: true})
    cy.get(locators.Menu.menu(variaveis.geral.dataTestConfiguracao)).click()
    cy.get(locators.SubMenu.subMenu(variaveis.geral.endpointContas)).click()
    cy.get(locators.Configuracao.btnExcluirTodasContas).click({multiple: true})
    cy.get(locators.Mensagem.identificarToast).should('be.visible')
    cy.get(locators.Mensagem.fecharToast).click({multiple: true})
    cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
})