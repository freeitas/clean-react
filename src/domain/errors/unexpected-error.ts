export class UnexpectedError extends Error {
  constructor () {
    super('Erro inesperado. Tente novamente.')
    this.name = 'UnexpectedError'
  }
}
