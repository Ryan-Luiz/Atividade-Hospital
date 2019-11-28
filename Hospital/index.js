///<reference path="paciente.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="medicos.ts"/>
///<reference path='hospital.ts'/>
var hospital;
(function (hospital_1) {
    var hospital = new hospital_1.Hospital();
    hospital.setNome("Guilherme Álvaro");
    var paciente = new hospital_1.Paciente();
    paciente.setNome("Ryan");
    paciente.setCpf("999.999.999-99");
    paciente.setcodPaciente(5);
    var paciente2 = new hospital_1.Paciente();
    paciente2.setNome("Gordo");
    paciente2.setCpf("000.000.000-00");
    paciente2.setcodPaciente(7);
    var paciente3 = new hospital_1.Paciente();
    paciente3.setNome("Carlos");
    paciente3.setCpf("111.111.111-11");
    paciente3.setcodPaciente(6);
    var medico = new hospital_1.Medico();
    medico.setNome("Erick");
    medico.setCpf("555.555.555-55");
    medico.setCrm(123456);
    medico.setEspecialidade("Oftamologista");
    medico.setcodFuncionario(1);
    var medico2 = new hospital_1.Medico();
    medico2.setNome("Julia");
    medico2.setCpf("666.666.666-66");
    medico2.setCrm(666666);
    medico2.setEspecialidade("Cirurgião");
    medico2.setcodFuncionario(2);
    var medico3 = new hospital_1.Medico();
    medico3.setNome("Ryan");
    medico3.setCpf("888.888.888-88");
    medico3.setCrm(111222);
    medico3.setEspecialidade("Pediatra");
    medico3.setcodFuncionario(3);
    var enfermeiro = new hospital_1.Enfermeiro();
    enfermeiro.setNome("Alguem");
    enfermeiro.setCpf("444.444.444-44");
    enfermeiro.setCoren(12345);
    enfermeiro.setcodFuncionario(1);
    var enfermeiro2 = new hospital_1.Enfermeiro();
    enfermeiro2.setNome("Daniel");
    enfermeiro2.setCpf("956.632.987.99");
    enfermeiro2.setCoren(54321);
    enfermeiro2.setcodFuncionario(2);
    var enfermeiro3 = new hospital_1.Enfermeiro();
    enfermeiro3.setNome("Carlos Pedro");
    enfermeiro3.setCpf("333.333.333-33");
    enfermeiro3.setCoren(98765);
    enfermeiro3.setcodFuncionario(3);
    hospital.addPaciente(paciente);
    hospital.addPaciente(paciente2);
    hospital.addPaciente(paciente3);
    hospital.addMedico(medico);
    hospital.addMedico(medico2);
    hospital.addMedico(medico3);
    hospital.addEnfermeiro(enfermeiro);
    hospital.addEnfermeiro(enfermeiro2);
    hospital.addEnfermeiro(enfermeiro3);
    var tbPaciente = document.getElementById("paciente");
    var conteudoP = "<tr><th>Paciente</th></tr><tr><td>Codigo</td><td>Nome</td><td>CPF</td></tr>";
    hospital.getPaciente().forEach(function (element) {
        conteudoP += "<tr> <td>" + element.getcodPaciente() + "</td><td>" + element.getNome() + "</td><td>" + element.getCpf() + "</td></tr>";
    });
    tbPaciente.innerHTML = conteudoP;
    var tbMedico = document.getElementById("medico");
    var conteudoM = "<tr><th>Medico</th></tr><tr><td>CRM</td><td>Nome</td><td>Especialidade</td></tr>";
    hospital.getMedico().forEach(function (element) {
        conteudoM += "<tr> <td>" + element.getCrm() + "</td><td>" + element.getNome() + "</td><td>" + element.getEspecialidade() + "</td></tr>";
    });
    tbMedico.innerHTML = conteudoM;
    var tbEnfermeiro = document.getElementById("enfermeiro");
    var conteudoE = "<tr><th>Enfermeiro</th></tr><tr><td>COREN</td><td>Nome</td></tr>";
    hospital.getEnfermeiro().forEach(function (element) {
        conteudoE += "<tr> <td>" + element.getCoren() + "</td><td>" + element.getNome() + "</td></tr>";
    });
    tbEnfermeiro.innerHTML = conteudoE;
})(hospital || (hospital = {}));
