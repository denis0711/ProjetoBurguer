import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Produto';
import { Categoria } from 'src/app/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {


  produtos: Produto[] = [];
  categorias: Categoria[] = [];

 
  pag : number = 1;
  contador : number = 8;



  animals ='https://i.postimg.cc/TPphxrWM/transferir.jpg';
 
  

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService) {
 
    this.getProdutos();
    this.getCategoria();
   }

  ngOnInit(): void {
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

}

