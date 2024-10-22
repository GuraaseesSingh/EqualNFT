require('dotenv').config();
const nodemailer = require('nodemailer');
const connectDB = require('./db'); // Import the DB connection file
const Reward = require('./models/Reward'); // Import the Reward model

// Connect to the database
connectDB();

// Function to send reward notification
const sendRewardNotification = async (userEmail, reward) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Your Reward for Contributing',
    text: `Thank you for your contribution! You have earned: ${reward}`,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Notification sent: ' + info.response);

    // Save reward details to MongoDB
    const newReward = new Reward({ userEmail, reward });
    await newReward.save();
    console.log('Reward saved to MongoDB:', newReward);
  } catch (error) {
    console.error('Error sending reward notification:', error);
  }
};

// Example usage
const userEmail = 'singh.mandeeep2007@gmail.com';
const reward = '$10 Gift Card';

sendRewardNotification(userEmail, reward);
