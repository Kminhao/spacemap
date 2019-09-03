const path = require('path');
const fs = require('fs');

const dbPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'provas.json'
);

const lerProvas = () => {
    let provas = [];
    try {
        let data = fs.readFileSync(dbPath);
        provas = JSON.parse(data.toString());
    } catch (e) {}
    return provas;
};

class Prova {
    constructor(disciplina, professor, dataProva) {
        this.disciplina = disciplina;
        this.professor = professor;
        this.dataProva = dataProva;
    }
    salvar() {
        let provas = lerProvas();
        provas.push(this);
        fs.writeFileSync(dbPath, JSON.stringify(provas));
    }
    static listar() {
        let provas = lerProvas();
        return provas;
    }
}

module.exports = Prova;