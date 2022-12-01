> Front End III
# Aula 19: Mesa de trabalho

Olá Houser!! Como você já sabe, algo comum em páginas web, além do tema (claro ou escuro) é a possibilidade de escolher o idioma em que o site será apresentado. Nesta mesa de trabalho, convidamos você a desenvolver um contexto global que gerenciará os diferentes idiomas de um determinado projeto React.

## Importante
**<ins>DICA</ins>** - Respeite o encadeamento das tarefas: comece trabalhando a partir de context.js, depois App.jsx e termine com os componentes (Navbar e Body) para facilitar seu entendimento do fluxo de execução.

Para que você já possa começar a praticar, te deixamos este [projeto](https://github.com/xk08/DigitalHouse-PublicContent/tree/main/FrontEnd3/MesasDeTrabalho/ctd-fe3-aula-19-base-mesa-de-trabalho) base criado com o ViteJS. 

## Instruções e requisitos de entrega:
  - Clone o projeto base do GitHub e instale as dependências;
  - O projeto possui uma pasta (languages) com diferentes idiomas, utilize: português e inglês;
  - Context.js:
    - Crie o contexto e preencha o objeto de idiomas.
  - App.jsx:
    - Crie a função que modifica o valor do idioma atual pelo novo idioma selecionado;
    - No retorno, use o LanguageContext com o provider.
  - Navbar.jsx e Body.jsx:
    - Implemente o useContext() nos locais onde ele será necessário;
    - Modifique os valores fixos para os novos valores obtidos via contexto global(veja no console.log para a chave de cada elemento).
  - Os detalhes do envio desta atividade, serão apresentados pela equipe docente.
  
  ---
  
  SAMPLE:
  
  ![exemplo](https://raw.githubusercontent.com/EverSilverio/DH_FrontEnd_III/main/aula-19-mesa-de-trabalho/sample/screen_shot.gif)
