import { PrismaClient } from "@prisma/client"; 
import { Funcionarios } from "../../../core";

class RepositorioFuncionario {
    constructor(private repo: PrismaClient) {}

    
    async criar(funcionario: Funcionarios) {
       try {
        const novoFuncionario = await this.repo.funcionario.create({
            data: {
                name: funcionario.name,
                email: funcionario.email,
                telefone: funcionario.telefone,
                cep: funcionario.cep,
                endereco: funcionario.endereco,
                numero: funcionario.numero,
                complemento: funcionario.complemento,
                bairro: funcionario.bairro,
                cidade: funcionario.cidade,
                estado: funcionario.estado,
                senha: funcionario.senha,
                cargo: funcionario.cargo,
                nivel_acesso: funcionario.nivel_acesso,
                cliente_id: funcionario.cliente_id,
            }
         });

        return novoFuncionario;    
        
       } catch (error) {
        
       }
    }

    async buscarTodos() {
        try {
            return await this.repo.funcionario.findMany();
        } catch (error) {
            console.log("Erro ao buscar funcionarios:", error);
            throw error;            
            
        }
    }

   async buscarPorId(id: string) {
       try {
         return await this.repo.funcionario.findUnique({ where: { id } });
       } catch (error) {
        console.log("Erro ao buscar funcionario por ID:", error);
        throw error;        
        
       }
    }

    async atualizar(id: string, funcionario: Partial<Funcionarios>) {
       try {
        const funcionarioAtualizado = await this.repo.funcionario.update({ where: { id }, data: funcionario });
        return funcionarioAtualizado;
       } catch (error) {
        console.log("Erro ao atualizar funcionario:", error);
        throw error;        
        
       }
    }


    deletar(id: string) {
       try {
         return this.repo.funcionario.delete({ where: { id } });
       } catch (error) {
        console.log("Erro ao deletar funcionario:", error);
        throw error;        
        
       }
    }
}