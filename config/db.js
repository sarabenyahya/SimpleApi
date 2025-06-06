const mongoose = require('mongoose');
require('dotenv').config()


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // permet d'utiliser les nouvelles fonctionnalités de Mongoose en se basant sur la nouvelle API MongoDB
            useNewUrlParser: true,
            
        });
        console.log('✅ MongoDB connecté avec succès');
    } catch (error) {
        console.error('❌ Erreur de connexion à MongoDB :', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;