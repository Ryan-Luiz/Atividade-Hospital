///<reference path="pessoa.ts" />

namespace hospital{
    export class Funcionario extends Pessoa{
        private _codFuncionario: number;

        public getcodFuncionario(){
            return this._codFuncionario;
        }

        public setcodFuncionario(codigo:number){
            this._codFuncionario = codigo;
        }
    }
}