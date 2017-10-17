$(document).ready(function () {

    $('.footer-copyright date').text('16 Oktober 2017');

    $("#counter").attr("src", "http://www.freehitcounters.biz/counter.php?id=rosros");
    $('body').removeClass().addClass('green-style');

    // WOW Initialization
    new WOW().init();

    // SideNav Initialization
    $(".button-collapse").sideNav();

    //soalanModal
    $('.list-group > a').click(function (event) {
        event.preventDefault();
        var e = $(this);
        var index = e.data('number');
        var title = e.data('title');
        var body = e.data('body');

        $('#myModalLabel').html("Soalan " + index);
        $('#myModalTitle').html(title);
        $('#myModalBody').html(body);
    });
    $('#soalanModal').on('hidden.bs.modal', function (e) {
        $('#myModalTitle').html();
        $('#myModalBody').html();
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

    // Google Analytics
    $.googleanalytics({UA: 'UA-123456-11'});
    $.trackPageview('index.html', 'addSlash');
    $('a#enter-home').gaTagDownloads();
    // End Google Analytics
});