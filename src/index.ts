import server from './app';

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log(`> Server started at http://localhost:${PORT}`)
})