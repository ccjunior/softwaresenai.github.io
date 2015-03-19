---
layout: post
title:  "Criando um node.js addon com c++"
date:   2015-03-19 10:00:00
description: "Exemplo mínimo para criação de um addon, exemplificando como exportar um método para o node"
category: Addon
twitter-username: rafael_neri
facebook-author: rafael.neri
tags:
- node.js
- addon

github: "rafaneri"
author-name: "Rafael Neri"
image: '/assets/img/criando-um-nodejs-addon-com-cplus.png'
---

![Criando Um Node.js addon com cplus](/assets/img/criando-um-nodejs-addon-com-cplus.png)


Este é um exemplo mínimo para criação de um addon, exemplificando como exportar um método para o node.


####Instalar o node-gyp

    npm install -g node-gyp

####Criar classe c++ de acordo com as especificações em node.h


{% highlight c++ %}
    #include <node.h> //Adiciona referência para a biblioteca do node.js
    using namespace v8; //Adiciona referência para a biblioteca v8
    // Define o método que será exportado para o node.js
    void Method(const FunctionCallbackInfo<Value>& args) {
         Isolate* isolate = Isolate::GetCurrent();
         HandleScope scope(isolate);
         args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
    }

    void init(Handle<Object> exports) {
         NODE_SET_METHOD(exports, "hello", Method); // Define o nome do método que será utilizado na aplicação node.js
    }

    NODE_MODULE(addon, init)
{% endhighlight %}


- Criar arquivo `.gyp` de configuração do addon
- O target_name deve conter o mesmo nome descrito em `NODE_MODULE(module_name, init)`
    
{% highlight javascript %}
{
  "targets":[
    {
      "target_name": "addon",
      "sources": ["hello.cc"]
    }
  ]
}
{% endhighlight %}

### Compile os arquivos

    node-gyp configure build

### Utilizando o addon
Arquivo hello.js
{% highlight javascript %}

var addon = require('./build/Release/addon');

console.log(addon.hello()); 
{% endhighlight %}

### Manual Node.js Addon: [Node.js addon manual e documentação](https://nodejs.org/docs/v0.10.28/api/addons.html)

###Código fonte do exemplo: [https://github.com/softwaresenai/helloworld-addon](https://github.com/softwaresenai/helloworld-addon)