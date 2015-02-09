---
layout: post
title:  "Avaliação de processos seguros para desenvolvimento de software"
date:   2015-02-02 15:33:36
description: "avaliação de processos seguros para desenvolvimento de software"
category: segurança
gplus-username: FábioElísio
twitter-username: felisio
facebook-author: fabio.elisio
tags:
- segurança
- software
- criptografia
- processos
- OWASP
- WASC

github: "felisio"
author-name: "Fábio Elisio"
image: '/assets/img/avaliacao-de-processos-seguros-para-desenvolvimento-de-software.jpg'
---

![avaliação de processos seguros para desenvolvimento de software](/assets/img/avaliacao-de-processos-seguros-para-desenvolvimento-de-software.jpg)

**Resumo**

A Internet é o principal canal de comunicação utilizado por sistemas e aplicações 
desenvolvidos em plataforma web para diversos tipos de serviços ofertados pelas instituições 
que adotaram este recurso. A complexidade destas aplicações e a natureza involuntária dos 
profissionais desenvolvedores de sistemas para a web,  faz com que seja comum a existência de falhas 
de segurança provenientes do seu ciclo de desenvolvimento.

Este artigo tem como finalidade apresentar boas praticas de desenvolvimento de aplicações web utilizando 
como referências a [OWASP (Open Web Application Security Project)](https://www.owasp.org/index.php/Main_Page) 
e a [WASC ( Web Application Security Consortium)](http://projects.webappsec.org/w/page/13246927/FrontPage), 
que são instituições abertas e dedicada a desenvolver projetos para capacitar as empresas a desenvolver, 
adquirir e manter aplicações que possam ter níveis de confiabilidade aceitável. A produção destas organizações 
pode ser usada para embasar empresas que desejem implementar em sua equipe de desenvolvimento praticas mais seguras 
de programação.


**Introdução**

Diante do notório crescimento da quantidade de empresas de desenvolvimento de software no Brasil e no Mundo e 
principalmente as empresas voltadas para desenvolvimento de aplicações web, se faz urgente e necessária a consciência 
dessas empresas com relação ao desenvolvimento de softwares seguros para seus usuários.


Como podemos observar recentemente, os blogs feitos na plataforma wordpress sofreram um grande ataque devido a falta 
de segurança em relação ao seu código ter sido desenvolvido sem ter passado pelos testes necessários de segurança.


Devido a esse cenário perigoso onde o terreno se torna cada vez mais hostil é de extrema importância que as empresas 
que estão sendo criadas, e as empresas que estão criando setores de desenvolvimento de software, tenham conhecimento 
das principais praticas que devem ser seguidas para tornar seus softwares mais confiáveis para as pessoas que irão usa-las.


Este artigo em seu primeiro tópico estará abordando os principais aspectos de segurança que deve ser durante o ciclo 
de um desenvolvimento de um software apontando através de diversos estudos todas as falhas que podem acontecer dentro 
de cada etapa de um ciclo de desenvolvimento, logo após será abordada a forma como são classificadas as falhas de segurança
segundo a OWASP e a WASC, em seguida algumas medidas que poderão ser tomadas para melhor corrigir essas falhas de segurança.


**Aspectos de segurança durante o ciclo de desenvolvimento de software.**


Devido a grande massificação de aplicações webs no mundo como internet banking, comercio eletrônico, sistemas governamentais,
e para diversos tipos de seguimentos como: medicina, eletrônica, engenharia, entre outros, os mesmos se tornaram os principais
alvos de ataques cibernéticos. Sendo que como essas aplicações são a grande maioria no mercado elas detém as maiores 
vulnerabilidades encontradas em softwares.


Um grande problema nessas aplicações esta no seu ciclo de desenvolvimento que não considera a segurança como uma das 
etapas do seu processo de construção. Em estudo realizado pela SANS Institute, que é uma organização educacional 
voltada para treinamentos e certificações de segurança, aponta os TOP 25 mais perigosos erros de software, estão 
entre os principais erros: Injeção de SQL, Cross-site scripting, OS command injection, Open Redirect, entre outros que 
forma a lista dos Top 25. Nota-se que os erros na maioria dos casos são causados pela falta de teste no desenvolvimento 
do software onde iriam apontar essas determinadas falhas, evitando assim que seus usuários sejam vitimas desses tipos 
de ataque.


Também em estudo feito pela WASC a instituição classificou as mais difundidas falhas e aplicações web são elas: 
Cross-Site Scripting, information leakage, SQL injection, insufficient Transport Layer Projection, fingerprint e 
HTTP Response Splitting, o gráfico abaixo mostra a probabilidade de detecção dessas vulnerabilidades nas aplicações web:


> Fonte: [http://projects.webappsec.org](http://projects.webappsec.org/w/page/
13246989/Web%20Application%20Security%20Statistics)


Baseado nesses estudos de vulnerabilidades instituições como a OWASP criaram também seu top 10 de falhas em segurança 
de aplicações web que aponta entre as citadas algumas outras que serão abordados no próximo tópico desse artigo. 
Pensando nisso os colaboradores que fazem parte dessa instituição criaram um guia de referência para melhores praticas 
de programação. Com o intuito de reduzir as vulnerabilidades mais comuns em aplicações web, o guia aponta as falhas de 
segurança que podem ser introduzidas em qualquer fase do ciclo do desenvolvimento(2012,p.5), como:


> “No início, ao não identificar as necessidades de segurança
Na criação de arquiteturas conceptuais que possuam erros de lógica
No uso de más práticas de programação que introduzam vulnerabilidades técnicas
Na implementação do software de modo inapropriado
Na inserção de falhas durante a manutenção ou a atualização”


Também segundo o guia (2012,p.5)


“é importante entender que as vulnerabilidades de software podem ter um âmbito muito maior do que o do próprio software. 
Dependendo da natureza do software, da vulnerabilidade e da infraestrutura de apoio, o impacto de uma exploração bem 
sucedida pode comprometer qualquer um, ou mesmo todos os seguintes aspetos:


- O software e sua informação associada
- O sistema operativo dos servidores associados
- A base de dados do backend
- Outras aplicações num ambiente partilhado
- O sistema do utilizador
- Outros softwares com os quais o utilizador interage


É muito importante para as empresas e instituições que desejam implementar as metodologias de segurança reverem todas as 
etapas do desenvolvimento pois como já foi visto essas falhas certamente estarão presente em todas elas levando o software
fatalmente a um fracasso futuro. Nos próximos tópicos este artigo estará abordando uma lista de verificação de praticas de 
programação segura, que poderá servir de estudo para implantação dentro da etapa de desenvolvimento de códigos mais seguros.


**Classificação das falhas de segurança segundo a OWASP e WASC.**


Assim como foi abordado anteriormente, diversas instituições voltadas para o desenvolvimento de padrões de segurança 
para aplicações web, apontam as principais falhas de segurança dos softwares com base em diversas pesquisas e estudos 
aplicados, nesse tópicos iremos abordar as principais falhas de segurança apontadas por duas das principais instituições 
na área.


A OWASP divulga anualmente seu top 10 das falhas de segurança onde descreve as 10 principais falhas de segurança mais 
comuns nas aplicações web, enquanto a WASC divulga através do seu site uma área de estatística onde aponta as principais 
falhas de segurança. Através do estudo entre as duas instituições podem ser descritas as seguintes falhas:


Cross-Site Scripting (XSS)


Essa falha esta citada entre as mais comuns nas aplicações web em geral e é considerada como uma vulnerabilidade de 
fácil detecção que de acordo com a OWASP (2010,p.11) consiste em:


“as falhas de XSS ocorrem sempre que uma aplicação recebe dados não confiáveis e os envia para um navegador Web sem que os 
tenha validado ou filtrado convenientemente. O XSS permite aos atacantes a execução de scripts no navegador da vítima que 
podem ser usados para sequestrar informações da sessão do utilizador, alterar endereços Web de forma perigosa ou redirecionar
o utilizador para endereços maliciosos.”


Ainda com relação a questão da sua vulnerabilidade, a OWASP (2010,p.15) acrescenta que:


“Tanto as ferramentas estáticas como as dinâmicas podem detectar automaticamente problemas de XSS. No entanto, cada aplicação 
constrói as páginas de diferente modo e usa diferentes interpretadores associados aos navegadores como JavaScript, ActiveX, 
Flash e Silverlight, o que dificulta a detecção automática. Portanto, uma detecção completa destes problemas requer uma 
combinação de revisão manual do código e testes de penetração manual, como complemento a qualquer abordagem automática que 
possa ser usada.”


Boas práticas para evitar o XSS seria o uso de um Framework na sua aplicação, geralmente os frameworks já vêm com diversos 
tipos de validações internas o que evitaria esse tipo de ataque, outra boa pratica também seria as validações dos elementos 
de entrada de dados através dessas validações o desenvolvedor pode restringir que caracteres maliciosos penetrem na aplicação
comprometendo assim a sua segurança.


O uso da Whitelist como ferramenta de validação também se torna muito adequado nesses casos, Tecnologias de WEB 2.0, como 
o AJAX, fazem com que esse tipo de risco seja ainda mais difícil de ser detectada através de ferramentas automáticas.


Injeção de SQL (SQL Injection)


A injeção de SQL ou SQL Injection também é apontada pelas duas instituições como umas das falhas mais frequentes em 
aplicações web, ela consiste em um inserção através de um componente de entrada de dados da aplicação um comando SQL que 
vai diretamente no banco de dados da aplicação fazendo com que o invasor consiga fazer diversas operações como resgatar 
acessos ao sistema, atualizar, inserir ou deletar dados no banco, roubar contas de usuários entre outras operações. 
De acordo com a definição da OWASP(2010,p.11) descreve esse tipo de injeção como:


“ocorrem quando dados não confiáveis são enviados para um interpretador como parte de um comando ou consulta. Os dados 
hostis usados no ataque podem iludir o interpretador para que este execute comandos não-desejáveis ou permita aceder a 
dados não autorizados.”


Quebra de autenticação e da gestão de sessões


Geralmente acontece quando o programador não utiliza corretamente a gestão de sessões deixando assim diversas falhas em 
áreas como fechar ou finalizar corretamente uma sessão, o uso de palavras seguras para as sessões, saber onde expirar a 
sessão corretamente, atualização de contas entre outros.


Referencias diretas inseguras a objetos


Esse tipo de falha ocorre quando um programador deixa aberto uma referencia para algum parâmetro direto que vem de uma 
chamada pela requisição do sistema como exemplo podemos pensar que o sistema recebi um parâmetro “nome” que vem de uma 
requisição do navegador para o servidor, então o programador pega esse parâmetro e sem nenhum tipo de tratamento coloca 
ele direto dentro de um comando sql, com isso se o invasor apenas mudar o parâmetro poderá ter acesso a conta de outras 
pessoas.


*Cross Site Request Forgery(CSRF)*


Mesmo sendo uma falha de segurança muito fácil de ser identificada o CSRF faz proveito do sistema, assim que o usuário é 
autenticado geralmente os sistemas geram um identificação no navegador gravado o id da sessão em um cookie, com essa sessão
já registrada o sistema pode acabar fazendo uma requisição em que mostre com facilidade através da URL parâmetros que 
comprometam a segurança desse usuário, o invasor então injeta esses parâmetros em outras requisições forçando o usuário 
então a fazer chamadas de requisições falsas usando esses parâmetros que o invasor pegou, imagine então se em uma dessas 
requisições são passados parâmetros como a quantia que esta sendo transferida para sua conta exemplo: 
[“http://exemplo.com.br/FundoTransferencia&quantia=5000&ContaDestino=23456”](http://exemplo.com.br/FundoTransferencia&quantia=5000&ContaDestino=23456) 
o invasor poderá pegar esse dados e fazer a transferência para a conta dele ou qualquer outra.


Configuração Incorreta de Segurança


Essa falha de segurança consiste em manter todo o seu ambiente de desenvolvimento e produção sempre atualizado e 
configura-los sempre de forma correta, isso inclui: o Sistema operacional onde sendo hospedado o seu sistema, 
o Banco de dados que seu sistema usa, Frameworks de desenvolvimento como Struts, Razor .NET, entre outros, 
falhas de segurança sempre encontrados nos mais diversos produtos e os invasores estão sempre atentos a essas falhas 
para se aproveitar do sistema que não esta atualizado corretamente explorando assim essas brechas de segurança, portanto 
antes de usar qualquer um dessas soluções sempre se certifique que esta usando a versão mais estável e atualizada, 
outra boa pratica é sempre lê as documentações e verificar a melhor forma de se implementar qualquer tipo de solução, 
um Framework por exemplo mal instalado pode trazer serias brechas de segurança para seu sistema.


Armazenamento Criptográfico Inseguro


Apesar de não ser uma falha muito fácil de ocorrer ela pode acontecer principalmente em desenvolvedores que não tem 
experiência de desenvolvimento de aplicações que requerem um nível de segurança mais apurado. Se consiste em criptografar 
todos os dados de um sistema de possam ser sujeito a ataques, como senha, numero de cartão de credito, palavras-chaves 
entre outros dados nocivos, é sempre recomendado o uso de Criptografias que sejam recomendadas pelas instituições de 
segurança como a OWASP e a WASC.


Falha de restrição de acesso a URL


Primeiramente o desenvolvedor deve saber classificar quais as paginas do sistema serão públicas e quais serão privadas, 
a grande questão dessa falha e não deixar que invasor tenha acesso a uma pagina privada apenas digitando diretamente pela URL,
esse tipo de validação tem que ser feitas no código fonte da aplicação garantindo assim que se o invasor gerar um requisição 
para um pagina privada diretamente pela URL quando essa requisição chegar ao back-end, possa existir essa validação 
autorizando ou não o acesso. Como um exemplo imagine que se tenha uma pagina pública com o endereço 
http://www.exemplo.com.br/noticias e que com esse base na mesmo requisição possa ser digitado 
http://www.exemplo.com.br/admi_noticias, se não houver a devida validação o invasor terá acesso á essa pagina somente 
acessível para os administradores.


Proteção Insuficiente da Camada de Transporte


Esse tipo de proteção diz respeito ao uso do SSL para as paginas que são necessária autenticação para ser acessado, 
o protocolo SSL faz a proteção de todo o trafego relacionado com autenticações. Isso evita, por exemplo, que um invasor 
possa ficar monitorando o trafego da sua rede e pegue o cookie de uma sessão do sistema.


Redirecionamento e Encaminhamentos Inválidos


Imagine que uma aplicação tem uma pagina de redirecionamento chamada de redirect.php e que essa pagina tem um parâmetro 
chamado url, o invasor assim que detectar essa parâmetro percebe que através desse parâmetro pode passar qualquer url e 
o sistema ira direcionar o usuário para esse destino. Esta montado ai um grave falha de segurança que possibilita que um
invasor através de um script malicioso leve o usuário para uma pagina falsa a assim roubar todos os seu dados, é importante
evitar o uso de encaminhamentos e redirecionamentos dentro de um sistema e sempre verificar todas as chamadas de urls vendo
se todos os parâmetros não são possíveis que algum de falha.


No próximo tópico serão exploradas técnicas e medidas para corrigir muitas das falhas de segurança descrito até o momento,
todas as falhas estão apontadas do Top 10 da OWASP que se consiste em manual voltado para desenvolvedores para saber 
identificar falhas de segurança em aplicações web, esse artigo usa o manual publicado em 2010, portanto outras falhas 
podem ter aparecidos com o tempo e não está devidamente citado nesse artigo. Também como base é usado o site da WASC onde 
também são descritas as falhas mais comuns de software também citado mais acima nesse artigo.


**Medidas para corrigir as falhas de segurança.**


Com relação às falhas de segurança é preciso estar atento inicialmente à segurança no ambiente de desenvolvimento, 
sendo esse o primário e essencial cuidado que todas as empresas precisam ter no intuito de corrigir possíveis brechas 
que poderão aparecer nos seus sistemas. Albuquerque (2002,p.5) destaca algumas características para um ambiente seguro 
de desenvolvimento. É recomendado que o ambiente onde estará os servidores que hospedam os sistemas sejam de acesso 
restrito somente a pessoas autorizadas, e que fiquem em um espaço físico também restrito, quer dizer, não fique visível 
para qualquer pessoa, ambientes como esse são conhecidos popularmente como “Sala cofre”.


Outra característica de segurança apontada pelo autor se refere ao ambiente de desenvolvimento do código, é recomendado que 
nesse ambiente haja uma separação entre os ambientes de desenvolvimento, testes e produção para garantir que não vá para o 
ambiente de produção uma versão do software que esteja apresentando algum problema ou que ainda não tenha sido testada. 
Uma boa pratica de gerenciamento desse ambiente é uso de gerenciadores de código que controlam seus ambientes e suas versões, 
são também conhecidos como ambiente de versionamento ou SVN. Nesses ambientes é possível que a empresa não só gerencie as
versões dos códigos que estão sendo feitas em cada tipo de ambiente (desenvolvimento, teste e produção), mais também poderá 
retornar versões de código que não estão funcionando direito e verificar qual foi o desenvolvedor que versionou aquele código 
para qual ambiente.


Ainda de acordo com Albuquerque (2002,p6) é de extrema importância ter uma equipe bem capacitada para fazer os teste  no 
software e assim garantir a segurança do mesmo. Boas praticas de programação também são muito importante como: Abordar todas
as variáveis de entrada no sistema como nocivas, e sempre verificar sua validade antes de inserir em um banco de dados ou 
usa-la no sistema; sempre tratar todos os erros do software não deixando transparente para o usuário, criando assim feedbacks
que tenham um melhor entendimento e não dando brecha para conhecimento dos invasores; estar sempre verificando o tamanho dos
buffers e arrays do sistema para não deixar estourar, é recomendável usar funções das próprias bibliotecas que fazem 
gerenciamento interno; e sempre documentar o código, principalmente quando for trabalhar em equipe, documentação é a melhor
forma de comunicação entre os desenvolvedores.


Albuquerque (2002,p.7) baseia seu estudo na norma ISO/IEC 15.408, também conhecido como Common Criteria CC (Critério Comum) 
a qual consiste em normas de segurança para desenvolvimento seguro de software e, segundo sua definição: “O objetivo da 
norma é fornecer um conjunto de critérios fixos que permitem especificar a segurança de uma aplicação, e definir formas de 
garantir a segurança da aplicação para o cliente final.”


Baseado nas normas ISO/IEC 15.408 o autor define vários tópicos que fazem parte de ambiente seguro para desenvolvimento 
de software, através desses itens pode-se corrigir diversas falhas de segurança entre elas podemos destacar: Criação de 
uma politica de segurança através de normas, diretrizes e uma legislação pertinente; Identificação das Ameaças através dos
ativos e mecanismos de ataques; criação de perfis para usuários e necessidade da sua formalização, através dos controles 
e politicas de acesso ao sistema, criando assim níveis de acesso por grupos de usuários e prioridades; criação de premissas
que se consistem nas formas de uso do sistema e seus ambientes; criação de uma de auditoria no software onde possa ficar 
gravada todas as ações dos usuários que usaram o sistema; uso correto de autenticação do usuário através de login e senha 
fazendo uso também de criptografias do tipo hash como o MD5, lembrando sempre que é extrema importância que o usuário só 
consiga realizar qualquer operação após estiver devidamente autenticado, e recomendado também o uso de uma única instância
por usuário; se o sistema enviar e-mails para seus usuários enviar também uma copia da mensagem para o administrador ou 
responsável do sistema e a confirmação de recebimento para ambas as partes; proteção do próprio sistema, garantir a 
integridades dos dados do sistema deve ser ainda mais rigoroso do que garantir a integridade dos dados dos usuários, pois
uma vez que essa informação se perde, perde-se também os dados de todos os usuários; conforme a politica de segurança em 
alguns casos é necessário garantir a privacidade do usuário assegurando assim que outros usuários não saibam qual recurso 
do sistema um usuário esteja usando, ações do usuário não sejam associadas ao mesmo, o uso de pseudônimo, e a não 
identificação efetiva do usuário; Gerenciamento par as funções de segurança onde os administradores possam fazer toda a 
gestão da parte de segurança do sistema gerindo assim suas funções, seus atributos, e dados; gerenciamento da utilização dos
recursos usados pelo sistema, como memoria, tempo de processamento, espaço em disco ou qualquer outro recurso que o sistema
faça uso; o uso de avaliações de segurança com o intuito de identificar possíveis vulnerabilidades no sistema e assim a 
depender do caso essa ameaça pode vim a ser eliminada, minimizada ou monitorada; testes para garantir que o software esta 
atendendo a todos os seus requisitos funcionais de segurança de acordo com o que foi especificado, e teste de vulnerabilidade
garantindo a sua integridade em relação a todas as ameaças já identificadas.


Ressaltando que para cada um desses itens citados existe uma conformidade da ISO/IEC 15.408 onde ele especifica as melhores 
praticas de uso.


**Considerações finais.**


Diante do exposto neste artigo, pode-se perceber que as falhas de segurança podem estar presente em qualquer software, 
em um pequeno detalhe que o desenvolvedor deixou passar. Seguir sempre as normas para um desenvolvimento seguro de um 
software nos dias de hoje se faz emergencial, pois os invasores estão em constante evolução, sempre atentos a qualquer 
tipo de falha.


Faz-se necessário portanto a verificação constantes dos novos tipos de ataques assim como às normas que devem ser 
implementadas para evitá-los, impedindo assim que os softwares desenvolvidos sejam a próxima vitima desse ataque.


Este artigo foi apenas uma apresentação do que se consiste o imenso mundo de teste de segurança para softwares, 
onde foi apresentado os principais conceitos para planejar e implementar de forma correta a segurança para um sistema.


Tipos de falhas sempre irão surgir ao passar do tempo, mais a grande importância é o desenvolvedor junto com a equipe de 
teste estar sempre um passo na frente procurando prever os ataques e criando as soluções adequadas para garantir os três 
princípios básicos de um software seguro: Confidencialidade, Integridade e Disponibilidade.


**Referencias bibliográficas.**


Albuquerque, Ricardo – Segurança no Desenvolvimento de software: como garantir a segurança do sistema para seu 
cliente usando a ISO/IEC, Ricardo Albuquerque, Bruno Ribeiro. – Rio de Janeiro: Campus, 2002.


[https://www.owasp.org](https://www.owasp.org/images/e/e5/OWASP_Top10_2010_JavaEE_PT-BR.pdf acessado em: 03 de Abril de 2013.)


http://www.sans.org/top25-software-errors/ acessado em: 07 de maio de 2013.


[http://projects.webappsec.org](http://projects.webappsec.org/w/page/13246989/Web%20Application%20Security%20Statistics) acessado em 08 de maio de 2013.


OWASP TOP 10 2010 – The Ten Most Critical Web Application Security Risks, 
[https://www.owasp.org/](https://www.owasp.org/images/1/10/OwaspTop10_ptPT_v2.pdf) acessado em: 03 de Abril de 2013.


OWASP TOP 10 JAVA EE –  Os 10 riscos mais críticos para aplicações
web baseadas em Java EE.



