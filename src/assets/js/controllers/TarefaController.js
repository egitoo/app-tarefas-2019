class TarefaController {

  constructor() {
    this._tarefas = new Tarefas()
    this._tarefaService = new TarefaService()
    this._tarefaView = new TarefaView()
  }

  montar(descricao) {
    this._tarefaService.listarTodas(descricao)
      .then(tarefas =>
        tarefas.map(tarefa => this._tarefas.adicionar(tarefa)))
        .then(() => this._tarefaView.montarGrid(this._tarefas))
  }
}
