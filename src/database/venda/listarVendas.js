import conexao from "#/config/db.js";

export default async function listarVendedores() {
  const query = 'SELECT * FROM vendas';

  const [result] = await conexao.execute(query);

  return result;
}