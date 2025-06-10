import { Request, Response } from "express";
import { RepositorioCliente } from "../adapters/repositorioCliente";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const repo = new RepositorioCliente(prisma);

export class ClienteController {

    
    async create(req: Request, res: Response) {
        try {
            const cliente = req.body;
            const novoCliente = await repo.criar(cliente);
            return res.status(201).json(novoCliente);
        } catch (error) {
            console.error("Erro ao criar cliente:", error);
            return res.status(500).json({ mensagem: "Erro ao criar cliente" });
        }
    }

    
    async getListAll(req: Request, res: Response) {
        try {
            const clientes = await repo.buscarTodos(); // Usando o repositório
            return res.status(200).json(clientes);
        } catch (error) {
            console.error("Erro ao listar clientes:", error);
            return res.status(500).json({ mensagem: "Erro ao listar clientes" });
        }
    }

    
    async getForId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const cliente = await repo.buscarPorId(id);

            if (!cliente) {
                return res.status(404).json({ mensagem: "Cliente não encontrado" });
            }

            return res.status(200).json(cliente);
        } catch (error) {
            console.error("Erro ao buscar cliente:", error);
            return res.status(500).json({ mensagem: "Erro ao buscar cliente" });
        }
    }

    
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;
            const clienteAtualizado = await repo.atualizar(id, dadosAtualizados);

            return res.status(200).json(clienteAtualizado);
        } catch (error) {
            console.error("Erro ao atualizar cliente:", error);
            return res.status(500).json({ mensagem: "Erro ao atualizar cliente" });
        }
    }


    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const resultado = await repo.deletar(id);
            return res.status(200).json(resultado);
        } catch (error) {
            console.error("Erro ao deletar cliente:", error);
            return res.status(500).json({ mensagem: "Erro ao deletar cliente" });
        }
    }
}