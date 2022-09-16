import toggleSidebar from "./partials/toggleSidebar.js";
import sidebar from "../components/sidebar.js"
import topbar from "../components/topbar.js"

sidebar()
topbar()
$(window).ready(()=>{
    $('.load-spinner').fadeOut(235);       
})

$(document).ready(()=>{
    $('#viewStats').click(()=>{
        console.log("Click")
        $('#stats').show(500);
        $('#hideStats').show(500);
        $('#viewStats').hide(500);
    })

    $('#hideStats').click(()=>{
        $('#stats').hide(500);
        $('#viewStats').show(500);
        $('#hideStats').hide(500);
    })

    toggleSidebar();

    $('#toggleSearch').click(()=>{
        console.log("Click");
        $('#topSearch').toggleClass('display-anyhow');
    })

    $("#sidebar-people-menu").click(()=>{
        $("#sidebar-people-dropdown").slideToggle(300);
    })

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    let checkTable = document.getElementById('datatable');
    let checkIndexTable = document.getElementById('datatable-index');
   
    if(checkTable){
        var table = $('#datatable').DataTable({
            "paging": true,
            "buttons": [ 'excel', 'pdf', 'colvis' ],
            "pageLength": 20
        });

        table.buttons().container()
        .appendTo( '#datatable_wrapper .col-md-6:eq(0)' );
    }

    if(checkIndexTable){
        $('#datatable-index').DataTable({
            ordering:  false,
            paging: false
        });
    }

    //responsive (remove class)
    if ($(window).width() < 1200) {
        $('#viewWidth15').removeClass('vw-15');
        $('#viewWidth85').removeClass('vw-85');
        $('#viewWidth85').addClass('w-100');
        $('#showSidebar').removeClass('me-3');
        $('#commerceNetworkH2').removeClass('ms-3');
        
    }

    $(window).resize(()=>{
        if ($(window).width() < 1200) {
            $('#viewWidth15').removeClass('vw-15');
            $('#viewWidth85').removeClass('vw-85');
            $('#viewWidth85').addClass('w-100');
            $('#showSidebar').removeClass('me-3');
            $('#commerceNetworkH2').removeClass('ms-3');
        } else{
            $('#viewWidth15').addClass('vw-15');
            $('#viewWidth85').addClass('vw-85');
            $('#viewWidth85').addClass('w-100');
            $('#showSidebar').addClass('me-3');
            $('#commerceNetworkH2').addClass('ms-3');
        }
    })


    
})