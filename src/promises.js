function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.status + ' ' + req.statusText));
      }
    }

    req.send(null);
  });
}
get('/ajax')
.then(function(data){
  console.log(data);
})
.catch(function(error) {
  console.log(error);
});
get('/ajax/1')
.then(function(data){
  console.log(data);
})
.catch(function(error) {
  console.log(error);
});

function post(url, data) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('POST', url);
    req.setRequestHeader('Content-type', 'application/json');
    req.send(JSON.stringify(data));
    req.onload = function() {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(Error(req.status + ' ' + req.statusText));
      }
    };
  });
}
post('/ajax', {hello: 'hello'})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

function remove(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('DELETE', url);
    req.send(null);

    req.onload = function() {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(Error(req.status + ' ' + req.statusText));
      }
    };
  });
}
remove('/ajax/1')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

function put(url, data) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.status + ' ' + xhr.statusText));
      }
    };
  });
}

put('/ajax/1', {hello: 'hello'})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
