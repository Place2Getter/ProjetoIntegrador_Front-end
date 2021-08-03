
import {Postagem} from "./Postagem"
export class Usuario
{
  public id: number
  public nomeUsuario: string
  public email: string
  public senha: string
  public imagemUsuario: string
  public mentor: string
  public ocupacaoProfissional: string
  public habilidade: string


  public postagem: Postagem[]
}
