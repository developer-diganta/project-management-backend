OTP = {
    otp:{
        type:String,
    },
	email: {
		type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
    expiresAt: {
        type: Date, // Use Date instead of Time
        default: Date.now,
        expires: 600, // Expires after 10 minutes (600 seconds)
      },
  };
  
  module.exports = OTP;
  