#[Software Senai Blog](senaisoftware.github.io)

###Como contribuir
 Para criar sua postagem precisamos criar um arquivo markdown na pasta ***_posts*** o nome do seu arquivo deve seguir o padrão → **ano-mês-dia-nome-do-seu-post.md (md = extensão do markdown)**

---

###Arquitetura padrão
    ---
    layout: post
    title:  "Titulo de sua postagem"
    date:   ano-mês-dia hora:minuto:segundo
    description: "Uma pequena descrição da sua postagem"
    category: categoria
    gplus-username: seu nome de perfil do google plus
    twitter-username: seu nome de perfil do twitter
    facebook-author: seu nome de perfil do facebook
    tags:
    - ExemploJs
    github: seu nome de perfil do github
    author-name: "Seu Nome"
    image: '/assets/img/titulo-de-sua-postagem.jpg ou png'
    ---

Aqui começamos a escrever a postagem. Vale lembrar que não precisamos citar o titulo aqui.

###Aprendendo a usar markdown
[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

###Gerador de Tabelas em markdown
[Markdown Tables Generator](http://www.tablesgenerator.com/markdown_tables)

###Como demonstrar linhas de código no blog
    {% highlight javascript %} 
        $(function(){ $('div').html('Uma Div'); }); 
    {% endhighlight %}

    {% highlight java %} 
        system.out.println("Hello World"); 
    {% endhighlight %}
    
### Usando imagens no blog
    ![texto alternativo](/assets/img/imagem.jpg "Título Opcional")
    ![texto alternativo][fotografia]
    [fotografia]: /assets/img/imagem.jpg "Título Opcional"
    ![logo do Google](http://www.google.com/images/logo.gif "O Logo do Google")
**imagens sempre deixam sua postagem mais rica**





