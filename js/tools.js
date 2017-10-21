var html_negeri = "Negeri Melaka";
var html_jabatan = "Jabatan Pendaftaran Pertubuhan Malaysia";
var html_alamat = "Aras 4, Blok Pentadbiran, Kompleks Kementerian Dalam Negeri, Jalan Seri Negeri,";
html_alamat += "Hang Tuah Jaya, 75450 Ayer Keroh, Melaka<br/>";
html_alamat += "Telefon : +60 6-232 4180, Faks : +60 6-232 1380";

$("#hit-counters").attr("src", "http://www.freehitcounters.biz/counter.php?id=rosros");

$('.address').html(html_alamat);
$('.copy > span').html(html_jabatan + " " + html_negeri);
$('.logo-text').html(html_jabatan + " <br/>" + html_negeri);

$(document).ready(function () {
    // WOW Initialization
    new WOW().init();

    // SideNav Initialization
    $(".button-collapse").sideNav();

    // When the user clicks on the button, scroll to the top of the document
    $('#topFunction').on('click',function () {
        $('html, body').animate({scrollTop: '0px'}, 300);
    });

    //soalanModal
    $('.list-group-faqs > a').click(function (event) {

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
    $('.jabatans > a').click(function (event) {
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