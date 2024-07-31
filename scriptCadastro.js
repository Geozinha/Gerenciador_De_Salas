class login {
    constructor(email, senha) {
        this.senha = senha;
        this.email = email;

        if (!validarEmail(email)) {
            throw new Error("Email inválido!");
        }
    }
    getSenha() {
        return this.senha;
    }
    getEmail() {
        return this.email;
    }

    setSenha(novaSenha) {
        this.senha = novaSenha;
    }
    setEmail(novoEmail) {
        if (validarEmail(novoEmail)) {
            this.email = novoEmail;
        } else {
            throw new Error("Novo email inválido!");
        }
    }
    toJson() {
        return JSON.stringify(this);
    }
    static fromJson(dadosJson) {
        const dados = JSON.parse(dadosJson);
        return new login(dados.email, dados.senha);
    }
}

const emailAluno = document.querySelector("#emailAluno");
const emailAlunoValido = document.querySelector("#emailAlunoValido");
const senhaAluno = document.querySelector("#senhaAluno");
const senhaAlunoValido = document.querySelector("#senhaAlunoValido");

const emailProfessor = document.querySelector("#emailProfessor");
const emailProfessorValido = document.querySelector("#emailProfessorValido");
const senhaProfessor = document.querySelector("#senhaProfessor");
const senhaProfessorValido = document.querySelector("#senhaProfessorValido");

const emailAlunoIsvalid = false;
const emailProfessorIsvalid = false;

const senhaAlunoIsvalid = false;
const senhaProfessorIsvalid = false;

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

emailAluno.addEventListener('keyup', () => {
    const emailValue = emailAluno.value;
    const isValid = validarEmail(emailValue);
    if (emailValue == isValid) {
        emailAlunoValido.textContent = 'Email inválido!';
        emailAlunoIsvalid = false;
    }
    else {
        emailAlunoValido.textContent = 'Email válido!';
        emailAlunoIsvalid = true;
    }
});

emailProfessor.addEventListener('keyup', () => {
    const emailValue = emailProfessor.value;
    const isValid = validarEmail(emailValue);
    if (emailValue == isValid) {
        emailProfessorValido.textContent = 'Email inválido!';
        emailProfessorIsvalid = false;
    }
    else {
        emailProfessorValido.textContent = 'Email válido!';
        emailProfessorIsvalid = true;
    }
});

senhaAluno.addEventListener('keyup', () => {
    if (senhaAluno.value.length < 6) {
        senhaAlunoValido.textContent = 'Senha inválida!';
        senhaAlunoIsvalid = false;
    }
    else {
        senhaAlunoValido.textContent = 'Senha válida!';
        senhaAlunoIsvalid = true;
    }
});

senhaProfessor.addEventListener('keyup', () => {
    if (senhaProfessor.value.length < 6) {
        senhaProfessorValido.textContent = 'Senha inválida!';
        senhaProfessorIsvalid = false;
    }
    else {
        senhaProfessorValido.textContent = 'Senha válida!';
        senhaProfessorIsvalid = false;
    }
});


function loginAluno() {
    if (emailAlunoIsvalid && senhaAlunoIsvalid) {
        if (typeof localStorage !== 'undefined') {
            try {
                let usuario = new login(emailAluno.value, senhaAluno.value);
                const listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');
                let usuarioJson = usuario.toJson();
                let novoUsuario = login.fromJson(usuarioJson);
                listaUsuario.push(novoUsuario);
                localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
                msgSuccess.textContent = 'Login realizado com sucesso!';
            } catch (error) {
                console.error('Erro ao salvar dados no localStorage:', error);
                msgError.textContent = 'Erro ao realizar login!';
            }
        } else {
            console.error('LocalStorage não suportado pelo navegador!');
            msgError.textContent = 'Seu navegador não suporta localStorage!';
        }
    } else {
        msgError.textContent = 'Email ou senha inválidos!';
    }
}

function loginProfessor() {
    if (emailProfessorIsvalid && senhaProfessorIsvalid) {
        if (typeof localStorage !== 'undefined') {
            try {
                let usuario = new login(emailProfessor.value, senhaProfessor.value);
                const listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');
                let usuarioJson = usuario.toJson();
                let novoUsuario = login.fromJson(usuarioJson);
                listaUsuario.push(novoUsuario);
                localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
                msgSuccess.textContent = 'Login realizado com sucesso!';
            } catch (error) {
                console.error('Erro ao salvar dados no localStorage:', error);
                msgError.textContent = 'Erro ao realizar login!';
            }
        } else {
            console.error('LocalStorage não suportado pelo navegador!');
            msgError.textContent = 'Seu navegador não suporta localStorage!';
        }
    } else {
        msgError.textContent = 'Email ou senha inválidos!';
    }
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
