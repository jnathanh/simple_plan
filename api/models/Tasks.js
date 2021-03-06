/**
 * Tasks
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	schema: true,
	attributes: {
		goalID: "string",	// shared key
		taskName: "string",
		completed: "boolean",
		week: "integer"
	}

};
