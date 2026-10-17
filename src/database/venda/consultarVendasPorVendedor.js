import conexao from "#/config/db.js";

export default async function consultarVendasPorVendedor(id) {
  const query = 'SELECT * FROM vendas WHERE id_venda = ?';

  const [result] = await conexao.execute(query, [id]);

  return result;
}