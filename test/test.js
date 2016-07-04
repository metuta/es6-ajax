import {http} from '../es6-ajax.js';

http.get('/ajax')
  .then(function(data){
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
http.get('/ajax/1')
  .then(function(data){
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
http.post('/ajax', {hello: 'hello'})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
http.delete('/ajax/1')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
http.put('/ajax/1', {hello: 'hello'})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
