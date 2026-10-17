import conexao from "#/config/db.js";

export default async function cadastrarVendedor(nome, meta_mensal, percentual_base, ativo=true) {
  const query = 'INSERT INTO vendedores (nome, meta_mensal, percentual_base) VALUES (?, ?, ?)';

  const [result] = await conexao.execute(query, [nome, meta_mensal, percentual_base]);

  return result.insertId;
}