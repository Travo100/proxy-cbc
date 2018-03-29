This proxy will allow you to access API's that cannot be accessed from local files and those that are intended to be accessed from back-end code, not JavaScript.

# Instructions
[Click here to see an example implementation](example-code/proxy-sample-code.html). Or, look in the `example-code` folder.

1. Add the url of the proxy to your project.
```javascript
var apiURL = 'https://proxy-cbc.herokuapp.com/proxy';
```

2. As usual, add the url to whatever API you want.
```javascript
var queryURL = 'YOUR QUERY URL';
```

3. Write a standard AJAX request except we will be using the POST method and our url will be the proxy url.
```javascript
$.ajax({
  url: apiURL,
  method: 'POST',
})
```

4. Now that we've sent a request to the proxy we need to tell the proxy which url it should query. This should be the variable we defined in step 2. Let's modify our AJAX request to include that url.
```javascript
$.ajax({
  url: apiURL,
  method: 'POST',
  data: {
    url: queryURL
  }
})
```

5. Our request should work perfectly now but we still have to do something with the data that will get sent back to us. It should be inside an object which we'll call response.
```javascript
.done(function(response) {
  console.log(response)
});
```

6. Let's put it all together!
```javascript
$.ajax({
  url: apiURL,
  method: 'POST',
  data: {
    url: queryURL
  }
}).done(function(response) {
  console.log(response)
});
```
