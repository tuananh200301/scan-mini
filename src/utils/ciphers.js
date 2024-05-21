const CryptoJS = require('crypto-js');

const encryptFirstLayer = (data, key) => {
	return CryptoJS.AES.encrypt(data, key).toString();
};

const encryptSecondLayer = (data, key) => {
	return CryptoJS.AES.encrypt(data, key).toString();
};

export const encryptLayer = (data, key1, key2) => {
	let firstLayer = encryptFirstLayer(data, key1)
	let secondLayer = encryptSecondLayer(firstLayer, key2)

	let encoded = CryptoJS.enc.Utf8.parse(secondLayer)
	return CryptoJS.enc.Base64.stringify(encoded)
};