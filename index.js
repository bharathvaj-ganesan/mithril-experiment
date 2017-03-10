function St(uri){
	var st = {};
	st.data = null;
	st.loading = false;
	st.get = function() { start(); return req('GET', uri).then(set).then(done); };
	st.post = function() { start(); return req('POST', uri, st.data).then(done); };
	st.update = function() { start(); return req('UPDATE', uri).then(done); };
	st.delete = function() { start(); return req('DELETE', uri).then(done); };

	function start(){ st.loading = true; m.redraw(); }
	function done(){ st.loading = false; }
	function set(data){ st.data = data; }
	function config(){
		//todo config - bharath
	}
	function req(method, uri, data){
		return m.request({
			method:method,
			url:uri,
			data:data,
			config:config,  
		});
	}

	return st;
}

var Characters = (function () {	

	var result = St("http://demo8417723.mockable.io/characters");

	
	function view_table() {
		if (!result.data) return null; 
		return m("table.bdr2.pd5.tc", result.data.Characters.map(
			function(Characters){
				return m("tr", [m("td.bdr2.pd5.tc",
					              m("a",{href: "/"+Characters.name, config: m.route},Characters.name)), m("td.bdr2.pd5.tc", Characters.Species)]);
			}
		));
	}
	
	//view
	function view(){
		return m("div", [
			m("h1", "Characters"),
			m("button", {onclick: result.get}, "Load"),
			result.loading ? m("p", "Loading...") : null,
			view_table(),
		]);
	}

	return {   // public interface
		view: view, 
		
	};
}());



var Bilbo = (function () {
	var result = St("http://demo8417723.mockable.io/characters/bilbo");

	function ctrl(){
		result.get();
	}
	function view_details() {
		if (!result.data) return null; 
			return m("p",m("ul",
					[m("li",result.data.name),
					m("li",result.data.species),
					m("li",result.data.others),
					m("li",result.data.artifacts)]));
	}

	//view
	function view(){
		return m("div", [
			m("h1", "Bilbo"),
			result.loading ? m("ul", "Loading...") : null,
			view_details(),
		]);
	}

	return {   // public interface
		view: view,
		controller:ctrl, 
	};
}());


var Thorin = (function () {

	var result = St("http://demo8417723.mockable.io/characters/thorin");

	function ctrl(){
		result.get();
	}
	function view_details() {
		if (!result.data) return null; 
			return m("p",m("ul",
					[m("li",result.data.name),
					m("li",result.data.Species),
					m("li",result.data.others),
					m("li",result.data.artifacts)]));
	}

	//view
	function view(){
		return m("div", [
			m("h1", "Thorin"),
			result.loading ? m("p", "Loading...") : null,
			view_details(),
		]);
	}
	return {   // public interface
		view: view, 
		controller:ctrl
	};
}());
var Saruman = (function () {
	var result = St("http://demo8417723.mockable.io/characters/saruman");

	function ctrl(){
		result.get();
	}
	function view_details() {
		if (!result.data) return null; 
			return m("p",m("ul",
					[m("li",result.data.name),
					m("li",result.data.Species),
					m("li",result.data.others),
					m("li",result.data.artifacts)]));
	}

	//view
	function view(){
		return m("div", [
			m("h1", "Saruman"),
			result.loading ? m("p", "Loading...") : null,
			view_details(),
		]);
	}
	return {   // public interface
		view: view,
		controller:ctrl, 
	};
}());
m.route(document.getElementById("container"), "/characters", {
	"/characters":Characters,
	"/bilbo": Bilbo,
	"/thorin": Thorin,
	"/saruman": Saruman,	
});