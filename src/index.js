const usuarios = [];

const emailValido = (email) => (
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email)
);

const dadosObrigatoriosValidados = (usuario) => {
  return !!usuario.nome && !!usuario.senha && !!usuario.email;
};

const cadastrarUsuario = (usuario) => {
  const isValidData = dadosObrigatoriosValidados(usuario);
  if (!isValidData) return "Usuário não possui todos os dados obrigatórios";

  const isValidEmail = emailValido(usuario.email);
  if (!isValidEmail) return "O E-mail informado não é válido";

  const emailExists = usuarios.some(({ email }) => email === usuario.email);
  if (emailExists) return "O E-mail informado já existe";

  const isValidPassword = usuario.senha.length >= 6;
  if (!isValidPassword) return "A senha deve conter no minimo 6 caracteres";

  usuarios.push(usuario);
  return "Ok";
};

module.exports = {
  emailValido,
  dadosObrigatoriosValidados,
  cadastrarUsuario
};