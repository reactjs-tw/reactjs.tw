var ghpages = require('gh-pages');

new Promise(
    (resolve, reject) => {
        ghpages.publish(
            'public', 
            {
                branch: 'master',
                repo: 'https://github.com/reactjs-tw/reactjs-tw.github.io'
            }, 
            err => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            }
        );
    }
)
    .then(() => {
        console.log('done')
    })
    .catch(err => {
        console.error(err)
    })