//CODE
const http = require('http');
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keylMkRVCV25NxOBl'}).base('appW1Vv1p4IHxtiWQ');

export const serverAirtable = http.createServer((req, res) => { 
  let body = '';
  req.on('data', data => {
    body += data;
  });
  req.on('end', () => {
    body = JSON.parse(body);

base('tblX1jGmYZoqyHrlE').select({
    // Selecting the first n records in All furniture:
    maxRecords: 14,
    view: "MainTable"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
       console.log('Title', record.get('title')); 
        console.log('id', record.get('ID')); 
        res.end(record.get('title'));
    });
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
      });
    });
  });   