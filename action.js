module.exports = function(RED){

    function action(config){
        RED.nodes.createNode(this, config);
        console.log(config);

        RED.actions = {};
        RED.actions[config.name] = (e) => console.log(e);
    }   
    RED.nodes.registerType('Action', action);
}
