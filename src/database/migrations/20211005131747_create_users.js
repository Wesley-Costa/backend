
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.string('id').primary();
    table.string('email').notNullable();
    table.string('senha').notNullable();
    table.string('nome').notNullable();
    table.string('sobrenome').notNullable();
    table.integer('telefone').notNullable();
    table.string('funcao').notNullable();
    table.date('dataCadastro');
    table.string('imagem');
    table.string('status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
