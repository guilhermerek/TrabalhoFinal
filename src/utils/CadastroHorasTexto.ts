const secoes = [
    {
      id: 1,
      titulo: "Digite a modalidade para lançar no sistema:",
      entradaTexto: [
          {
          id: 1,
          label: "Modalidade:",
          placeholder: "(Eventos, cursos, congressos e etc...)"
        },        
      ],
    checkbox: []
    },
    {
      id: 2,
      titulo: "Digite as informações do certificado:",
      entradaTexto: [
          {
          id: 1,
          label: "Nome do evento:",
          placeholder: "Digite o nome do evento...",
      },
      {
          id: 2,
          label: "Carga horária: ",
          placeholder: "Digite as horas obtidas.",
      },
      {
        id: 3,
        label: "Período:",
        placeholder: "Data: de dd/mm/aa a dd/mm/aa."
      },
      {
        id: 4,
        label: "Modalidade do evento:",
        placeholder: "On-line ou Presencial."
      },
      {
        id: 5,
        label: "Nome do responsável pelo certificado:",
        placeholder: "Digite o nome do resp."
      },
      {
        id: 6,
        label: "Informe o código do certificado.",
        placeholder: "Digite o código, caso possua."
      },
  ],
  checkbox: []
  },
  {
    //necessario inserir lista mostrando o que foi preenchido, para fazer um botão: "As informações estão corretas: checkbox para dar ok e botao concluir"
    id: 3,
    titulo: "Indique se a unidade esta ativa ou não",
    entradaTexto: [],
    checkbox: [
        {
        id: 1,
        value: "Unidade ativa!"
    },
    {
        id: 2,
        value: "Unidade inativa!"
    },
]
}
]
export {secoes}