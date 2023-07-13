Members = {
	orgId: String,
	name: {
		type:String,
		required:true,
		trim:true
	},
	email: {
		type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	phoneNo: {
		type: Number,
		match:[/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,'Please fill a valid phone number'],
		required:true,
		unique: true
	},
	tasks:[
		{
			type: String
		}
	],
	notifications: [
		{
			type: String
		}
	],
	meeting:[
		{
			type: String
		}
	],
	password:{
		type: String,
		required: true
	},
	pendingOrgId: [
		{
			type: String
		}
	]
}

module.exports = Members;