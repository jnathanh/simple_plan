/**
 * Goals
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		goalName: "string",
		active: "boolean",
		taskCount:"integer",
		task:{
			taskID:"integer",
			taskName:"string",
			completed:"boolean",
			startDate:"datetime",
			endDate:"datetime"
		},
		completed:"boolean",
		endDate:"datetime"
	}

};
