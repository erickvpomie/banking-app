import { BanksResponse } from './BanksResponse.ts'

export interface BankRepository {
  getBanks(): Promise<BanksResponse>
}
