let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () { // показує теперішню сходинку
        alert(this.step);
    }
};
ladder.up().down().down().down().down().showStep(); 