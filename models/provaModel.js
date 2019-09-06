const uuid = require('uuid/v4');

const ProvaDb = require('../db/models').Prova;
class Prova {
    constructor(disciplina, professor, dataProva) {
        this.disciplina = disciplina;
        this.professor = professor;
        this.dataProva = dataProva;
    }
    salvar(cb) {
        if (this.id) {
            ProvaDb.findByPk(this.id).then((p) => {
                p.update(this).finally(cb);
            });
        } else {
            this.id = uuid();
            ProvaDb.create(this).finally(cb);
        }
    }
    delete(cb) {
        ProvaDb.findByPk(this.id).then((p) => {
            p.destroy().finally(cb);
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
        ProvaDb.findAll().then((provas) => {
            cb(provas.map(p => Prova.createFromJson(p)));
        }).catch(console.error);
    }
    static getProva(id, cb) {
        ProvaDb.findByPk(id).then((prova) => {
            cb(Prova.createFromJson(prova));
        }).catch(console.error);
    }
}

module.exports = Prova;