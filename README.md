# node_auction

* **Commands to Run**

* Using Docker 
``` 
docker build -t challenge . 
docker run -i -v /path/to/test/config.json:/auction/config.json -v /path/to/test/input.json:/input.json challenge ../input.json
```

* Using NPM 
```
npm install  
npm start /path/to/test/input.json
```

* To Run Test Cases (Change Line 2 in app.js to "const inputData= require('../input.json');")
```
npm test
```
