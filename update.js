var NeoCities = require('neocities')
var api = new NeoCities('YOURUSERNAME', 'YOURPASSWORD')

Uploading files to your site

// local file path is ./index.js, saved on site as derp.js

api.upload([
  {name: 'derp.js', path: './index.js'}
], function(resp) {
  console.log(resp)
})
