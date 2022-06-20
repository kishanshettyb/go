import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

const ck = "ck_b9f3b1e25b6bf9823635e186fb9280180d94d518";
const cs = "cs_14a6284aae43affa82d3694d6f2378aea23036cf";
const baseURL = "https://goservices.co.in/wp-json";

const Woocommerce = {
	getProducts: () => {
		return makeRequest("/wc/v3/products");
	},
	getCategories: () => {
		return makeRequest("/wc/v3/products/categories");
	},
	getProductByID: (id) => {
		return makeRequest("/wc/v3/products/" + id);
	}
};

function makeRequest(endpoint, method = "GET") {
	const oauth = getOauth();

	const requestData = {
		url: baseURL + endpoint,
		method
	};

	const requestHTTP =
		requestData.url + "?" + jQuery.param(oauth.authorize(requestData));

	return axios.get(requestHTTP);
}

function getOauth() {
	return Oauth({
		consumer: {
			key: ck,
			secret: cs
		},
		signature_method: "HMAC-SHA1",
		hash_function: function (base_string, key) {
			return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
		}
	});
}

export default Woocommerce;
