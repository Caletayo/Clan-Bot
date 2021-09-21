const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('El bot sigue encendido.')
});
 
app.listen(3000, () => {
  console.log('Servidor Listo.');
});