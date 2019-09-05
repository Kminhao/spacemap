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
            let provas = JSON.parse(data.toString()).map(Prova.createFromJson);
            return cb(provas);
        });
    } catch (e) { }
};

const escreverProvas = (provas, cb) => {
    fs.writeFile(dbPath, JSON.stringify(provas), (err) => { cb(err) });
};

class Prova {
    constructor(disciplina, professor, dataProva) {
        this.disciplina = disciplina;
        this.professor = professor;
        this.dataProva = dataProva;
    }
    salvar(cb) {
        lerProvas((provas) => {
            this.id = uuid();
            provas.push(this);
            escreverProvas(provas, cb);
        });
    }
    delete(cb) {
        lerProvas((provas) => {
            let filteredProvas = provas.filter(p => p.id !== this.id);
            escreverProvas(filteredProvas, cb);
        });
    }
    static createFromJson(json) {
        let prova = new Prova(
            json.disciplina,
            json.professor,
            json.dataProva
        );
        prova.id = json.id;
        return prova;
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