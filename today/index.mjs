import { test } from '../src/index.mjs';

export default async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    try {
        const name = (req.query.name || (req.body && req.body.name));
        const responseMessage = name
            ? "Hello, " + name + ". This HTTP triggered function executed successfully!!!!" + await test()
            : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response!!!" + await test();
    
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };    
    } catch (err) {
        context.log(`Error: ${err}`);
    }
}
