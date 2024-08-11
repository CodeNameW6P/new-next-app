import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
		},
		personal: {
			name: {
				type: String,
				default: "",
			},
			nidSmartCard: {
				type: String,
				default: "",
			},
		},
		dps: [
			{
				complete: {
					type: Boolean,
					default: false,
				},
				income: {
					profession: {
						type: String,
						default: "",
					},
					monthlyIncome: {
						type: String,
						default: "",
					},
				},
				address: {
					house: {
						type: String,
						default: "",
					},
					road: {
						type: String,
						default: "",
					},
				},
			},
		],
	},
	{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
