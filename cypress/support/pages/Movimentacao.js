const locators = require("../../support/locators").locators
import variaveis from "../variaveis"

class Movimentacao {

    criarReceitaJaRecebida(){
        cy.get(locators.Menu.menu(variaveis.geral.dataTestMovimentacao)).click()
        cy.url().should('include', variaveis.geral.endpointMovimentacao)
        cy.get(locators.Movimentacao.btnSelecionarTipoReceita).click()
        cy.get(locators.Movimentacao.inputDescricao).type(variaveis.movimentacao.descricaoReceitaSalario)
        cy.get(locators.Movimentacao.inputValor).type(variaveis.movimentacao.valorReceitaSalario)
        cy.get(locators.Movimentacao.inputInteressado).type(Cypress.env('login').nome)
        cy.get(locators.Movimentacao.btnSelecionarStatusDeContaPaga).click()
        cy.get(locators.Movimentacao.btnSalvar).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    }

    criarDespesaJaPaga(){
        cy.get(locators.Menu.menu(variaveis.geral.dataTestMovimentacao)).click()
        cy.url().should('include', variaveis.geral.endpointMovimentacao)
        cy.get(locators.Movimentacao.btnSelecionarTipoDespesa).click()
        cy.get(locators.Movimentacao.inputDescricao).type(variaveis.movimentacao.descricaoDespesaCelular)
        cy.get(locators.Movimentacao.inputValor).type(variaveis.movimentacao.valorDespesaCelular)
        cy.get(locators.Movimentacao.inputInteressado).type(variaveis.usuario.nome)
        cy.get(locators.Movimentacao.btnSelecionarStatusDeContaPaga).click()
        cy.get(locators.Movimentacao.btnSalvar).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    }

    criarReceitaPendente(){
        cy.get(locators.Menu.menu(variaveis.geral.dataTestMovimentacao)).click()
        cy.url().should('include', variaveis.geral.endpointMovimentacao)
        cy.get(locators.Movimentacao.btnSelecionarTipoReceita).click()
        cy.get(locators.Movimentacao.inputDescricao).type(variaveis.movimentacao.descricaoReceitaPix+" "+variaveis.usuario.nome)
        cy.get(locators.Movimentacao.inputValor).type(variaveis.movimentacao.valorReceitaPix)
        cy.get(locators.Movimentacao.inputInteressado).type(Cypress.env('login').nome)
        cy.get(locators.Movimentacao.btnSalvar).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    }

    criarDespesaPendenteDePagamento(){
        cy.get(locators.Menu.menu(variaveis.geral.dataTestMovimentacao)).click()
        cy.url().should('include', variaveis.geral.endpointMovimentacao)
        cy.get(locators.Movimentacao.btnSelecionarTipoDespesa).click()
        cy.get(locators.Movimentacao.inputDescricao).type(variaveis.movimentacao.descricaoDespesaRoupas)
        cy.get(locators.Movimentacao.inputValor).type(variaveis.movimentacao.valorDespesaRoupas)
        cy.get(locators.Movimentacao.inputInteressado).type(variaveis.movimentacao.interessadoDespesa)
        cy.get(locators.Movimentacao.btnSalvar).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    }

    removerMovimentacaoDeReceitaPaga(){
        cy.get(locators.Menu.menu(variaveis.geral.dataTestExtrato)).click()
        cy.url().should('include', variaveis.geral.endpointExtrato)
        cy.get(locators.Extrato.btnExcluirReceitaPaga).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.movimentacao.msgMovimentacaoRemovidaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    }

}
export default new Movimentacao();