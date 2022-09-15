$(window).ready(()=>{
    $("#sidebar").html(`
                    <a href="index.html" class="text-decoration-none text-white d-block p-3 sidebar-item">
                        <i class="fa fa-home me-2" aria-hidden="true"></i>
                        Home
                    </a>
                    <a href="#"
                        class="text-decoration-none text-white d-block p-3 sidebar-item d-flex align-items-center justify-content-between"
                        id="sidebar-people-menu">
                        <div>
                            <i class="fa fa-user me-2" aria-hidden="true"></i>
                            People
                        </div>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                    <div id="sidebar-people-dropdown" class="dropdown-menu-item bg-white m-3 mt-0 rounded">
                        <div class="d-flex gap-3 flex-column">
                            <a href="#" class="text-decoration-none text-muted d-block">
                                <i class="fa fa-user me-2" aria-hidden="true"></i>
                                Users
                            </a>
                            <a href="#" class="text-decoration-none text-muted d-block">
                                <i class="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                                Vendor
                            </a>
                        </div>
                    </div>
            
                    <a href="#" class="text-decoration-none text-white d-block p-3 sidebar-item text-break-none">
                        <i class="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                        Accounting
                    </a>
                    <a href="#" class="text-decoration-none text-white d-block p-3 sidebar-item text-break-none">
                        <i class="fa fa-paperclip me-2" aria-hidden="true"></i>
                        Order Tracking
                    </a>
                    <a href="commerce_network.html" class="text-decoration-none text-white d-block p-3 sidebar-item text-break-none">
                        <i class="fa fa-globe me-2" aria-hidden="true"></i>
                        Commerce Network
                    </a>
                    <span class="text-decoration-none text-white d-block p-3 sidebar-item" id="hideSidebar">
                        <i class="fa fa-chevron-circle-left me-2" aria-hidden="true"></i>
                        Hide Sidebar
                    </span>

                `)
})