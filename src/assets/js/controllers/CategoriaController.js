class CategoriaController {

  constructor(){
    this._categoriaService = new CategoriaService()
    this.categorias = new Categorias()
    this._categoriaView = new CategoriaView()
  }  

  montar(){
    this._categoriaService.listarTodas()
        .then(categorias => 
          categorias.map(categoria => 
            this._categorias.adicionar(categoria)))
        .then(() => this._categoriaView.montarListagem(this._categorias))
  }
}
