export function getAgeInSeconds(year: number, month: number, day: number) {
	const birthDate = new Date(year, month - 1, day); // months are 0-indexed in JS, so subtract 1 from the month
	const now = new Date();
	const ageInSeconds = (now.getTime() - birthDate.getTime()) / 1000; // divide by 1000 to convert milliseconds to seconds
	return ageInSeconds;
}
