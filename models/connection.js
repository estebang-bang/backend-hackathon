const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:L5HYqRfA7JwdTCJn@admin.8tyiy80.mongodb.net/Ticket';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
