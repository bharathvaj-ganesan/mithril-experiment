window.Volunteers = {};

Volunteers.controller = function (attrs) {
  var ctrl = this;

  ctrl.add = function () {
    attrs.volunteers.push( Entry.volunteerVM() )
  };
  ctrl.remove = function (idx) {
    attrs.volunteers.splice(idx, 1)
  };
};

Volunteers.view = function (ctrls, attrs) {
  return m('.volunteers', [

    attrs.volunteers.map(function(volunteer, idx) {
      return m('fieldset', [
        m('legend', "Volunteer #" + (idx+1)),

        m('label', "Name:"),
        m('input[type=text]', {
          value: volunteer.name,
          onchange: function(e) {
            volunteer.name = e.currentTarget.value
          }
        }),
        m('br'),

        m('label', "category:"),
        m('input[type=text]', {
          value: volunteer.category,
          onchange: function(e) {
            volunteer.category = e.currentTarget.value
          }
        }),
        removeAnchor(ctrls, attrs, idx)
      ])
    }),

    m('button', { onclick: ctrls.add }, 'Add another volunteer'),
  ]);
};
function removeAnchor (ctrls, attrs, idx) {
  if (attrs.volunteers.length >= 2) {
    return m('button', { onclick: ctrls.remove.papp(idx) }, 'remove')
  }
}

Function.prototype.papp = function () {
  var slice = Array.prototype.slice
  var fn = this
  var args = slice.call(arguments)
  return function () {
    fn.apply(this, args.concat(slice.call(arguments)))
  }
}
