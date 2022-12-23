const propertyAccessTest = require("./ConfigurationFile.json")


/**
 * 
 * @param {Executor that invokes the developer set up function on file index.js} execute 
 * @param {Request parameter} req 
 * @param {Response parameter} res 
 * @param {Cache proxy instance, with methods that handle the connection, set and get operations with the caching systems} cache_proxy 
 * @returns 
 */
async function FunctionExecutionDecider(execute, req, res, cache_proxy) {
    try {
                    var functionResult
                    functionResult = await cache_proxy.GetValueByKey(propertyAccessTest.cachingService, req) 
                    
                    if (functionResult == undefined) {
                        functionResult = await execute(req, res);
                        cache_proxy.SetValue(propertyAccessTest.cachingService, req)
                    }
                    else {
                        return functionResult
                    }
                    return functionResult

                } catch (err) {
                    console.error(err);
                  }
}

module.exports.FunctionExecutionDecider = FunctionExecutionDecider;