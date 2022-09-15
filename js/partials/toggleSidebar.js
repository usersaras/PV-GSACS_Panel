export default function toggleSidebar(){
    $('#hideSidebar').click(()=>{
 
        console.log(document.getElementById('hideSidebar'))
        $("#sidebar").hide(500);

        
        $('#viewWidth15').removeClass('vw-15');
        $('#showSidebar').removeClass('me-3');
        $('#commerceNetworkH2').removeClass('ms-3');
    })

    $('#showSidebar').click(()=>{
        $("#sidebar").show(500);

        if($(window).width() > 1199){
            $('#viewWidth15').addClass('vw-15');
            $('#commerceNetworkH2').addClass('ms-3');
            $('#showSidebar').addClass('me-3');
        }
    })
}

