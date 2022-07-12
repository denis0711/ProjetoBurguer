import { Produto } from "./Produto";

import { pedidoItens } from "src/app/pedidoItens";

export interface Pedido {
nomeCliente: string;
endereco: string;
telefone: string;
pedidoItens: pedidoItens[];
}