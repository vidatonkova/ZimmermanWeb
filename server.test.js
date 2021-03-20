const { deepEqual } = require('assert');
var should = require('should'), 
    fs = require('fs'),
    request = require('request');
var assert = require('assert');

/* Globals */
var listings;
var assert;
/*
  Describe blocks organize your unit tests into distinct categories of functionality.
  They can be nested.
 */
describe('UF Directory Server Unit Tests', function() 
{
  
  /*
    This before hook loads the JSON data to the listings variable, so that we can compare 
    the response to 'http://localhost:8080/listings' to the data we expect to recieve. 
   */
  before(function(done) 
  {
    fs.readFile('listings.json', 'utf8', function(err, data) 
    {
      listings = JSON.parse(data);
      /*
        Calling done() will pass code execution to the next appropriate block of code. 
        In this case, execution will pass to the first it() statement.  
       */
      done();
    });
  });
  
  describe('Server responds to requests', function() 
  {
    it('should respond', function(done) 
    {
      /*
        The request module allows us to make HTTP requests. This module could also be useful in 
        making API calls to web services you make use of in your application, such as Google Maps. 
       */
      request.get('http://localhost:8080', function(error, response, body) 
      {
        /*
          The 'should' module is an assertion library. Assertions allow us to compare the functions
          that we are testing to the values we expect to receive back. 
          
          In this unit test we are only testing the existence of a response, and are not concerned 
          with what is contained in the response. We can view this as a very general, binary check, not specific. 
        */
      should.not.exist(error);
      should.exist(response);
      done();
        /*
          In first statement, assert what we should not see
          In the second, assert what we should  see.
          Finally, call "done();" to move on to the next test.
        */
         
      });
    });
  });


	// In these tests, we will be checking more specific content using object and primitive comparisons that have specific values.

});