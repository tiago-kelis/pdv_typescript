import { Cliente } from "./cliente";

export interface Funcionarios extends Cliente {
    senha: string
    cargo: string
    nivel_acesso: string
    cliente_id: string
        
}