import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://app:240922@cluster3.kbekh.mongodb.net/LINKEDIN-CLONE-MASTER-MAIN');
		console.log('db Connected');
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1);
	}
};
