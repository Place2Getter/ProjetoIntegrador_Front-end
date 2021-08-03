import { Usuario } from "./Usuario"
import { Tema } from "./Tema"

export class Postagem {

  public id: number
  public titulo: string
  public descricao: string
  public curtidas: number

  public usuario: Usuario
  public tema: Tema
}
