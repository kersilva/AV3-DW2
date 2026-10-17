import atualizarVendedor from './database/vendedor/atualizarVendedor.js'
import cadastrarVendedor from './database/vendedor/cadastrarVendedor.js'
import desativarVendedor from './database/vendedor/desativarVendedor.js'
import listarVendedores from './database/vendedor/listarVendedores.js'

import listarVendas from './database/venda/listarVendas.js'
import consultarVendasPorVendedor from './database/venda/consultarVendasPorVendedor.js'
import excluirVenda from './database/venda/excluirVenda.js'
import registrarVenda from './database/venda/registrarVenda.js'

import gerarRelatorioPerformance from './services/gerarRelatorioPerformance.js'

// console.log(cadastrarVendedor('Vinicin', 800, 20))
// console.log(await registrarVenda(2, 1, null, 500, 'PJ'))
// console.log(await listarVendas())
console.log(await gerarRelatorioPerformance('2026-10-16', '2026-10-18'))