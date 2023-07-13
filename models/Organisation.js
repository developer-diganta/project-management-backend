Organisation = {
    name:{
        type:String,
        required:true,
		trim:true
    },
    phoneNo:{
        type: Number,
		match:[/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,'Please fill a valid phone number'],
		required:true,
		unique: true
    },
    email: {
		type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
    location:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    notifications:[
        {
			type: String
		}
    ]
}

module.exports = Organisation