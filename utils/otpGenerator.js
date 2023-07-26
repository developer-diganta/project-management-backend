const crypto = require('crypto');

function otpGenerator(email) {
  // Get the current timestamp in milliseconds
  const timestamp = Date.now().toString();

  // Combine the email and timestamp
  const data = email + timestamp;

  // Create a SHA-256 hash of the combined data
  const hash = crypto.createHash('sha256').update(data).digest('hex');

  // Extract a 6-digit OTP from the hash
  const otp = hash.substr(0, 6);

  return otp;
}

module.exports = otpGenerator;