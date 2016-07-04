function get() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/ajax');
  xhr.send(null);

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.responseURL + xhr.status + ' ' + xhr.statusText);
    }
  };
}

function post() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/ajax');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({'hello': 'hello'}));

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.responseURL + xhr.status + ' ' + xhr.statusText);
    }
  };
}

function remove(id) {
  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', '/ajax/' + id);
  xhr.send(null);

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.responseURL + xhr.status + ' ' + xhr.statusText);
    }
  };
}

function getUnique(id) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/ajax/' + id);
  xhr.send(null);

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.responseURL + xhr.status + ' ' + xhr.statusText);
    }
  };
}

function put(id) {
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', '/ajax/' + id);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({'hello': 'hello'}));

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.responseURL + xhr.status + ' ' + xhr.statusText);
    }
  };
}
