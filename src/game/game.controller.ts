import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/create.game.dto';
import { GameService } from './game.service';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  findAll(): CreateGameDto[] {
    return this.gameService.findAll();
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto): CreateGameDto {
    return this.gameService.create(createGameDto);
  }
}
