import express from 'express'

const app = express()

// Criação de Rotas
app.get('/users', (request, response) => {
  console.log('Listagem de Usuários')

  response.json([
    'Kleber',
    'Kleiton',
    'Cleide'
  ])
})

// Configurando um porta
app.listen(3333)