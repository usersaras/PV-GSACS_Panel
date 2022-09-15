$(window).ready(()=>{
    $("#topbar").html(`<div class="container-fluid ps-0">
    <div class="d-flex align-items-center">
         <div class="vw-15" id="viewWidth15">
              <i class="fa fa-bars d-block fs-5 p-3" aria-hidden="true" id="showSidebar"></i>
         </div>
         <div class="w-100">
         <div class="d-flex align-items-center justify-content-between flex-wrap">
         <div class="d-flex gap-3">
             <h2 class="mb-0 text-break-none text-brand-blue fs-1 ms-3 fw-light" id="commerceNetworkH2"><strong class="text-brand-primary">Commerce</strong> Network</h2>
             <button class="btn btn-outline-brand-primary d-sm-block d-md-none"><i class="fa fa-search text-small" aria-hidden="true" id="toggleSearch"></i></button>
         </div>

         <div class="d-flex align-items-center gap-3">
         
             <form action="#" method="POST" class="d-flex w-100" id="topSearch">
                 <input type="search" class="form-control rounded-0 rounded-start" name="search" id="search" placeholder="Search...">
                 <select name="#" id="#" class="form-select rounded-0 w-25 text-muted bg-light">
                     <option>Parameters</option>
                     <option value="param1">Option 1</option>
                     <option value="param2">Option 2</option>
                     <option value="param3">Option 3</option>
                 </select>
                 <button class="btn btn-brand-primary rounded-0 rounded-end"><i class="fa fa-search text-white" aria-hidden="true"></i></button>
             </form>
         </div>
         <div class="d-flex align-items-center gap-3 justify-content-end">
             <p class="mb-0">Client ID: 44354</p>
             <img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" class="rounded-circle img-fluid profile-image" alt="">
             <p class="mb-0">|</p>
             <form action="#" method="POST">
                 <button class="btn btn-outline-danger">Logout</button>
             </form>
         </div>
     </div>
     </div>
 </div>
 </div>`)})