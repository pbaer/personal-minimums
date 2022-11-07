import { printToday } from '../src/index.mjs';

export default async function (context, _req) {
    try {
        // Note, parameters could be taken from req.query.someParamName or req.body?.someParamName
        context.res = {
            status: 200,
            body: await printToday()
        };    
    } catch (err) {
        context.res = {
            status: 500,
            body: 'Error'
        };
        context.log(`Error: ${err}`);
    }
}
