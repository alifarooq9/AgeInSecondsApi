import { v4 as uuidv4 } from "uuid";

export const generateApiKey = () => {
	const key = uuidv4();
	return key;
};
