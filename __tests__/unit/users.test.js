const usuarios = require('../../src');

describe('Validações de dados dos Usuários', () => {

  it('Os formatos de email abaixo devem ser validos', () => {
    expect(usuarios.emailValido('jefferson@gmail.com')).toBe(true);
    expect(usuarios.emailValido('testes@gmail.net')).toBe(true);
    expect(usuarios.emailValido('vaidarcertoesseteste@fasam.com.br')).toBe(true);
  });

  it('Os formatos de email abaixo devem ser inválidos', () => {
    expect(usuarios.emailValido('jefferson.com')).toBe(false);
    expect(usuarios.emailValido('jefferson@gmail')).toBe(false);
    expect(usuarios.emailValido('@fasam.com')).toBe(false);
    expect(usuarios.emailValido('')).toBe(false);
  });

  it('Os formatos de usuarios abaixo devem ser invalidos', () => {
    expect(usuarios.dadosObrigatoriosValidados({ nome: 'Jefferson' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ nome: '' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ email: '' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ email: 'teste@email.com' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ senha: '12werrd' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ senha: '' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ nome: 'teste', email: 'email@teste.com' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ nome: 'teste', senha: '12345' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ email: 'senhafacil@email.com', senha: '12345' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ email: '', senha: '' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ email: '', nome: '' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ senha: '', nome: '' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ email: '', senha: '', nome: '' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ email: 'teste@email.com', senha: '12345', nome: '' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ email: 'teste@email.com', senha: '', nome: 'Nome de teste' })).toBe(false);
    expect(usuarios.dadosObrigatoriosValidados({ email: '', senha: '', nome: 'Nome de teste' })).toBe(false);
  });

  it('O formato de usuário abaixo deve ser válido', () => {
    expect(usuarios.dadosObrigatoriosValidados({ email: 'teste@email.com', senha: '12345', nome: 'Nome de teste' })).toBe(true);
  });

});