const API_ROOT = "https://api.github.com"
const CLIENT_ID = "7bb4f90952af392365c9"
const CLIENT_SECRET = "4dcbcde682d20c1e8be46ede55ce15a445843cdd"
const AUTH = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

export const searchUsers = async userName => {
  const URL = `${API_ROOT}/search/users?q=${userName}&${AUTH}`
  const results = await fetch(URL)
  const users = await results.json()
  return users.items
}


export const getUserDetais = async userLogin => {
  const URL = `${API_ROOT}/users/${userLogin}?${AUTH}`
  const results = await fetch(URL)
  return await results.json()
}