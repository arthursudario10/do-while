let senhaCorreta = 211008;
let senhaUsuario;

do {
    senhaUsuario = Number(prompt("Digite a senha"));
    if (senhaUsuario !== senhaCorreta) {
        alert("Senha incorreta!\nDigite uma nova senha");
    }
} while (senhaUsuario !== senhaCorreta);

alert("Acesso permitido");