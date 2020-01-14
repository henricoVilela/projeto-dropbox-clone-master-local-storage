var express = require('express');
var router = express.Router();
var formidable = require('formidable');//pacote node para trabalha com arquivos (upload/download)
var fs = require('fs'); //trabalha com o sistema de arquivos
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file', (req,res)=>{
  let path = './'+req.query.path;
  
  //verifica se o arquivo existe
  if(fs.existsSync(path)){

    //ler o arquivo e manda ele como resposta
    fs.readFile(path,(err, data)=>{
      if(err){
        res.status(400).jon({
          error: err
        });
      }else{
        res.status(200).end(data);
      }
    });
  }else{
    res.status(400).jon({
      error:'File not found.'
    });
  }
});

router.delete('/file', (req, res)=>{
  let form = new formidable.IncomingForm({
    uploadDir: './upload',
    keepExtensions: true
  });

  form.parse(req,(err, fields, files)=>{
    let path = './' + fields.path;
    console.log(path, fields.path);
    //verifica se o arquivo existe
    if(fs.existsSync(path)){
      //tenta excluir o arquivo fisico
      fs.unlink(path, err=>{
        if(err){
          //caso deu erro retorne ele como resposta
          res.status(400).json({
            err
          });
        }else{
          //se deu certo retorna os fields
          res.json({fields});
        }
      });
    }else{
      res.status(400).jon({
        error:'File not found.'
      });
    }
  });
});

router.post('/upload', (req, res)=>{
  let form = new formidable.IncomingForm({
    uploadDir: './upload',
    keepExtensions: true
  });

  form.parse(req,(err, fields, files)=>{
    res.json({
      files
    });
  });

  
});



module.exports = router;
