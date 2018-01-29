var Utils = Backbone.View.extend({

    initialize:function(){
        var self = this;

        this.translations = {};
    },

    gatherData:function(callback){
        var self = this;
        this.gatherTranslations(function(){
            return callback();
        });
    },

    gatherTranslations:function(callback){
        var self = this;
        d3.csv("data/translations.csv", function(data){
            self.translations[data.key] = {
                en:data.en,
                fr:data.fr,
            };
        }, function(error, rows) {
            console.log(error, rows);
            return callback();
        });
    }
});

module.exports = Utils;;