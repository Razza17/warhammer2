const fs = require('fs');

const saveData = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data => {
            if(err) {
                return reject(err);
            }
            resolve();
        })
    });
};

const data = () => {
    let details = {};

    details.age = 33;
    details.sexe = 'Masculin';
    details.yeux = 'Marron';
    details.taille = '1m75';
};

saveData('data/test.json', data());