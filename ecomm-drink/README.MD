![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

> Front End III

# Aula 16: Mesa de trabalho

Bem-vind@ Houser!! Neste exercício vamos construir nosso próprio **e-commerce** de bebidas. Obviamente, construir um aplicativo inteiro do zero levaria muito tempo, então hoje vamos nos concentrar apenas nas rotas desta aplicação. 
Usaremos o React Router para implementar a navegação entre diferentes URLs, implementando rotas dinâmicas, aninhadas e até mesmo fazendo uso do History API.

## Objetivo

Nesta atividade, trabalharemos na implementação do roteamento para nosso aplicativo React com o React Router. Para que você já possa colocar em prática o que aprendeu hoje, te deixamos este [projeto base](https://github.com/xk08/DigitalHouse-PublicContent/tree/main/FrontEnd3/MesasDeTrabalho/ctd-fe3-aula-16-base-mesa-de-trabalho). 

## Instruções e requisitos de entrega
 * (Clone o projeto e instale as dependências necessárias;
 * Envolva com o BrowserRouter sua aplicação e defina as seguintes rotas:
    * **/home** - Onde devem mostrar uma tabela com todas as bebidas disponíveis retornadas pela API;
    * **/contact** - Onde serão exibidas as informações de contato da empresa;
    * **/beer/:id** - Onde serão exibidas informações específicas de uma cerveja pesquisada por seu “id”.

 * Para a implementação dos Links, você deve criar um componente Navbar e renderizá-lo apenas em uma rota pai. Aninhe as outras rotas para preservar este componente na mudança de URL;
 * src > Beer.jsx
    * Adicione um botão voltar que implemente o Hook useNavigate() e nos retorne à página anterior em que estávamos posicionados.
 * Os detalhes do envio desta atividade, serão apresentados pela equipe docente.

---

 ``screen shots``

## HOME
![image](https://user-images.githubusercontent.com/5773748/204164289-7d381a2c-2f7b-4002-bc9f-8a4398bb2ba2.png)

## CONTATO
![image](https://user-images.githubusercontent.com/5773748/204164355-3a1c436f-29b1-424c-8676-de049e2c94dd.png)

## DETALHE BEER
![image](https://user-images.githubusercontent.com/5773748/204164337-d485b48d-d5b3-459e-ae3a-a274087cdcee.png)

## MOBILE
![image](https://user-images.githubusercontent.com/5773748/204164419-4f737b13-dc83-477d-ac97-7170ff373481.png)

