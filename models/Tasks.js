function dateValidator(value){
	return this.startDate <= value;
}

Tasks = {
	assignees:[
		{
			type: String
		}
	],
	status:{
		type: String,
		enum: { 
			values: ['Ongoing','Completed', 'Halted', 'Delayed', 'Abandoned'], 
			message: '{VALUE} is not supported' 
		}
	},
	progress: {
		type: Number,
		min:0,
		max:100
	},
	github:{
		type: String,

	},
	notifications: [
		{
			type: String
		}
	],
    startDate: {
		type: Date,
		required: true
	},
    endDate: {
		type: Date,
		required: true,
		validate: [dateValidator, 'Start Date must be less than End Date']
	},
    extension: {
		type: Number,
		min:1
	},
    orgId: {
		type: String,
		required:true
	},
	createdBy:{
		type: String,
		required: true
	},
	title: {
		type: String, 
		required: true,
		trim: true,
		maxlength: 25
	},
	description: {
		type: String,
		required: true,
	}
}

module.exports = Tasks;