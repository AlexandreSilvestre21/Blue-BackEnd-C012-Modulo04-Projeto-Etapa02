import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create.game.dto';
import { Game } from './entities/game.entities';

@Injectable()
export class GameService {

  games: Game[] = [];



  findAll() :CreateGameDto [] {
    return this.games;
  }

  create(createGameDto: CreateGameDto) :CreateGameDto {
    let id = this.games.length+1
    const game: Game = {
      id:id, ...createGameDto
    }
    this.games.push(game);
    return game;

  }

}


