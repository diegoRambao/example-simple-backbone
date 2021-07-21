var MyMixin = {
    clear: function() {
        this.model.destroy();
    },
    
}

module.exports = MyMixin;