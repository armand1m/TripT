﻿# Programas, SDKs, pacotes e etc...
https://nodejs.org/en/download/
https://git-for-windows.github.io/

# Git

##Clonando o projeto num repositorio local :
> OBS: Vai lhe pedir os seus dados de login no github pois e um projeto privado e sua conta tem que estar vinculada ao projeto!

`git clone https://github.com/LordAlastair/TripT.git`

## Agora vamos trocar para a branch de desenvolvimento, nela que vamos salvar as coisas legais que estamos fazendo: 

`git checkout dev`

## Agora precisamos atualizar a branch atual que estamos:

`git pull`

## Legal temos os dados da branch de desenvolvimento, agora vamos criar uma branch de feature, para não poluir a branch de dev #com coisas inacabadas que podem atrapalhar nossos colegas:

`git checkout -b feature/nome-da-feature`

## Pronto terminei de desenvolver varias coisas legais para o projeto, quero compartilhar com nossos colegas:
`git add -i`

## Selecione os arquivos e depois :
`git commit -m "Olhem as coisas legais que eu fiz"`

`git merge --no-ff feature/nome-da-feature`
