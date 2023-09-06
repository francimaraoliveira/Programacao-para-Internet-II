import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Render,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService, Produto } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  hello(@Query('nome') nome = 'Visitante') {
    const context = {
      nome,
      qtd_letras: nome.length,
    };
    return context;
  }


  @Get('/investimento')
  @Render('investimento')
  doNothing() {
    return;
  }

  @Post('/add')
  adicionarProduto(@Res() res: Response, @Body() input: Produto) {
    this.appService.addProduct(input);

    res.redirect('/investimento');
  }

  @Get('/list')
  listarProdutos(@Res() res: Response) {
    this.appService.listProducts();

    res.redirect('/investimento');
  }

  @Post('/delete')
  deletarProduto() {}

  @Post('/update')
  atualizarProduto() {}
}



