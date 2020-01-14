# projeto-dropbox-clone-master-local-storage
Pagina web que simula algumas das funcionalidades do dropBox.

## Descrição:
Este projeto usa o HTML e CSS retirado do proprio site [DropBox](https://www.dropbox.com), 
o site criado aqui fica em um servidor local criado com NodeJs e o banco de dados utilizado é o *RealTime DataBase* do [FireBase](https://firebase.google.com/?hl=pt-br), nele são guardados os dados (name,path,size,type) dos arquivos que foram feito o upload, o arquivo fisico é salvo na maquina local que esta rodando o servidor Nodejs.
Para trabalhar com o sistema de arquivos e upload/download no Nodejs foi utilizado os pacotes:
- formidable
- fs

## IMPORTANTE:
- Executar o comando *'npm install'* no diretorio do projeto para baixar e instalar todas as dependencias.
- Abrir um terminal na pasta *'app'* e executar o comando *'npm start'*. (localhost:3000/) para acessar a aplicação.
- O fireBase ja esta configurado com o meu projeto publico de teste. Para uma nova configuração siga os [passos](https://firebase.google.com/docs/web/setup?authuser=0). 

