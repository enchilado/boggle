window.onload = () => {
	const root = document.getElementById("root");

	const weights = {
		  'A': 8.167
		, 'B': 1.492
		, 'C': 2.782
		, 'D': 4.253
		, 'E': 12.702
		, 'F': 2.228
		, 'G': 2.015
		, 'H': 6.094
		, 'I': 6.966
		, 'J': 0.153
		, 'K': 0.772
		, 'L': 4.025
		, 'M': 2.406
		, 'N': 6.749
		, 'O': 7.507
		, 'P': 1.929
		, 'Qu': 0.095
		, 'R': 5.987
		, 'S': 6.327
		, 'T': 9.056
		, 'U': 2.758 - 0.095 // freq(u) - freq(q)
		, 'V': 0.978
		, 'W': 2.360
		, 'X': 0.150
		, 'Y': 1.974
		, 'Z': 0.074
		};
	
	const distribution = makeDistribution(weights);
	
	const letters = [];
	for (let i = 0; i < 16; i++) {
		letter = randomElement(distribution);
		rotation = randomElement([0, 90, 180, 270]);
		createLetter(root, letter, rotation);
	}
}

function randomElement(list) {
	const index = Math.floor(Math.random() * list.length);
	return list[index];
}

function makeDistribution(weights) {
	const distribution = []
	for (const [key, weight] of Object.entries(weights)) {
		const resolution = 10;
		const frequency = Math.floor(weight * resolution);
		for (let i = 0; i < frequency; i++) {
			distribution.push(key);
		}
	}
	return distribution;
}

function createLetter(root, letter, rotation) {
	const node = document.createElement("div");
	const textNode = document.createElement("span");

	textNode.textContent = letter;
	textNode.style.transform = `rotate(${rotation}deg)`;

	const shouldUnderline = ['W', 'M', 'Z']
	if (shouldUnderline.includes(letter)) {
		textNode.classList.add('underline');
	}

	node.appendChild(textNode);
	root.appendChild(node);
}
