export function num2Word(n: number, words: string[]) {
	if (words.length < 3) words[2] = words[1]
	let t = n % 100
	if (n > 19) t %= 10

	switch (t) {
		case 1:
			return words[0]
		case 2:
		case 3:
		case 4:
			return words[1]
		default:
			return words[2]
	}
}