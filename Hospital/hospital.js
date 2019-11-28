///<reference path="paciente.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="medicos.ts"/>
var hospital;
(function (hospital) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiro = [];
            this._medicos = [];
            this._pacientes = [];
        }
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this._enfermeiro.push(enfermeiro);
        };
        Hospital.prototype.getEnfermeiro = function (enfermeiro) {
            if (enfermeiro === void 0) { enfermeiro = hospital.Enfermeiro; }
            return this._enfermeiro;
        };
        Hospital.prototype.addMedico = function (medicos) {
            this._medicos.push(medicos);
        };
        Hospital.prototype.getMedico = function (medicos) {
            if (medicos === void 0) { medicos = hospital.Medico; }
            return this._medicos;
        };
        Hospital.prototype.addPaciente = function (paciente) {
            this._pacientes.push(paciente);
        };
        Hospital.prototype.getPaciente = function (pacientes) {
            if (pacientes === void 0) { pacientes = hospital.Paciente; }
            return this._pacientes;
        };
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
