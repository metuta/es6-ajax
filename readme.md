# ES6 Ajax
A quick implementation of ajax requests with es6 syntax.

## Importing

It provide for you two functions ajax and http. So download the file and es6-ajax.js and import to your script.
```JavaScript
import * from 'path/es6-ajax.js';

//or just the methods that you want
import {http} from 'path/es6-ajax.js';

//feel free to rename the function on import
import {http as someName} from 'path/es6-ajax.js';
```

## Usage
Now with the module properly imported. All the method return promise so just make:
```JavaScript
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
```
Or with the ajax function:
```JavaScript
ajax('GET', url);
ajax('POST', url, data);
ajax('DELETE', url);
ajax('PUT', url, data);
```

### Contribute

* Fork this repo to your own git
* Make your changes
* Submit a pull request with full remarks documenting your changes
* Pull request MAY then be accepted

<!-- ## License
[ISC License](https://github.com/thiamsantos/sassgrid/blob/master/LICENSE.md) © [Thiago Santos](https://github.com/thiamsantos) -->
