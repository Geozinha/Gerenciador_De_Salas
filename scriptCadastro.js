class cadastro {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }
    getNome() {
        return this.nome;
    }
    getSenha() {
        return this.senha;
    }
    getEmail() {
        return this.email;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }

    setSenha(novaSenha) {
        this.senha = novaSenha;
    }
    setEmail(novoEmail) {
        this.email = novoEmail;
    }
    toJson() {
        return JSON.stringify(this);

    }

    static fromJson(dadosJson) {
        try {
            const dados = JSON.parse(dadosJson);
            return Object.assign(new this(), dados);
        } catch (error) {
            throw new Error(`Erro ao converter JSON: ${error.message}`);
        }
    }
}

class cadastroProfessor extends cadastro {
    constructor(nome, email, senha, identificador) {
        super(nome, email, senha)
        this.identificador = identificador;
    }
    getIdentificador() {
        return this.identificador;
    }
    setIdentificador(novoIdentificador) {
        this.identificador = novoIdentificador;
    }
    toJson() {
        return JSON.stringify(this);
    }
    static fromJson(dadosJson) {
        const dados = JSON.parse(dadosJson);
        const cadastroBase = super.fromJson(dadosJson);
        return new cadastroProfessor(cadastroBase.nome, cadastroBase.email, cadastroBase.senha, dados.identificador);
    }
}
class cadastroAluno extends cadastro {
    constructor(nome, email, senha, turma) {
        super(nome, email, senha)
        this.turma = turma;
    }
    getTurma() {
        return this.turma;
    }
    setTurma(novoTurma) {
        this.turma = novoTurma;
    }
    toJson() {
        return JSON.stringify(this);
    }
    static fromJson(dadosJson) {
        const dados = JSON.parse(dadosJson);
        const cadastroBase = super.fromJson(dadosJson);
        return new cadastroAluno(cadastroBase.nome, cadastroBase.email, cadastroBase.senha, dados.turma);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const loginBotaoAluno = document.getElementById('loginBotaoAluno');
    const formularioAluno = document.getElementById('formAluno');
    loginBotaoAluno.addEventListener('click', (e) => {
        checkInputs();
    })
    const loginBotaoProfessor = document.getElementById('loginBotaoProf');
    const formularioProfessor = document.getElementById('formProfessor');
    loginBotaoProfessor.addEventListener('click', (e) => {
        checkInputs();
    })

    //Parte Aluno
    const nomeAluno = document.getElementById('username');
    const turmaAluno = document.getElementById('turma');
    const emailAluno = document.getElementById('email');
    const senhaAluno = document.getElementById('password');

    function checkInputs() {

        const nomeValue = nomeAluno.value;
        const turmaValue = turmaAluno.value;
        const emailValue = emailAluno.value;
        const senhaValue = senhaAluno.value;

        if (nomeValue === '') {
            setErrorFor(nomeAluno, "O nome completo é obrigatório");
            formIsValid = false;
        } else {
            setSucessoFor(nomeAluno);
        }

        if (emailValue === '') {
            setErrorFor(emailAluno, "O email é obrigatório");

        } else if (!checkEmail(emailValue)) {
            setErrorFor(emailAluno, "Por favor, insira um email válido.");
        } else {
            setSucessoFor(emailAluno);
        }
        if (senhaValue === '') {
            setErrorFor(senhaAluno, "A senha é obrigatória.");
        } else if (senhaValue.length < 6) {
            setErrorFor(senhaAluno, "A senha precisa ter no mínimo 6 caracteres.");

        } else {
            setSucessoFor(senhaAluno);
        }

        const formControle = formularioAluno.querySelectorAll('form');

        const formIsValid = [...formControle].every(formControle => {
            return (formControle.className === 'campo preenchido com sucesso');
        })
        if (formIsValid) {
            let aluno = new cadastroAluno(nomeValue, emailValue, senhaValue, turmaValue);
            const listaCadastroAluno = JSON.parse(localStorage.getItem('listaCadastroAluno') || '[]');
            let alunoJSON = aluno.toJson();
            let novoAluno = cadastroAluno.fromJson(alunoJSON);
            listaCadastroAluno.push(novoAluno);
            localStorage.setItem('listaCadastroAluno', JSON.stringify(listaCadastroAluno));
        }

        //Parte Professor

        const emailProfessor = document.getElementById('emailProfessor');
        const identificadorProfessor = document.getElementById('identificadorProfessor');
        const nomeProfessor = document.getElementById('usernameProfessor');
        const senhaProfessor = document.getElementById('passwordProfessor');


        const nomeProfessorValue = nomeProfessor.value;
        const identificadorValue = identificadorProfessor.value;
        const emailProfessorValue = emailProfessor.value;
        const senhaProfessorValue = senhaProfessor.value;

        if (nomeProfessorValue === '') {
            setErrorFor(nomeProfessor, "O nome completo é obrigatório");
        } else {
            setSucessoFor(nomeProfessor);
        }

        if (emailProfessorValue === '') {
            setErrorFor(emailProfessor, "O email é obrigatório");
        } else if (!checkEmail(emailProfessorValue)) {
            setErrorFor(emailProfessor, "Por favor, insira um email válido.");
        } else {
            setSucessoFor(emailProfessor);
        }

        if (senhaProfessorValue === '') {
            setErrorFor(senhaProfessor, "A senha é obrigatória.");
        } else if (senhaProfessorValue.length < 6) {
            setErrorFor(senhaProfessor, "A senha precisa ter no mínimo 6 caracteres.");
        } else {
            setSucessoFor(senhaProfessor);
        }
        const formrControle = formularioProfessor.querySelectorAll('form');

        const formEValid = [...formrControle].every(formControle => {
            return (formControle.className === 'campo preenchido com sucesso');
        })
        if (formEValid) {
            let professor = new cadastroProfessor(nomeProfessorValue, identificadorValue, emailProfessorValue, senhaProfessorValue);
            const cadastroProfessorLista = JSON.parse(localStorage.getItem('cadastroProfessorLista') || '[]');
            cadastroProfessorLista.push(professor);
            localStorage.setItem('cadastroProfessorLista', JSON.stringify(cadastroProfessorLista));

            console.log("O formulário está válido!");

        }
    }
    function setErrorFor(input, mensagem) {
        const formcontrol = input.parentElement; //vai retorna a div que é pai do input // form-control é a class da div
        const small = formcontrol.querySelector('small');
        small.innerText = mensagem;
        formcontrol.className = 'form-control error';
    }
    function setSucessoFor(input) {
        const formcontrol = input.parentElement; //vai retorna a div que é pai do input
        formcontrol.className = 'form-control sucess';
    }
    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    }
});
