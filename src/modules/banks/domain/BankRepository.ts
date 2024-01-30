import { Bank } from './Bank.ts'

export interface BankRepository {
  getBanks(): Promise<Bank[]>
}
