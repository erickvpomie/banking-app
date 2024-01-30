import { BankRepository } from '../../domain/BankRepository.ts'

export async function getBanks(bankRepository: BankRepository) {
  return bankRepository.getBanks()
}
