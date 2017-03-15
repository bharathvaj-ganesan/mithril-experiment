window.EntryForm = {};

EntryForm.controller = function () {
  var ctrl = this;
  ctrl.entry = Entry.vm();
  
  ctrl.submit = function () {
    Entry.create( ctrl.entry );
    m.route('/entries');
  };
};

EntryForm.view = function (ctrl) {
  return m('.entry-form', [
    m('h1', "Entry Form"),
    m('h3', "Please enter each volunteer's contact information:"),

    m.component(Volunteers,{ volunteers : ctrl.entry.volunteers }),

    m('button', { onclick: ctrl.submit }, 'Submit'),
  ]);
};

