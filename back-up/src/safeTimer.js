// Copyright zhangyunling;

(function (global, factory) {
    var _g = global.Utils || global;

    if(typeof exports === 'object' && typeof module !== 'undefined'){
        module.exports = factory(_g)
    }else if(typeof define === 'function' && define.amd){
        define(function() {
            return factory(_g);
        });
    }else{
        _g[modalName] = factory(_g);
    }

}(this, function (global) {
    return "";
}));

