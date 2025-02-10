const nodemailer = require('nodemailer');

// Configurar o Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use o serviço de e-mail que preferir
  auth: {
    user: process.env.EMAIL_USER, // E-mail do remetente
    pass: process.env.EMAIL_PASS, // Senha do remetente
  },
});

// Função para enviar e-mail
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso para:', to);
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error.message);
  }
};

module.exports = { sendEmail };