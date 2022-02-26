import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { ProductDTO } from 'src/DTO/product-dto';

@Controller('produtos')
export class ProdutosController {
  @Get()
  index(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  show(@Param() params): string {
    return `Dados do produto ${params.id}`;
  }

  @Post()
  create(@Body() product): string {
    console.log(product);
    return 'Produto criado';
  }
}
