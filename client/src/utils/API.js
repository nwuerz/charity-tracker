import axios from "axios";

export default {
	// Signs in an admin
	adminLogin: function (credentials) {
		return axios.post("api/user/login", credentials);
	},
	// Get charity from the db via id
	getDbCharity: function (id) {
		return axios.get("/api/charity/" + id);
	},
	// Get all charities from the db
	getDbCharities: function () {
		return axios.get("api/charity/");
	},
	// Updates charity in the db via id
	updateDbCharity: function (id, charityData) {
		return axios.put("api/charity/" + id, charityData);
	},
	// Adds a new charity to the db.
	createDbCharity: function (charityData) {
		return axios.post("api/charity", charityData);
	},
	// Deletes a charity from the db - we haven't talked about this feature (that I'm aware of) but we could implement it.
	deleteDbCharity: function (id) {
		return axios.delete("api/charity/" + id);
	},

	charityNavSearch: function (searchTerm) {
		return axios.get("api/charity/nav/" + searchTerm);
	}
};