const API_URL = 'https://dev.obtenmas.com/catom/api/challenge/banks'

export function createApiBanksRepository() {
  return {
    getBanks
  }
}
async function getBanks() {
  const response = await fetch(`${API_URL}`)
  return response.json()
}
