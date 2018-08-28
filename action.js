module.exports = function(RED) {
  	function mssql(config) {
	    RED.nodes.createNode(this, config);

      var node = this;

	}
  	RED.nodes.registerType('ACTION', mssql);
};
