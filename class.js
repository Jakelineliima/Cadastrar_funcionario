// Funcionario
class Funcionario {
  constructor(nome, idade, cargo, turno) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.turno = turno;
  }

  //  Apresentação
  seApresentar() {
    return `Meu nome é ${this.nome} tenho ${this.idade} anos e trabalho como ${this.cargo} no periodo ${this.turno}.`;
  }
  trabalhar() {
    return `${this.nome} está trabalhando como ${this.cargo} no turno  ${this.turno}.`
  }
}
//  Gerente vinculado ao funcionario
class Gerente extends Funcionario {
  constructor(nome, idade, cargo, turno, departamento) {
    super(nome, idade, cargo, turno);
    this.departamento = departamento;

  }
  gerenciar() {
    return `${this.nome} é gerente do departamento ${this.departamento}\n`
  }
}

// Desenvolvedor vinculado ao funcionario
class Programador extends Funcionario {
  constructor(nome, idade, cargo, turno, linguagem) {
    super(nome, idade, cargo, turno)
    this.linguagem = linguagem

  }
  programar() {
    return `O ${this.nome} está programando em ${this.linguagem} no turno ${this.turno}`
  }
}

class Designer extends Funcionario {
  constructor(nome, idade, cargo, turno) {
    super(nome, idade, cargo, turno)

  }
  design() {
    return `${this.nome} trabalha como ${this.turno}`

  }
}



function exibirErro(mensagem) {
  const divErro = document.getElementById('erro');
  divErro.innerHTML = `<p style="color: red; text-align: center;">${mensagem}</p>`;
}

function exibirResultado(mensagem) {
  const divResultado = document.getElementById('resultado');
  divResultado.innerHTML = `<p>${mensagem}</p>`;
}

function criarFuncionario() {
  try {

    // Limpar mensagens anteriores
    document.getElementById('erro').innerText = '';
    document.getElementById('resultado').innerText = '';

    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const cargo = document.getElementById('cargo').value
    const turno = document.getElementById('turno').value
    const departamento = document.getElementById('departamento').value
    const linguagem = document.getElementById('linguagem').value
    if (!nome || !idade || !cargo || !turno) {
      throw new Error("Prencha todos os campos por favor")
    }

    let funcionario;

    if (cargo === 'Gerente') {
      if(departamento === 'nenhumdepartamento'){
        throw new Error("O campo 'Departamento' deve ser preenchido para Gerentes.");
      }
      funcionario = new Gerente(nome, idade, cargo, turno, departamento);
    } else if (cargo === 'Programador') {
      if (linguagem === 'no_prog') {
        throw new Error("O campo 'Linguagem' deve ser preenchido para Desenvolvedores.");
      }
      funcionario = new Programador(nome, idade, cargo, turno ,linguagem );
    } else if (cargo === 'Designer') {
      funcionario = new Designer(nome, idade, cargo, turno);
    }

    let resultado = funcionario.seApresentar() + '<br>';
    resultado += funcionario.trabalhar() + '<br>';

    // Se o funcionário for Programador, exibe a linguagem
    if (funcionario instanceof Programador) {
      resultado += funcionario.programar() + '<br>';
    } else if (funcionario instanceof Gerente) {
      resultado += funcionario.gerenciar() + '<br>';
    } else if (funcionario instanceof Designer) {
      resultado += funcionario.design() + '<br>';
    }

    exibirResultado(resultado);

  } catch (erro) {
    exibirErro(erro.message);
  }
}
