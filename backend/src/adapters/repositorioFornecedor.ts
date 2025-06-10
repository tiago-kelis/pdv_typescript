import { PrismaClient } from "@prisma/client";
import { Fornecedores } from "../../../core";

class repositorioFornecedores {
  constructor(private repo: PrismaClient) {}

  async criar(fornecdor: Fornecedores) {
    try {
      const novoFornecedor =  await this.repo.fornecedor.create({
        data: {
            name: fornecdor.name,
            email: fornecdor.email,
            telefone: fornecdor.telefone,
            cnpj: fornecdor.cnpj,
            endereco: fornecdor.endereco,
            numero: fornecdor.numero,
            complemento: fornecdor.complemeto,
            bairro: fornecdor.bairro,
            cidade: fornecdor.cidade,
            estado: fornecdor.estado
        }            

    })         
    return novoFornecedor;

    } catch (error) {
    console.log("Erro ao criar o fornecedor");
    throw error        
    
    }

  }

  async buscarTodos() {
    try {
      return await this.repo.fornecedor.findMany()
    } catch (error) {
    console.log("Erro ao buscar fornecedores")
    throw error        
    
    }
  }


  async buscarPorId(id: string) {
    try {
      return await this.repo.fornecedor.findUnique({where: {id}})
    } catch (error) {
      console.log("Erro ao buscar fornecedores")
      throw error 
    }
    
  }
}