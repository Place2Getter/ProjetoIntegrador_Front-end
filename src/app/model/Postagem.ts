import { Usuario } from "./Usuario"
import { Tema } from "./Tema"
import { SafeResourceUrl } from "@angular/platform-browser"

export class Postagem {

  public id: number
  public titulo: string
  public descricao: string
  public curtir: number
  public descurtir: number
  public dataPublicacao: Date
  public liveLink: string
  public urlSafe: SafeResourceUrl
  public usuario: Usuario
  public tema: Tema
}
