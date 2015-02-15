---
layout: post
title:  "Criando serviço RestFull de forma rapida com Express.js"
date:   2015-02-12 15:33:36
description: "Criando serviço RestFull de forma rapida com Express.js"
category: node.js
gplus-username: FábioElísio
twitter-username: felisio
facebook-author: fabio.elisio
tags:
- node.js
- javascript
- express.js

github: "felisio"
author-name: "Fábio Elisio"
image: '/assets/img/criando-servico-restfull-de-forma-rapida-com-expressjs.jpg'
---

![javascript](/assets/img/criando-servico-restfull-de-forma-rapida-com-expressjs.jpg)

O intuito desse tutorial é descrever como gerar rotas padrão RestFull de uma forma rápida usando Express.js 

>Para este tutorial estamos usando o express.js versão 4.8

Levando em conta que já temos o Node.js instalado no maquina para instalar o express basta utilizar o npm:

    npm install express -g


Lembrando que -g irá fazer o express ficar instalado globalmente no seu node.js

Agora iremos criar um projeto node. Com a pasta do projeto já criada basta acessar via terminal(ou cmd se for windows) e digitar:

	npm init

O instalador ira fazer algumas perguntas como Nome do projeto, versão, descrição, arquivo principal, repositório GIT, autor, tipo da licença... Após da 'enter' em tudo o npm pede a sua confirmação, só precisar colocar 'yes' e esta criado o arquivo package.json.

no fim nosso arquivo package.json deve ficar assim:
{% highlight javascript %}
{
	"name": "testExpress",
	"version": "0.0.0",
	"description": "",
	"main": "server.js",
	"scripts": {
	  "test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "",
	"license": "ISC"
}
{% endhighlight %}

Para incluir o express no seu projeto digite o install com a opção --save, assim:

	npm install express --save

ao ser instalado ele automaticamente ira aparecer no seu package.json dentro das dependências
{% highlight javascript %}
"dependencies": {
	"express": "^4.8.8",
}
{% endhighlight %}
como pode ser notado o nome do nosso arquivo principal se chama server.js vamos abri-lo e começar a editar.

Primeiramente vamos importar o nosso http:
{% highlight javascript %}
	var http = require('http');
{% endhighlight %}

>Lembrando que o node usa por padrão o CommonJS para criação de modulos

Todas as configurações do express irão ficar em um arquivo separado, por isso crie uma pasta chamada ***conf*** e dentro dele um arquivo chamado express.js

Na próxima linha vamos chamar esse arquivo express:
{% highlight javascript %}
	var app = require('./config/express')();
{% endhighlight %}

Agora iremos criar o servidor passando a porta e retornando um console log mostrando qual porta foi conectada.
{% highlight javascript %}
	http.createServer(app).listen(app.get('port'), function () {
     console.log('Express excutando na porta:', app.get('port'));
});
{% endhighlight %}
Observe que estamos passando de parâmetro a variável app que por sua vez recebe a pagina express.js então vamos configurar nosso express.js

**Configurando express.js**

Vamos começar importando o express
{% highlight javascript %}
	var express = require('express');
{% endhighlight %}
Agora vamos usar o padrão do node.js para criação de módulos
{% highlight javascript %}
module.exports = function(){
  //criação do modulo
};
{% endhighlight %}
Vamos apenas criar uma variável app que vai receber o express e assim já podemos setar a porta que vamos rodar nossa app:
{% highlight javascript %}
module.exports = function(){
   var app = express();
   app.set('port', 3000);
   return app;
};
{% endhighlight %}
Nessas condições já temos o necessário para "rodar" nosso primeiro exemplo. Lembrando que o foco deste tutorial é a geração de serviços RestFull não vamos falar da parte de view engine e arquivos de visualização.

Primeiro vamos terminar de criar nossa estrutura de pasta. Usaremos o seguinte modelo: criaremos uma pasta chamada **app** na raiz do projeto e dentro dela criaremos as pastas controller, models e routes. Os nomes em si já expressam as suas funcionalidades.
no fim ficamos com estrutura assim
	
	testExpress(raiz)
		|_app
		    |_controllers
		    |_models
		    |_routes
		|_config
		    |_express.js
		server.js
		package.json

**Carregando as dependências**

Para não termos de ficar chamando nossos controladores e rotas com o **`require`** toda vez que precisarmos usar, vamos carregar nossas dependências dinamicamente com o express-load.

Primeiro vamos instalar ele no nosso projeto, no terminal(cmd) digite:
	
	npm install express-load@1.1 --save

Agora vamos carregá-lo dentro do arquivo express.js

{% highlight javascript %}
var load = require('express-load');
{% endhighlight %}
e dentro da função module.exports digite antes do "return app":
{% highlight javascript %}
load('models', {cwd:'app'}).then('controllers').then('routes').into(app);
{% endhighlight %}
A função load carrega automaticamente todos os scripts que estão dentro das pastas models, controllers e routes. Tendo como pasta raiz a app.

Como nem todos os navegadores tem suporte ao RestFull, o express tem um middleware que faz esse gerenciamento para a gente, criando um content-type para os metodos de PUT e DELETE. Ele se chama method-override. Para o seu funcionamento temos que instalar outro middleware. O body-parser que irá parsear as requisições. Agora vamos incluir os dois através do npm:
{% highlight c %}
npm install body-parser@1.6 method-override@2.1 --save
{% endhighlight %}

Com isso iremos incluir mais três linhas no nosso express.js
{% highlight javascript %}
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(require('method-override')());
{% endhighlight %}
Finalmente nosso arquivo express.js ficou assim:

{% highlight javascript %}
module.exports = function () {
  var app = express();
  //setando variaveis de ambiente
  app.set('port',3009);
  //usando middleware para tirar o problema de requisição REST
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  //Carregando modulos dinamicamente
  load('models', {cwd:'app'}).then('controllers').then('routes').into(app);
  return app;
}
{% endhighlight %}
**Criando Controller**

Dentro da pasta controller vamos um cria um arquivo chamado empresa.js que sera o nosso controller de exemplo. Vamos também implementar nosso metodo de lista para ver todos as empresas cadastradas. Nossa estrutura básica deve ficar assim:
{% highlight javascript %}
module.exports = function () {
   var controller = {};

   return controller;
};
{% endhighlight %}
Criaremos agora um array de objetos empresa e o metodo listar empresas que ira retornar esse array. O express por padrão já possui a função res.json() para retornar os dados nesse padrão. Assim nosso controller deve ficar:
{% highlight javascript %}
module.exports = function () {
   var controller = {};
   var empresas = [
      {_id: 1, nome: 'Empresa A', tel: '9982-6747'},
      {_id: 2, nome: 'Empresa B', tel: '9393-7865'},
      {_id: 3, nome: 'Empresa C', tel: '8179-9854'}
    ];

  controller.listaEmpresas = function (req, res) {
  res.json(empresas);
};
  return controller;
};
{% endhighlight %}
**Criando Rota**

Por fim criaremos nosso arquivo de rota que ira receber o controller e usar o método que a rota ira chamar. Criaremos dentro da pasta routes o arquivo empresa.js. A nosso estrutura básica fica um pouco diferente pois ele recebe uma instancia do express e não retorna nada, veja: 
{% highlight javascript %}
module.exports = function (app) {
   var controller = app.controllers.empresa;
};
{% endhighlight %}
Observe também que a variável controller recebe o controller que nos criamos anteriormente. Agora vamos criar nossa rota "/empresas" através da função route do express, especificando qual tipo de requisição queremos(get,post,put e delete) e passando qual método do controller iremos invocar para essa rota.
{% highlight javascript %}
app.route('/empresas').get(controller.listaEmpresas);
{% endhighlight %}
No final nosso arquivo de rotas ficara assim:
{% highlight javascript %}
module.exports = function (app) {
   var controller = app.controllers.empresa;
   app.route('/empresas').get(controller.listaEmpresas);
};
{% endhighlight %}
Agora vamos testar. Abra o seu terminal ou cmd acesse a pasta do projeto e digite:

	node server.js	


Agora é só testar a url: `http://localhost:3000/empresas` e ver o json aparecendo no navegador.

**No proximo post iremos nos aprofundar mais, criando métodos para todas as requisições. Valeu. :)**
 





	


 

	
