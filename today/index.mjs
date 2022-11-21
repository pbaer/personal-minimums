import { printToday } from '../src/index.mjs';

export default async function (context, _req) {
    context.log('Starting execution');
    try {
        context.res = {
            status: 200,
            body: await printToday(req.query.utcOffset)
        };    
    } catch (err) {
        context.res = {
            status: 500,
            body: 'Error'
        };
        context.log(`Error: ${err}`);
    }
}
