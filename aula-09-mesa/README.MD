# Front End III
## Aula 9: Prática Integradora

### Grupo
    Luiz Espicalsky
    Vanessa Fernandes
    Caroline Machado
    Cristian fernandes    
    Felipe Lopes
    Everton Silverio



Olá Houser, tudo bem com você? Esta atividade tem como objetivo aprimorar os seus conhecimentos em estados e formulários.
Observações:

No Playground, você encontra informações detalhadas sobre a utilização de estados useState() e também sobre a implementação de formulários no ReactJS.

Você também pode consultar as seguintes documentações:

Usando o State do Hook: https://pt-br.reactjs.org/docs/hooks-state.html

Formulários em React: https://pt-br.reactjs.org/docs/forms.html

### Instruções:

Nesta atividade, você deverá implementar um sistema de cadastro para as notas das provas dos alunos nas disciplinas de Banco de dados, Desenvolvimento Front-end e Desenvolvimento Back-end, conforme imagem abaixo:
![image](https://user-images.githubusercontent.com/5773748/200445067-6de3e308-0f1a-499e-aced-3d3fdd4bd49e.png)


O formulário conterá dois campos, um do tipo select para o usuário selecionar a disciplina e outro do tipo input para o usuário adicionar a respectiva nota. Após o preenchimento dos campos e o clique no botão Salvar, os dados da tabela deverão ser atualizados.

O formulário deve conter as seguintes validações:
O usuário só poderá selecionar as disciplinas listadas na tabela (caso contrário, informar que a disciplina selecionada não é válida e desabilitar o botão Salvar);
As notas informadas devem estar no intervalo de 0 a 10 (deve haver uma validação para o usuário não informar notas não numéricas e também para não haver campo vazio.)
