import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do Jogo.',
    example: 'Fifa 2022',
  })
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'Jogo de futebol',
  })
  description: string;
}
