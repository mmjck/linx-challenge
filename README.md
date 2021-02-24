<h3 align="center"> Desafio Linx </h3>

<h3> Descrição </h3>
Criação de duas api e uma aplicação front end

<h3> Requerimentos </h3>
<a href="https://www.mongodb.com/try/download/community">MongoDB</a>
</br>
<a href="https://nodejs.org/en/"> NodeJs </a>
 
 
<h2> API - CATÁLOGO </h2>

<h3> Descrição </h3>
Recebe um <b> id </b> e retorna um produto, caso ele exista.

<h3> Ferramentas utilizadas </h3>

- MongoDB
- NodeJs
  - Express
  - Mongoose
  - Cors
  - Body-parser

Resposta da api:

- Sucesso
  - Produto não encontrado
  - Id não informado
  - Produto compactado ( format="compact" )
  - Produto completo ( format = "complete")

<b>Obs.</b>:  format vem no body da requisição

- Erro
 - Id não informado
 - Erro durante a consulta ao banco de dados com mensagem de erro


<h2> API - RECOMENDAÇÕES </h2>

<h3 Descrição </h3>

Tem como objetivo retornar duas listas de produtos:
- Produtos mais vendidos
- Produtos que mais baixaram o preço


<h3> Ferramentas utilizadas </h3>

- NodeJs
  - Axios


Resposta da api:
- Sucesso
 - Produto não encontrado
 - Id não informado
 - Produto compactado ( format="compact" )
 - Produto completo ( format = "complete")

<b>Obs.</b>:  format vem no body da requisição

- Erro
  - Id não informado
  - Erro durante a consulta ao banco de dados com mensagem de erro


<h2 Front End </h2>
<h3> Descrição </h3>
Consome os dados fornecidos pela segunda api <b> API DE RECOMENDAÇÕES </b>.


Ferramenta utilizadas
 - HTML
 - CSS
 - JavaScript


Duas listas com produtos de duas categorias:
 - Produtos mais vendidos
 - Produtos que mais baixaram o preço


<h2> Funcionamento </h2>

Etapa 1:

- A api de catálogo deve está rodando
  - Acesse o diretório api_catalogo digite no terminal <b> npm start </b>

Etapa 2:
- A api de recomendações deve está rodando </br>
  - Acesse o diretório api_recomendacoes digite no terminal <b> npm start </b>

Etapa 3:
- Executar aplicação front-end </br>
  - Acesse o diretório fontend/ e abra no seu navegador navegador o arquivo index.html


Dificuldades 
 - No começo optei por utlizar como SGBD o mysql, porém não sei quais seriam as relações entre as tabelas, se estariam corretas e quantas seriam, o que poderia ser custoso uma possível consulta no bando de dados
 - Tive difilculdade no encadeamento das requisições, pois a api de catálogo fornecia apenas um produto por requisição
 - Não entendi o motivo que os produtos que pertenciam a lista de podutos que mais abaixaram o preço tinham o novo preço e o antigo preço iguais. Então optei por não mostrar no front end essa tag de promoção.


