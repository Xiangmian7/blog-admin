import server from '../request'

export function loginPost(name: string, password: string) {
  return server.post('/login', {
    name,
    password
  })
}
