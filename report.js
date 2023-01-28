const newman = require('newman');

newman.run({

    collection: 'https://api.postman.com/collections/21363025-8c83f80e-c26f-4750-b82a-8ce0cb5fd59e?access_key=PMAT-01GQQPF4S2N721X7JYR0A63V7H&fbclid=IwAR0ZYwO9JMqsXeqqODzbxFe7jYqVh1iryUeMj3yK0DylqygTiQc4fxtf4vs',

    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});