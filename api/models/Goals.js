/**
 * Goals
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	schema: true,
	attributes: {
		goalName: "string",
		active: "boolean",
		completed: "boolean",
		tasks: "array"	// array of secondary keys
		// taskCount:"integer",
		// task:[{
		// 	taskID: "integer"
		// }]
		// 	taskID:"integer",
		// 	taskName:"string",
		// 	completed:"boolean",
		// 	startDate:"datetime",
		// 	endDate:"datetime"
		// },
		// endDate:"datetime"
	}

};
