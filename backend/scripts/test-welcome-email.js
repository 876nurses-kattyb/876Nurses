require('dotenv').config();
const gmailService = require('../services/gmailService');

(async () => {
  try {
    console.log('Sending test welcome email to recipient@example.com...\n');
    const result = await gmailService.sendWelcomeEmail({
      email: 'recipient@example.com',
      name: 'Test User'
    });
    
    if (result.success) {
      console.log('✅ Welcome email sent successfully!');
      console.log('Check your inbox at recipient@example.com\n');
    } else {
      console.log('❌ Failed to send email:', result.error);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
})();
