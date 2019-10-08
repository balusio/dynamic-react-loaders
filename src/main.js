import InitService from 'services/initialize-service';

var elem = new InitService({name: 'jorge', lastName: 'manzano'});

InitService.insertScript('./dist/loader.js').then((data) =>{
  console.log(data);

  console.log('AAAADDDED SCRIPT');
});

console.log(elem);
