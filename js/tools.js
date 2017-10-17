$(document).ready(function () {

    var brand = 'NGO\'s Digital Guide (NDG)';
    $('.footer-copyright date').text('26 Disember 2016');
    $('.navbar-brand brand').text(brand);
    $('p > brand').text(brand);

    $("#counter").attr("src", "http://www.freehitcounters.biz/counter.php?id=rosros");
    $('body').removeClass().addClass('green-style');

    // WOW Initialization
    new WOW().init();

    // SideNav Initialization
    $(".button-collapse").sideNav();

    //soalanModal
    $('.list-group-faq > a').click(function (event) {

        event.preventDefault();
        var e = $(this);
        var index = e.data('number');
        var title = e.data('title');
        var body = e.data('body');

        $('#myModalLabel').html("Soalan " + index);
        $('#myModalTitle').html(title);


        var content = '<p>' + body.split(".,").join('</p><p>') + '</p>';
        var list = $('<div />').html(content);
        $('#myModalBody').append(list);
    });
    $('#soalanModal').on('hidden.bs.modal', function (e) {
        $('#myModalTitle').empty();
        $('#myModalBody').empty();
    });

    //soalanModal
    $('.jabatan > a').click(function (event) {
        event.preventDefault();
        var e = $(this);
        //var index = e.data('number');
        var title = e.data('title');
        var alamat = e.data('alamat');
        var tel = e.data('tel');
        var fax = e.data('fax');

        $('#myModalJabatanTitle').html(title);
        $('#myModalJabatanAlamat').html(alamat);
        $('#myModalJabatanTel').html(tel);
        $('#myModalJabatanFax').html(fax);
    });

    $('#jabatanModal').on('hidden.bs.modal', function (e) {
        $('#myModalJabatanTitle').html();
        $('#myModalJabatanAlamat').html();
        $('#myModalJabatanTel').html();
        $('#myModalJabatanFax').html();
    });


});