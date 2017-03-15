var Entry = (function() {

    var store = [],
        idCounter = 1,
        all = function () {
            return store;
        },
        create = function (attrs) {
            attrs.id = (idCounter += 1);
            attrs.enteredAt = Date.now();
            store.push(attrs);
            return attrs;
        },
        vm = function () {
            return {
                enteredAt: null,
                volunteers: [ volunteerVM() ]
            };
        },
        volunteerVM = function () {
            return {
                name: '',
                category: ''
            };
        };
    return {
        all : all,
        create : create,
        vm : vm,
        volunteerVM : volunteerVM
    }
})();
