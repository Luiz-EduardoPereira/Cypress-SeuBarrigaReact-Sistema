const faker = require("faker-br")

const usuario = {
    nome: faker.name.firstName()+" "+faker.name.lastName(),
    email: faker.internet.email(),
    senha: faker.internet.password()
}

export default {
        usuario:{
            nome: faker.name.firstName()+" "+faker.name.lastName(),
            email: faker.internet.email(),
            senha: faker.internet.password(),
            emailInvalido: faker.name.firstName()+faker.name.lastName()+".com"
    },
        cadastro: {
            msgUsuarioCadastradoComSucesso: "Usuário adicionado com sucesso"
    },
        conta: {
            nomeConta: "Itaú",
            nomeContaAlterada: "Itaú - 6226",
            msgContaInseridaComSucesso: "Conta inserida com sucesso!",
            msgContaAtualizadaComSucesso: "Conta atualizada com sucesso!"
    },
        movimentacao: {
            descricaoReceitaSalario: "Salário",
            descricaoReceitaPix: "Pix",
            descricaoDespesaCelular: "Celular",
            descricaoDespesaRoupas: "Roupas",
            interessadoDespesa: "Cartão do dia 20",
            valorReceitaSalario: 5000.00,
            valorReceitaPix: 350.00,
            valorDespesaCelular: 250.00,
            valorDespesaRoupas: 400.00,
            msgMovimentacaoInseridaComSucesso: "Movimentação inserida com sucesso!",
            msgMovimentacaoRemovidaComSucesso: "Movimentação removida com sucesso!"

    },
        msgsDeErro: {
            erro400: "Erro: Error: Request failed with status code 400",
            erro401: "Erro: Error: Request failed with status code 401",
            erro500: "Erro: Error: Request failed with status code 500"
    },
        geral: {
            urlDaAplicacao: "https://barrigareact.wcaquino.me/",
            urlDeRegistro: "https://barrigareact.wcaquino.me/registro",
            urlDeLogin: "https://barrigareact.wcaquino.me/login",
            endpointRegistro: "/registro",
            endpointLogin: "/login",
            endpointContas: "/contas",
            endpointMovimentacao: "/movimentacao",
            endpointExtrato: "/extrato",
            endpointReset: "/reset",
            dataTestHome: "menu-home",
            dataTestMovimentacao: "menu-movimentacao",
            dataTestExtrato: "menu-extrato",
            dataTestConfiguracao: "menu-settings"
        }
}