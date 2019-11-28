///<reference path="paciente.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="medico.ts"/>

namespace hospital{

    export class Hospital{

        private _nome: string;
        private _enfermeiro: Array<Enfermeiro>=[];
        private _medicos: Array<Medico>=[];
        private _pacientes: Array<Paciente>=[];

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public addEnfermeiro(enfermeiro:Enfermeiro){
             this._enfermeiro.push(enfermeiro);
        }

        public getEnfermeiro(enfermeiro = Enfermeiro){
            return this._enfermeiro;
        }

        public addMedico(medicos:Medico){
             this._medicos.push(medicos);
        }

        public getMedico(medicos = Medico){
            return this._medicos;
        }

        public addPaciente(paciente:Paciente){
             this._pacientes.push(paciente);
        }

        public getPaciente(pacientes = Paciente){
            return this._pacientes;
        }
    }
}