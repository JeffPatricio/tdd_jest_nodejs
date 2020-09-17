const usuarios = require('../../src');

describe('Validações de cadastro de Usuários', () => {

  it('O formato de usuário abaixo deve ser inválido', () => {
    expect(usuarios.cadastrarUsuario({ email: 'teste@email.com', nome: 'Nome de teste' })).toEqual("Usuário não possui todos os dados obrigatórios");
  });

  it('O formato de email abaixo deve ser inválido', () => {
    expect(usuarios.cadastrarUsuario({ email: 'teste@com', senha: '123456', nome: 'Nome de teste' })).toEqual("O E-mail informado não é válido");
  });

  it('O email abaixo já está cadastrado', () => {
    usuarios.cadastrarUsuario({ nome: 'Fasam', email: 'fasam@fasam.com', senha: '123456' });
    expect(usuarios.cadastrarUsuario({ nome: 'Fasam', email: 'fasam@fasam.com', senha: '123456' })).toEqual("O E-mail informado já existe");
  });

  it('A senha abaixo é inválida', () => {
    expect(usuarios.cadastrarUsuario({ nome: 'Fasam', email: 'andre@fasam.com', senha: '12345' })).toEqual("A senha deve conter no minimo 6 caracteres");
  });

  it('O usuário abaixo deve ser cadastrado com sucesso', () => {
    expect(usuarios.cadastrarUsuario({ nome: 'TesteComSucesso', email: 'testecomsucesso@fasam.com.br', senha: '123456' })).toEqual("Ok");
  });
});