var ParentComponent = (function () {
  function view () {
  		return m("h2","Parent Middle Earth",
  			m("a[href=/entries]",{config:m.route},"List Entries"));
  }
  return {
  	view : view
  }
})();
  m.route(document.getElementById('Ring'), '/', {
    '/': ParentComponent,
    '/entries':EntryList,
    '/entries/new': EntryForm
  });
