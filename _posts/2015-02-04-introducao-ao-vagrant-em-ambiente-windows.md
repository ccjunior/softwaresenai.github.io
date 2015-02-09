---
date: "2015-02-04 14:35"
layout: post
title: Introdução ao Vagrant em Ambiente Windows
description: "Introdução ao Vagrant"
category: infra
github: ruioliver
author-name: Rui Anderson
twitter-username: ruianderson
gplus-username: RuiAnderson
tags:
- vagrant
- windows
- config
- configuração
- infra
image: "/assets/img/introducao-vagrant-ambiente-windows/vagrant.png"
---
![Vagrant](/assets/img/introducao-vagrant-ambiente-windows/vagrant.png)


Tendo em vista o universo de desenvolvimento com várias tecnologias distintas, se faz necessário a criação de um ciclo de implementação que possibilite de forma flexível uma maior gestão e controle dos ambientes.
 
Diante dessa necessidade fui em busca de uma solução no mercado que possibilita o provisionamento de maquinas virtuais de forma segura, de baixo custo de implementação e de fácil aderência a diversas plataformas.  Através da pesquisa por soluções no mercado que contemplasse essas premissas, descubro a solução Vagrant. Por se tratar de uma solução de provedores de ambientes virtuais que atua de forma simples e automatizada proporcionando um melhor gerenciamento.

O Vagrant é um projeto que permite virtualizar o ambiente de desenvolvimento de forma simples.
 
Com o Vagrant você pode executar máquinas virtuais utilizando o Virtual Box ou VMware. Estas máquinas virtuais podem ter qualquer configuração e programas instalados, qualquer um pode criar uma configuração própria com muita facilidade.
 
O objetivo deste artigo é explanar todos os passos para instalação e configuração do Vagrant no ambiente windows.

---

###Passo 1
Instalar o Hypervisor. Faça o download da [Virtual Box](https://www.virtualbox.org/)

![Efetuando download da virtual box](/assets/img/introducao-vagrant-ambiente-windows/imagem1.png)

---

###Passo 2
Instalação do Virtual Box

![Instalando virtual box](/assets/img/introducao-vagrant-ambiente-windows/imagem2.png)
Obs: Optei pelo Virtual Box porem poderia ser utilizado o VMware.

###Passo 3 
Faça o download do [Vagrant](http://downloads.vagrantup.com/)

![Efetuando download do vagrant](/assets/img/introducao-vagrant-ambiente-windows/imagem3.png)

###Passo 4
Instalar o Vagrant

![Instalando o vagrant](/assets/img/introducao-vagrant-ambiente-windows/imagem4.png)

###Passo 5
Criar um diretório para o projeto
![Criando um diretório](/assets/img/introducao-vagrant-ambiente-windows/imagem5.png)

###Passo 6 
Abrir CMD → Navegar até o diretório do projeto

###Passo 7
Executar o comando ``vagrant init`` para criar o arquivo de confiração `vagrantfile` e edite o arquivo
![Executando comando vagrant init](/assets/img/introducao-vagrant-ambiente-windows/imagem6.png)

###Passo 8 
Executar os comandos ``vagrant box and add hashicorp/precise32`` (Para adicionar a box referente ao sistema operacional Ubuntu 12.04 LTS 32-bit)

**obs: Caso deseje instalar outro S.O acesse [https://atlas.hashicorp](https://atlas.hashicorp.com/boxes/search) e escolha a Box desejada, EX: ``hashicorp/precise32``**

###Passo 9
Editar o arquivo `vagranfile` gerado dentro do diretório do projeto.

###Passo  10
Editar o parâmetro dentro do arquivo conforme imagem abaixo.
![Editando parâmetro em arquivo](/assets/img/introducao-vagrant-ambiente-windows/imagem7.png)
**obs.: Lembrar de colocar o nome no parâmetro da box conforme criado anteriormente.**

###Passo 11
Abrir o CMD → Navegar até o diretório do projeto  e executar o comando ```vagrant up``` (Iniciar  a VM) Precisamos “subir” máquina, então, vamos lá!
![Navegando até local do diretório](/assets/img/introducao-vagrant-ambiente-windows/imagem8.png)

###Passo  12 
Volte ao terminal (CMD) e digite o comando  ```vagrant ssh``` para habilitar o acesso via SSH
![Executando o comando vagrant ssh](/assets/img/introducao-vagrant-ambiente-windows/imagem9.png)

###Passo 13 
PuTTy com Vagrant ,  Acesse o IP que foi estabelecido no Vagrantfile:  192.168.13.13. Download do [PuTTy](http://putty.org/)

![Efetuando Download do PuTTy](/assets/img/introducao-vagrant-ambiente-windows/imagem10.png)

![Configurando o PuTTy](/assets/img/introducao-vagrant-ambiente-windows/imagem11.png)

###Passo  14 
Por fim, acesse sua máquina via ssh com PuTTY

![PuTTy alert](/assets/img/introducao-vagrant-ambiente-windows/imagem12.png)

![Acessando máquina via ssh](/assets/img/introducao-vagrant-ambiente-windows/imagem13.png)

---

##Comandos básicos

```Vagrant suspend``` Irá salvar o atual estado de execução da máquina e pará-lo.

```vagrant halt```   Irá desligar normalmente o sistema operacional convidado e desligar a máquina de convidado.

```Vagrant up```   Irá iniciar a maquina virtual

```vagrant destroy``` Irá remover todos os vestígios da máquina convidada do seu sistema. Vai parar a máquina de hóspedes  e remover todos os discos rígidos de hóspedes.