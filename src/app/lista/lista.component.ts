import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public produtos: any[] = []
  constructor(private produtoService: ProdutoService) { }//1:19
  //constructor(private produtoService: ProdutoService){} //1:19 
  //Não digitar manualmente aceitar sujestoes.
  //Para aparecer lista no localhost 4000   //1:20
  ngOnInit(): void{
    this.listarProdutos();
    }
    
  listarProdutos() {
    this.produtoService.getProdutos().subscribe(
      produtosDaApi => {
        this.produtos = produtosDaApi
      }

    )

  }

}
