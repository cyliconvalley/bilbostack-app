const cluster = require('cluster');
const debug = process.env.NODE_ENV !== 'production';
const ssl = false;

const PORT = process.env.PORT || 80;

function getNumWorkers() {
    return require('os').cpus().length;
}

if (cluster.isMaster && !debug) {
    const numWorkers = getNumWorkers();
    console.log(`Initializing with ${numWorkers} workers.\nWill listen on port ${PORT}.`);

    for (var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function (worker) {
        console.log(`Worker ${worker.process.pid} is online`);
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
        if (!debug) {
            cluster.fork();
        }
    });
} else {
    const talks = require('./src/data/talks');
    const app = require('./src/app')(talks);
    //    app.listen(PORT, '0.0.0.0');


    const fs = require('fs');
    const http = require('http');
    const https = require('https');

    // Certificate
    if (ssl) {

        const privateKey = fs.readFileSync('/etc/letsencrypt/live/feedback.wecodefest.com/privkey.pem', 'utf8');
        const certificate = fs.readFileSync('/etc/letsencrypt/live/feedback.wecodefest.com/cert.pem', 'utf8');
        const ca = fs.readFileSync('/etc/letsencrypt/live/feedback.wecodefest.com/chain.pem', 'utf8');

        const credentials = {
            key: privateKey,
            cert: certificate,
            ca: ca
        };

        const httpsServer = https.createServer(credentials, app);

        httpsServer.listen(443, () => {
            console.log('HTTPS Server running on port 443');
        });
    }

    const httpServer = http.createServer(app);

    httpServer.listen(80, () => {
        console.log('HTTP Server running on port 80');
    });


}
