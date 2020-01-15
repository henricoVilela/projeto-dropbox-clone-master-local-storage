# projeto-dropbox-clone-master-local-storage
Pagina web que simula algumas das funcionalidades do dropBox.

## Descrição:
Este projeto usa o HTML e CSS retirado do proprio site [DropBox](https://www.dropbox.com), 
o site criado aqui fica em um servidor local criado com NodeJs e o banco de dados utilizado é o **RealTime DataBase** do [FireBase](https://firebase.google.com/?hl=pt-br), nele são guardados os dados (name,path,size,type) dos arquivos que foram feito o upload, o arquivo fisico é salvo na maquina local que esta rodando o servidor Nodejs.
Para trabalhar com o sistema de arquivos e upload/download no Nodejs foi utilizado os pacotes:
- formidable
- fs

## IMPORTANTE:
- Instalar o [NodeJs](https://nodejs.org/en/).
- Instalar o [Bower](https://bower.io/) *npm install -g bower*.
- Executar o comando *'bower install'* na pasta *'app > public'*.
- Executar o comando *'npm install'* na pasta *'app'* para baixar e instalar todas as dependencias do node.
- Abrir um terminal na pasta *'app'* e executar o comando *'npm start'*. (localhost:3000/) para acessar a aplicação.
- Criar uma pasta com o nome *'upload'* no diretorio do projeto *'app'*.
- O fireBase ja esta configurado com o meu projeto publico de teste. Para uma nova configuração siga os [passos](https://firebase.google.com/docs/web/setup?authuser=0). 

