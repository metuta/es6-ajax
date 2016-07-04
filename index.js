function ajax(method, url, data=null) {
  return new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open(method, url, true);

    req.onload = () =>
      req.status == 200 ? resolve(req.response) : reject(Error(`${req.status} ${req.statusText}`));

    if (method == 'PUT' || method == 'POST') {
      req.setRequestHeader('Content-type', 'application/json');
      data = JSON.stringify(data);
    }
    req.send(data);
  });
}

class http {
  static get(url, data) {
    return ajax('GET', url);
  }
  static post(url, data) {
    return ajax('POST', url, data);
  }
  static delete(url) {
    return ajax('DELETE', url);
  }
  static put(url, data) {
    return ajax('PUT', url, data);
  }
}

export {ajax, http};
