import { test } from '../src/index.js';

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully!!!!" + test()
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response!!!" + test();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
