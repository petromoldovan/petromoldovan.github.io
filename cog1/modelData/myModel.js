/**
 * MyShape object.
 * 
 * @namespace cog1.data
 * @module empty
 */
define(["exports", "data"], function(exports, data) {
	"use strict";

	/**
	 * Create an instance of the model defined in this module.
	 * 
	 * @parameter object with fields:
	 * @returns instance of this model.
	 */
	exports.create = function(parameter) {

		if(parameter) {
			var scale = parameter.scale;
		}
		// Set default values if parameter is undefined.
		if(scale == undefined){
			scale = 200;
		}

		// Instance of the model to be returned.
		var instance = {};

		// Vertex indices:
		instance.vertices = [
			// x, y, z
			[-1,-1, 1],
			[ 1,-1, 1],
			[ 1,-1,-1],
			[-1,-1,-1],
			// top (y=+1)
			[ 0,1,0]
		];

		instance.polygonVertices = [
			[3,2,1,0],
			[4,3,0],
			[4,3,2],
			[4,2,1],
			[4,1,0]
		];

		instance.polygonColors = [4,3,2,1,0];

		data.applyScale.call(instance, scale);

		return instance;		
	};
});