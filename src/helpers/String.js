String.prototype.startsWith = function(str) {
    return ( str === this.substr( 0, str.length ) );
}