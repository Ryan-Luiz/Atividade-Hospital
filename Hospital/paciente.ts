  
///<reference path="pessoa.ts" />

namespace hospital{
    export class Paciente extends Pessoa{
        private _codPaciente: number;

        public getcodPaciente(){
            return this._codPaciente;
        }

        public setcodPaciente(codigo:number){
            this._codPaciente = codigo;
        }
    }
}