---
layout: post
title:  "Node.js para aplicações desktop? Conheça o Node Webkit"
date:   2015-02-12 10:00:00
description: "Desenvolvimento de aplicações desktop em node.js utilizando o Node Web Kit"
category: Node.js
twitter-username: thiagoleitedev
facebook-author: thiagoleitedev
tags:
- node webkit
- node.js
- desenvolvimento desktop
- nodejs desktop

github: "thiagoleite86"
author-name: "Thiago Leite"
image: '/assets/img/desenvolvimento-de-aplicacoes-destktop-em-nodejs-utilizando-node-webkit.jpg'
---

![Node Webkit](/assets/img/desenvolvimento-de-aplicacoes-destktop-em-nodejs-utilizando-node-webkit.jpg)

Já pensou utilizar módulos do Node.js diretamente no seu DOM, através do Javascript? 
Transformar HTML, CSS, JavaScript em uma aplicação desktop?
Sua aplicação ser multiplaforma?
Node Webkit traz tudo isso em seu conceito.

###O que é Node Webkit?
> O Node Webkit roda em cima do Chromium e node.js. Ele é a junção do [Node.js](http://nodejs.org/) e [WebKit browser](http://www.webkit.org/), que é um projeto open source. Sendo assim, você pode construir aplicações nativas, utilizando apenas HTML, CSS e JavaScript com node-webkit.

###Quem está utilizando?
- [Intel XDK](http://xdk.intel.com/) - Ferramenta de desenvolvimento de plataforma HTML 5 que oferece um fluxo de trabalho simplificado.
- [Kola](http://koala-app.com/) - Ferramenta para gerenciamento de projeto web e compilação de less, sass e coffescript.
- [Popcorn Time](http://popcorntime.io/) - Permite qualquer usuário assistir vídeo streaming de torrents em tempo real.

Veja a lista completa em: [https://github.com/nwjs/nw.js/wiki/List-of-apps-and-companies-using-node-webkit](https://github.com/nwjs/nw.js/wiki/List-of-apps-and-companies-using-node-webkit)

##Iniciando com o Node Webkit
Existem diversas formas de trabalhar com o Node Webkit. Vamos para a forma mais simples e objetiva, que é utilizando um módulo do [NPM](https://www.npmjs.org/).

###Passo 1
Se você ainda não possui o Node.js instalado em sua máquina, realize a instalação [clicando aqui](http://nodejs.org/dist/v0.12.0/x64/node-v0.12.0-x64.msi).

---

###Passo 2
Após a instalação do Node.jse o NPM, você precisa realizar a instalação do módulo node-webkit-builder.  Para instalar, acesse seu terminal e digite o comando:

        npm install node-webkit-builder -g


###Passo 3
Crie um diretório para seu projeto e acesse a pasta através do terminal.

        mkdir c:\projeto

        cd c:\projeto


###Passo 4
Dentro do diretório projeto crie um arquivo package.json para configurar seu projeto:

{% highlight javascript %}
{
    "name": "nome-do-projeto",
    "version": "0.0.1",
    "main": "index.html",
    "window": {
        "title": "nome do projeto",
        "width": 800,
        "height": 500
    }
}
{% endhighlight %}

####main
Especifica qual página deverá ser aberta quando o node-webkit iniciar seu projeto.

####name
O nome do pacote. Deverá estar sempre ser "lowercase" e alfa-numérico sem espaços.

####window
Características da janela de sua aplicação em modo inicial:

`title` (string)Título principal da sua janela, quando a aplicação é iniciada

`height` (int)Altura inicial da aplicação

`width` (int)Largura inicial da aplicação

`toolbar` (boolean)Exibição da barra de navegação

`icon` (string)caminho para localização do icone

`position` (string)Posição inicial da jenela. Poderá ser "null", "center" ou "mouse". 

`fullscreen` (boolean)Se a janela será fullscreen

`show_in_taskbar` (boolean)Se a jenela será mostrada na barra de tarefas ou "dock". O valor padrão é "true".

`frame` (boolean)Especifica se a aplicação terá a barra de título padrão das janelas do seu Sistema Operacional.

`show` (boolean)Especifica se você quer exibir ou esconder sua aplicação na sua inicialização.

`transparent` (boolean)Cria transparência na janela da aplicação. Dessa forma você passa a controlar a transparência da sua janela través do CSS.

###Passo 5
Crie o arquivo index.html:

{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <title>Nome do Projeto</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        Nós estamos utilizand node.js versão: <script>document.write(proccess.version)</script>.
	</body>
</html>
{% endhighlight %}


###Passo 6
Seu projeto está pronto para ser iniciado. Para visualizar, acesse novamente o terminal, dentro da pasta projeto e digite:

        nwbuild -r ./

###Passo 7
Para colocar sua aplicação em produção, e gerar um arquivo binário e executável, digite:

        nwbuild -p -osx,win ./

###Passo 8
Será criada uma pasta build dentro do seu projeto. Dentro dela pastas referentes a execução de sua app em osx e win.

##Comandos básicos
```nwbuild -r [path]``` Roda o node-webkit para plataforma atual.

```nwbuild -p [plataformas] [path]``` As plataformas são separadas por "virgula", e podem ser: win32,win64,osx32,osx64,linux32,linux64 ['osx32','osx64','win32','win64']

