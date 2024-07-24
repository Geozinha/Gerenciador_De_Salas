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
            return Object.assign(this.prototype.constructor(), JSON.parse(dadosJson))
          } catch (err) {
            console.log("PROCURA MAIS O ERRO")
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
}

document.addEventListener('DOMContentLoaded', function () {
    const loginBotaoAluno = document.getElementById('loginBotaoAluno');
    const formularioAluno = document.getElementById('formAluno');
    loginBotaoAluno.addEventListener('click', (e) => {
        checkInputs();
    })

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
            setErrorFor(nomeAluno, "O nome completo é obrigatório")
        }
        else {
            setSucessoFor(nomeAluno)
        }
        //email
        if (emailValue === '') {
            setErrorFor(emailAluno, "O email completo é obrigatório")
        }
        else if (!checkEmail(emailValue)) {
            setErrorFor(emailAluno, "Por favor, insira um email válido.");
        }
        else {
            setSucessoFor(emailAluno)
        }
        //senha
        if (senhaValue === "") {
            setErrorFor(password, "A senha é obrigatória.");
        } else if (senhaValue.length < 6) {
            setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.");
        } else {
            setSucessoFor(password);
        }

        const formControle = formularioAluno.querySelectorAll('form');

        const formIsValid = [...formControle].every(formControle => {
            return (formControle.className === 'campo sucess');
        })

        if (formIsValid) {
            let aluno = new cadastro(nomeValue, turmaValue, emailValue, senhaValue);
            const listaCadastroAluno = JSON.parse(localStorage.getItem('listaCadastroAluno') || '[]');
            let alunoJSON = aluno.toJson();
            let novoAluno = cadastro.fromJson(alunoJSON);
            listaCadastroAluno.push(novoAluno);
            localStorage.setItem('listaCadastroAluno', JSON.stringify(listaCadastroAluno));
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


document.addEventListener('DOMContentLoaded', function () {
    const loginBotaoProfessor = document.getElementById('loginBotaoProf');
    const formularioProfessor = document.getElementById('formProfessor');
    loginBotaoProfessor.addEventListener('click', function (event) {
        checkInputs();
    });

    const emailProfessor = document.getElementById('emailProfessor');
    const identificadorProfessor = document.getElementById('identificadorProfessor');
    const nomeProfessor = document.getElementById('usernameProfessor');
    const senhaProfessor = document.getElementById('passwordProfessor');

    function checkInputs() {
        const nomeProfessorValue = nomeProfessor.value;
        const identificadorValue = identificadorProfessor.value;
        const emailProfessorValue = emailProfessor.value;
        const senhaProfessorValue = senhaProfessor.value;

        let formIsValid = true;

        if (nomeProfessorValue === '') {
            setErrorFor(nomeProfessor, "O nome completo é obrigatório");
            formIsValid = false;
        } else {
            setSucessoFor(nomeProfessor);
        }

        if (emailProfessorValue === '') {
            setErrorFor(emailProfessor, "O email é obrigatório");
            formIsValid = false;
        } else if (!checkEmail(emailProfessorValue)) {
            setErrorFor(emailProfessor, "Por favor, insira um email válido.");
            formIsValid = false;
        } else {
            setSucessoFor(emailProfessor);
        }

        if (senhaProfessorValue === '') {
            setErrorFor(senhaProfessor, "A senha é obrigatória.");
            formIsValid = false;
        } else if (senhaProfessorValue.length < 6) {
            setErrorFor(senhaProfessor, "A senha precisa ter no mínimo 6 caracteres.");
            formIsValid = false;
        } else {
            setSucessoFor(senhaProfessor);
        }

        if (formIsValid) {
            let professor = new cadastro(nomeProfessorValue, identificadorValue, emailProfessorValue, senhaProfessorValue);
            const cadastroProfessorLista = JSON.parse(localStorage.getItem('cadastroProfessorLista') || '[]');
            cadastroProfessorLista.push(professor);
            localStorage.setItem('cadastroProfessorLista', JSON.stringify(cadastroProfessorLista));

            console.log("O formulário está válido!");
        }
    }
    

    function setErrorFor(input, mensagem) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = mensagem;
        formControl.className = 'form-control error';
    }

    function setSucessoFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});
