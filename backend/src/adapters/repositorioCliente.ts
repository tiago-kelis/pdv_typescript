import { PrismaClient } from "@prisma/client";
import { Cliente } from "../../../core";

export class RepositorioCliente {
    constructor(private repo: PrismaClient) {}

    
    async criar(cliente: Cliente) {
        try {
            const novoCliente = await this.repo.cliente.create({
                data: {        
                    name: cliente.name,
                    email: cliente.email,
                    telefone: cliente.telefone,
                    cep: cliente.cep,
                    endereco: cliente.endereco,
                    numero: cliente.numero,
                    complemento: cliente.complemento,
                    bairro: cliente.bairro,
                    cidade: cliente.cidade,
                    estado: cliente.estado
                }
            });

            return novoCliente;
        } catch (error) {
            console.error("Erro ao criar cliente:", error);
            throw error;
        }
    }

    
    async buscarTodos() {
        try {
            const clientes = await this.repo.cliente.findMany();
            return clientes;
        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
            throw error;
        }
    }

    
    async buscarPorId(id: string) {
        try {
            const cliente = await this.repo.cliente.findUnique({ where: { id } });

            if (!cliente) {
                throw new Error("Cliente não encontrado");
            }

            return cliente;
        } catch (error) {
            console.error("Erro ao buscar cliente por ID:", error);
            throw error;
        }
    }

    
    async atualizar(id: string, cliente: Partial<Cliente>) {
        try {
            const clienteAtualizado = await this.repo.cliente.update({
                where: { id },
                data: cliente
            });

            return clienteAtualizado;
        } catch (error) {
            console.error("Erro ao atualizar cliente:", error);
            throw error;
        }
    }

    
    async deletar(id: string) {
        try {
            await this.repo.cliente.delete({ where: { id } });
            return { mensagem: "Cliente deletado com sucesso" };
        } catch (error) {
            console.error("Erro ao deletar cliente:", error);
            throw error;
        }
    }
}