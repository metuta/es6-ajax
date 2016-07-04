 function constructor(method, url, data=null) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest();
      req.open(method, url, true);

      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject(Error(`${req.status} ${req.statusText}`));
        }
      }
      if (method == 'PUT' || method == 'POST') {
        req.setRequestHeader('Content-type', 'application/json');
        data = JSON.stringify(data);
      }
      req.send(data);
    });
}

var http = {};

http.get = function(url) {
  return constructor('GET', url);
}
http.post = function(url, data) {
  return constructor('POST', url, data);
}
http.remove = function(url) {
  return constructor('DELETE', url);
}
http.put = function(url, data) {
  return constructor('PUT', url, data);
}

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
http.remove('/ajax/1')
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
