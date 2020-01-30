var assert = require('assert');
var request = require('../lib/async-request')

describe('Test GET route', function() {
    it('should return status code 200 if request is successfull', async function() {
        try{
            await request.get("http://urlcheck.codechem.com:3210/200");
            assert.ok(true);
        }
        catch(ex){
            assert.ok(false);
        }
    });
    it('should return error if it is bad request', async function() {
        try{
            await request.get("http://urlcheck.codechem.com:3210/400");
            assert.ok(false);
        }catch(ex){
            if(ex.status === 400){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    });
    it('should return error if page not found', async function() {
        try{
            await request.get("http://urlcheck.codechem.com:3210/404");
            assert.ok(false);
        }catch(ex){
            if(ex.status === 404){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    });
    it('should return error if it is internal server error', async function() {
        try{
            await request.get("http://urlcheck.codechem.com:3210/500");
            assert.ok(false);
        }catch(ex){
            if(ex.status === 500){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    }); 
});

describe('Test DELETE route', function() {
    it('should return status code 200 if request is successfull', async function() {
        try{
            await request.delete("http://urlcheck.codechem.com:3210/200");
            assert.ok(true);
        }
        catch(ex){
            assert.ok(false);
        }
    });
    it('should return error if it is bad request', async function() {
        try{
            await request.delete("http://urlcheck.codechem.com:3210/400");
            assert.ok(false);
        }catch(ex){
            if(ex.status === 400){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    });
    it('should return error if page not found', async function() {
        try{
            await request.delete("http://urlcheck.codechem.com:3210/404");
            assert.ok(false);
        }catch(ex){
            if(ex.status === 404){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    });
    it('should return error if it is internal server error', async function() {
        try{
            await request.delete("http://urlcheck.codechem.com:3210/500");
            assert.ok(false);
        }catch(ex){
            if(ex.status === 500){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    }); 
});

describe('Test POST route', function() {
    it('should return status code 200 if request is successfull', async function() {
        try{
            await request.post("http://urlcheck.codechem.com:3210/200", { "test": "test" });
            assert.ok(true);
        }
        catch(ex){
            assert.ok(false);
        }
    });
    it('should return error if it is bad request', async function() {
        try{
            await request.post("http://urlcheck.codechem.com:3210/400", {"test": "test"});
            assert.ok(false);
        }catch(ex){
            if(ex.status === 400){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    });
    it('should return error if page not found', async function() {
        try{
            await request.post("http://urlcheck.codechem.com:3210/404", {"test": "test"});
            assert.ok(false);
        }catch(ex){
            if(ex.status === 404){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    });
    it('should return error if it is internal server error', async function() {
        try{
            await request.post("http://urlcheck.codechem.com:3210/500", {"test": "test"});
            assert.ok(false);
        }catch(ex){
            if(ex.status === 500){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    }); 
});

describe('Test PUT route', function() {
    it('should return status code 200 if request is successfull', async function() {
        try{
            await request.put("http://urlcheck.codechem.com:3210/200", { "test": "test" });
            assert.ok(true);
        }
        catch(ex){
            assert.ok(false);
        }
    });
    it('should return error if it is bad request', async function() {
        try{
            await request.put("http://urlcheck.codechem.com:3210/400", {"test": "test"});
            assert.ok(false);
        }catch(ex){
            if(ex.status === 400){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    });
    it('should return error if page not found', async function() {
        try{
            await request.put("http://urlcheck.codechem.com:3210/404", {"test": "test"});
            assert.ok(false);
        }catch(ex){
            if(ex.status === 404){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    });
    it('should return error if it is internal server error', async function() {
        try{
            await request.put("http://urlcheck.codechem.com:3210/500", {"test": "test"});
            assert.ok(false);
        }catch(ex){
            if(ex.status === 500){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    }); 
});

describe('Test PATCH route', function() {
    it('should return status code 200 if request is successfull', async function() {
        try{
            await request.patch("http://urlcheck.codechem.com:3210/200", { "test": "test" });
            assert.ok(true);
        }
        catch(ex){
            assert.ok(false);
        }
    });
    it('should return error if it is bad request', async function() {
        try{
            await request.patch("http://urlcheck.codechem.com:3210/400", {"test": "test"});
            assert.ok(false);
        }catch(ex){
            if(ex.status === 400){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    });
    it('should return error if page not found', async function() {
        try{
            await request.patch("http://urlcheck.codechem.com:3210/404", {"test": "test"});
            assert.ok(false);
        }catch(ex){
            if(ex.status === 404){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    });
    it('should return error if it is internal server error', async function() {
        try{
            await request.patch("http://urlcheck.codechem.com:3210/500", {"test": "test"});
            assert.ok(false);
        }catch(ex){
            if(ex.status === 500){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
        }
    }); 
});
