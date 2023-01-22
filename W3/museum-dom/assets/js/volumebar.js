document.getElementById("progress").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + value + '%, #fff ' + value + '%, white 100%)'
};
document.getElementById("volume__bar").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + value + '%, #fff ' + value + '%, white 100%)'
};