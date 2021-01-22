function get() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://g.alicdn.com/alilog/mlog/aplus_v2.js", true);
  xhr.onreadystatechange = (x) => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        let string = request.responseText;
        let obj = JSON.parse(string);
        console.log(obj);
      }
    }
  };
  xhr.send(null);
}
get();

function ajax(options) {
  let url = options.url;
  let method = options.method;
  let body = options.body;
  let success = options.success;
  let fail = options.fail;

  let request = new XMLHttpRequest();
  request.open(method, url);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        success.call(undefined, request.responseText);
      } else if (request.status >= 400) {
        fail.call(undefined, request);
      }
    }
  };
  request.send(body);
}
