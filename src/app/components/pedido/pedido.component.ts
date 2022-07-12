import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Produto';
import { Categoria } from 'src/app/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Pedido } from 'src/app/Pedido';
import { pedidoItens} from 'src/app/pedidoItens';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

 pedidos: Pedido[] =[];

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService) { 

    this.MostrarPedido();
  }

  ngOnInit(): void {
  }



  MostrarPedido(){
    this.produtoService.MostrarPedido().subscribe((pedido) => (this.pedidos = pedido));
  }

}
