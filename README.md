<h3 align="center"> Desafion Linx </h3>


<h3> Descrição </h3>
Criação de duas api e uma aplicação front end

<h3> Requerimentos </h3>
- MongoDB <a href="https://www.mongodb.com/try/download/community">Vise o site</a>
- NodeJs  <a href="https://nodejs.org/en/"> Vise o site </a>
 
 
<h2> API - CATÁLOGO </h2>

<h3> Descrição </h3>
Tem como objetivo retornar um produto pelo seu <b> id </b>

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


# Front End
## Ferramenta utilizadas
- HTML
- CSS
- JavaScript
Consome os dados fornecidos pela segunda api <b> API DE RECOMENDAÇÕES </b>.

Duas listas com produtos de duas categorias:
 - Produtos mais vendidos
 - Produtos que mais baixaram o preço



<h2> Dificuldades </h2>

<h2> Funcionamento </h2>
Etapa 1:
- A api de catálogo deve está rodando
 - Acesse o diretório api_catalogo digite no terminal <b> npm start </b>

Etapa 2:
- A api de recomendações deve está rodando
 - Acesse o diretório api_recomendacoes digite no terminal <b> npm start </b>

Etapa 3:
- Executar aplicação front-end
 - Acesse fontend e abra no navegador o arquivo index.html
