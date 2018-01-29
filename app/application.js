var App = {
    $body:$("body"),

    init: function init() {
        this.$App = $("#App");

        var Utils = require("utils");
        this.utils = new Utils();

        var HeaderView = require("views/headerView");
        this.headerView = new HeaderView();

        var FooterView = require("views/footerView");
        this.footerView = new FooterView();

        var Router = require("router");
        this.router = new Router();

        Backbone.history.start();
    },

    updateFromRouter:function(){
        var self = this;
        this.utils.gatherData(function(){
            self.render();
        });
    },

    render:function(){
    	this.headerView.render();
        this.footerView.render();
    	this.bindEvents();
        console.log("Antho ?");
    },


    bindEvents:function(){
    	var self = this;
    },

};

module.exports = App;
window.App = App;