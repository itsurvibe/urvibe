const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');
const fs = require('fs')

const app = express();
const PORT = 3000;
const MONGODB_URI = 'mongodb+srv://itsurvibe:itsurvibe@cluster0.elprrpe.mongodb.net/'; 

app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB
const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB Atlas:', err);
  });

app.post('/registro', async (req, res) => {
  const { correo } = req.body;

  try {
    const db = client.db();
    const collection = db.collection('usuarios');

    const existingUser = await collection.findOne({ correo });
    if (existingUser) {
      return res.status(400).json({ mensaje: 'El correo electrónico ya está registrado', tipoError: 'correoExistente' });
    }

    await collection.insertOne({ correo });

    const config = {
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'its.urvibe.app@gmail.com',
        pass: 'bzid nfjp rviw lcix'
      }
    };

    const htmlContent = fs.readFileSync('./formatGMAIL/template.html')

    const message = {
      from: 'droplife426@gmail.com',
      to: correo,
      subject: "Registro exitoso",
      html: htmlContent
    };

    const transport = nodemailer.createTransport(config);

    try {
      const info = await transport.sendMail(message);
      console.log(info);
    } catch (error) {
      console.error(error);
    }

    res.json({ mensaje: `Correo ${correo} registrado exitosamente` });
  } catch (error) {
    console.error('Error al registrar correo:', error);
    res.status(500).json({ mensaje: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
