$(document).ready(function(){
    

	$('body').removeClass().addClass('green-style');

	// WOW Initialization
	new WOW().init();

	// SideNav Initialization
	$(".button-collapse").sideNav();	

	//soalanModal
	$('.list-group > a').click(function(event){
	    event.preventDefault();
	    var e = $(this);
	    var index = e.data('number');
	    var title = e.data('title');    
	    var body = e.data('body');
	    
	    $('#myModalLabel').html("Soalan "+index);
	    $('#myModalTitle').html(title);
	    $('#myModalBody').html(body);
	});
	$('#soalanModal').on('hidden.bs.modal', function (e) {
	  $('#myModalTitle').html();
	    $('#myModalBody').html();
	});
});