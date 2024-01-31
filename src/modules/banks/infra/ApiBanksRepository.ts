import { BankRepository } from '../domain/BankRepository.ts'
import { BanksResponse } from '../domain/BanksResponse.ts'

const API_URL = import.meta.env.VITE_API_URL ?? ''

export function createApiBanksRepository(): BankRepository {
  return {
    getBanks
  }
}
async function getBanks(): Promise<BanksResponse> {
  const response = await fetch(`${API_URL}`)
  return response.json()
}
