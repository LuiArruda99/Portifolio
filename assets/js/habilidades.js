const skills = document.querySelectorAll('.skill-box')
const descricao = document.querySelector('.texto-descricao')
const sobreSkill = [
  '<p>HTML</p> <br> <p>A sigla HTML significa Linguagem de Marcação de Hipertexto. Ou seja, o HTML não é considerado uma linguagem de programação. Ele indica onde cada elemento de texto estará estruturando e será mostrado no site ou aplicativo. O HTML é a linguagem de marcação mais usada no mercado.</p> <br>',
  '<p>CSS</p> <br> <p>O CSS é uma linguagem de design gráfico escrita dentro do código HTML de um site e que permite criar páginas de forma mais precisa, além de aplicar estilos, como cores, margens, formas, tipos de letras etc.</p> <br>',
  '<p>JavaScript</p> <br> <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p> <br>',
  '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
  '<p>Styled Components</p> <br> <p>É uma biblioteca (lib) que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.</p> <br>',
  '<p>Sass</p> <br> <p>É uma linguagem de folhas de estilo. Basicamente o Sass potencializa o CSS.</p> <br>',
  '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
  '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
]
const dataInicio = [
  new Date(2021, 10, 1).getTime(), // 0
  new Date(2021, 10, 1).getTime(), // 1
  new Date(2022, 0, 1).getTime(), // 2
  new Date(2022, 3, 1).getTime(), // 3
  new Date(2022, 3, 1).getTime(), // 4
  new Date(2022, 1, 1).getTime(), // 5
  new Date(2021, 11, 1).getTime(), // 6
  new Date(2021, 11, 1).getTime() // 7
]
const dataHoje = new Date().getTime()

skills.forEach((elemento, index) => {
  let index1 = index
  let elemento1 = elemento
  elemento.addEventListener('mouseover', evento => {
    let tempo = 'mês'
    let tempoDeExperiencia = Math.round(
      (dataHoje - dataInicio[index1]) / (1000 * 60 * 60 * 24 * 30)
    )
    if (tempoDeExperiencia > 1) tempo = 'meses'
    descricao.innerHTML = `<p>${sobreSkill[index1]} </p>`
  })
  elemento.addEventListener('mouseout', (evento, elemento) => {
    descricao.innerHTML =
      '/* Passe o mouse por cima de alguma habilidade para ler a descrição */'
  })
})
