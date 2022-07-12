import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Produto';
import { Categoria } from 'src/app/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Pedido } from 'src/app/Pedido';
import { pedidoItens} from 'src/app/pedidoItens';
import { ProdutoService } from 'src/app/services/produto.service';

import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {


  produtos: Produto[] = [];

  produtosDois: Produto[] = [];
  categorias: Categoria[] = [];

  selectedProduto?: Produto;

  pedidoForm!: FormGroup

  pag : number = 1;
  contador : number = 8;

  pagDois : number = 1;
  contadorDois : number = 8;

  pedidos!: Pedido;
  pedidoItens!: pedidoItens
  array: number[] = []


  animals ='https://i.postimg.cc/TPphxrWM/transferir.jpg';
 
  

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService) {
 
    this.getProdutos();
    this.getCategoria();
   }

  ngOnInit(): void {

    this.pedidoForm = new FormGroup ({
      nomeCliente: new FormControl(''),
      endereco: new FormControl(''),
      telefone: new FormControl('')
    })
  }

  getProdutos(){
    console.log('get produtos()')
    this.produtoService.get().subscribe((produtos) => (this.produtos = produtos));
   // this.primengConfig.ripple = true;
 }

 getCategoria(){

  console.log('get categorias()')
   this.categoriaService.get().subscribe((categoria) => (this.categorias = categoria));
 }
 onSelect(nome:any){

  console.log(nome.value)
  if(nome.value == ''){
    console.log('entrou no if(nome.value == null)')
    this.getProdutos()

  }else{
    console.log('entrou no else')
    this.getProdutoCategoria(nome.value)

  }
 

  console.log('foi selecionado ' + nome.value)
 }

 getProdutoCategoria(nome:string){
  this.produtoService.getProdutoCategoria(nome).subscribe((produtos) => (this.produtos = produtos));
 }


 onSelectDois(Pedido: Produto): void {
  
  this.selectedProduto = Pedido;
 
  this.produtosDois.push(this.selectedProduto)
  let teste = Pedido.codigoProduto


  this.array.push(teste)

  
  
}


Submit()
  {

    const a = 1
    //const obj: pedidoItens = {};

     
    console.log(this.array);
        
        this.pedidos =  this.pedidoForm.value;
   // this.pedidos.pedidoItens.pop(gf )
       // this.pedidos.pedidoItens = [5,2,3]
       this.pedidos.pedidoItens = [];
      console.log('antes do map')
       for(var i of this.array){
       
        this.pedidos.pedidoItens.push({iD_PRODUTO:i});
       }
        
       console.log('depois do map') 
       console.log(this.pedidos.pedidoItens)
      //console.log(this.pedidoForm.value)

     this.CriarPedido(this.pedidos)
        this.array = []
        this.produtosDois = []

        
      // this.pedidoForm.value
  }
  CriarPedido(data:any): void{
    this.produtoService.CriarPedido(data).subscribe(data);
  }


}

