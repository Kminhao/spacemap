const path = require('path');
const fs = require('fs');
const uuid = require('uuid/v4');

const dbPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'provas.json'
);

const lerProvas = (cb) => {
    try {
        fs.readFile(dbPath, (err, data) => {
            if (err)
                return cb([]);
            return cb(JSON.parse(data.toString()));
        });
    } catch (e) { }
};

class Prova {
    constructor(disciplina, professor, dataProva) {
        this.disciplina = disciplina;
        this.professor = professor;
        this.dataProva = dataProva;
    }
    salvar() {
        lerProvas((provas) => {
            this.id = uuid();
            provas.push(this);
            fs.writeFile(dbPath, JSON.stringify(provas), (err) => { });
        });
    }
    static listar(cb) {
        lerProvas(cb);
    }
    static getProva(id, cb) {
        lerProvas((provas) => {
            let prova = provas.find(v => v.id === id);
            cb(prova);
        });
    }
}

module.exports = Prova;