<template>
    <div class="row">
        <!-- partial:partials/_navbar.html -->
        <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                <a class="navbar-brand brand-logo" href="#">
                    <img src="/admin/images/logo.svg" alt="logo"/>
                </a>
                <a class="navbar-brand brand-logo-mini" href="#">
                    <img src="/admin/images/logo-mini.svg" alt="logo"/>
                </a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center">
                <ul class="navbar-nav navbar-nav-left header-links d-none d-md-flex">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Schedule
                            <span class="badge badge-primary ml-1">New</span>
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="#" class="nav-link">
                            <i class="mdi mdi-elevation-rise"></i>Reports</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="mdi mdi-bookmark-plus-outline"></i>Score</a>
                    </li>
                </ul>
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item dropdown">
                        <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#"
                           data-toggle="dropdown" aria-expanded="false">
                            <i class="mdi mdi-file-document-box"></i>
                            <span class="count">7</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                             aria-labelledby="messageDropdown">
                            <div class="dropdown-item">
                                <p class="mb-0 font-weight-normal float-left">You have 7 unread mails
                                </p>
                                <span class="badge badge-info badge-pill float-right">View all</span>
                            </div>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <img src="images/faces/face4.jpg" alt="image" class="profile-pic">
                                </div>
                                <div class="preview-item-content flex-grow">
                                    <h6 class="preview-subject ellipsis font-weight-medium text-dark">David Grey
                                        <span class="float-right font-weight-light small-text">1 Minutes ago</span>
                                    </h6>
                                    <p class="font-weight-light small-text">
                                        The meeting is cancelled
                                    </p>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <img src="images/faces/face2.jpg" alt="image" class="profile-pic">
                                </div>
                                <div class="preview-item-content flex-grow">
                                    <h6 class="preview-subject ellipsis font-weight-medium text-dark">Tim Cook
                                        <span class="float-right font-weight-light small-text">15 Minutes ago</span>
                                    </h6>
                                    <p class="font-weight-light small-text">
                                        New product launch
                                    </p>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <img src="images/faces/face3.jpg" alt="image" class="profile-pic">
                                </div>
                                <div class="preview-item-content flex-grow">
                                    <h6 class="preview-subject ellipsis font-weight-medium text-dark"> Johnson
                                        <span class="float-right font-weight-light small-text">18 Minutes ago</span>
                                    </h6>
                                    <p class="font-weight-light small-text">
                                        Upcoming board meeting
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
                           data-toggle="dropdown">
                            <i class="mdi mdi-bell"></i>
                            <span class="count">4</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                             aria-labelledby="notificationDropdown">
                            <a class="dropdown-item">
                                <p class="mb-0 font-weight-normal float-left">You have 4 new notifications
                                </p>
                                <span class="badge badge-pill badge-warning float-right">View all</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-success">
                                        <i class="mdi mdi-alert-circle-outline mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6 class="preview-subject font-weight-medium text-dark">Application Error</h6>
                                    <p class="font-weight-light small-text">
                                        Just now
                                    </p>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-warning">
                                        <i class="mdi mdi-comment-text-outline mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6 class="preview-subject font-weight-medium text-dark">Settings</h6>
                                    <p class="font-weight-light small-text">
                                        Private message
                                    </p>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-info">
                                        <i class="mdi mdi-email-outline mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6 class="preview-subject font-weight-medium text-dark">New user registration</h6>
                                    <p class="font-weight-light small-text">
                                        2 days ago
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item dropdown d-none d-xl-inline-block">
                        <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown"
                           aria-expanded="false">
                            <span class="profile-text">Hello, {{user.firstName}} !</span>
                            <img class="img-xs rounded-circle" src="/admin/images/faces/face1.jpg" alt="Profile image">
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                            <a class="dropdown-item p-0">
                                <div class="d-flex border-bottom">
                                    <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                                        <i class="mdi mdi-bookmark-plus-outline mr-0 text-gray"></i>
                                    </div>
                                    <div class="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                                        <i class="mdi mdi-account-outline mr-0 text-gray"></i>
                                    </div>
                                    <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                                        <i class="mdi mdi-alarm-check mr-0 text-gray"></i>
                                    </div>
                                </div>
                            </a>
                            <!--<a class="dropdown-item mt-2">-->
                            <!--Manage Accounts-->
                            <!--</a>-->
                            <!--<a class="dropdown-item">-->
                            <!--Change Password-->
                            <!--</a>-->
                            <!--<a class="dropdown-item">-->
                            <!--Check Inbox-->
                            <!--</a>-->
                            <router-link class="dropdown-item" to="/login">Logout</router-link>
                        </div>
                    </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                        data-toggle="offcanvas">
                    <span class="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_sidebar.html -->
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item nav-profile">
                        <div class="nav-link">
                            <div class="user-wrapper">
                                <div class="profile-image">
                                    <img src="/admin/images/faces/face1.jpg" alt="profile image">
                                </div>
                                <div class="text-wrapper">
                                    <p class="profile-name">Richard V.Welsh</p>
                                    <div>
                                        <small class="designation text-muted">Manager</small>
                                        <span class="status-indicator online"></span>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-success btn-block">New Project
                                <i class="mdi mdi-plus"></i>
                            </button>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">
                            <i class="menu-icon mdi mdi-television"></i>
                            <span class="menu-title">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false"
                           aria-controls="ui-basic">
                            <i class="menu-icon mdi mdi-content-copy"></i>
                            <span class="menu-title">Basic UI Elements</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="ui-basic">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/ui-features/typography.html">Typography</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pages/forms/basic_elements.html">
                            <i class="menu-icon mdi mdi-backup-restore"></i>
                            <span class="menu-title">Form elements</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pages/charts/chartjs.html">
                            <i class="menu-icon mdi mdi-chart-line"></i>
                            <span class="menu-title">Charts</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pages/tables/basic-table.html">
                            <i class="menu-icon mdi mdi-table"></i>
                            <span class="menu-title">Tables</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pages/icons/font-awesome.html">
                            <i class="menu-icon mdi mdi-sticker"></i>
                            <span class="menu-title">Icons</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false"
                           aria-controls="auth">
                            <i class="menu-icon mdi mdi-restart"></i>
                            <span class="menu-title">User Pages</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="collapse" id="auth">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/samples/blank-page.html"> Blank Page </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/samples/login.html"> Login </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/samples/register.html"> Register </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/samples/error-404.html"> 404 </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/samples/error-500.html"> 500 </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">

                    <div class="row purchace-popup">
                        <div class="col-12">
                          <span class="d-block d-md-flex align-items-center">
                            <p>Like what you see? Check out our premium version for more.</p>
                          </span>
                        </div>
                    </div>

                    <!-- Button trigger modal -->

                    <div class="row">
                        <div class="col-lg-12 grid-margin">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">ManagedObjectCollection</h4>
                                    <div class="table-responsive">
                                        <p class="text-muted m-b-20"><code>currentPage:</code> {{statistics.currentPage}}   <code>pageSize:</code>{{statistics.pageSize}} <code>totalPages:</code>{{statistics.totalPages}}</p>

                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>lastUpdated</th>
                                                <th>lastUpdated</th>
                                                <th>owner</th>
                                                <th>type</th>
                                                <th>c8y_Firmware</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr class="tr-row" v-for="(item, index) in items" :id="index" @click="deviceDetailModal(index)" data-toggle="tooltip" data-placement="top" title="Click to view device detail">
                                                <td class="font-weight-medium">{{ item.id }}</td>
                                                <td>{{ item.lastUpdated }}</td>
                                                <td>{{ item.name }}</td>
                                                <td>{{ item.owner }}</td>
                                                <td>{{ item.type }}</td>
                                                <td>
                                                    <span v-for="(firmware, f) in item.c8y_Firmware">{{f}}: {{firmware}}, </span>
                                                </td>

                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Modal -->
                    <div class="modal fade" id="deviceDeatilModel" tabindex="-1" role="dialog" aria-labelledby="deviceDeatilModelTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Device detail[ {{deviceDetail.name}} ]</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <ul class="list-unstyled">
                                        <li><b>Firmware:</b>
                                            <ul>
                                                <li v-for="(firmware, f) in deviceDetail.c8y_Firmware"><b>{{f}}:</b> {{firmware}}</li>
                                                <li v-if="!deviceDetail.c8y_Firmware">Empty </li>
                                            </ul>
                                        </li>
                                        <li><b>Hardware:</b>
                                            <ul>
                                                <li v-for="(hardware, h) in deviceDetail.c8y_Hardware"><b>{{h}}:</b> {{hardware}}</li>
                                                <li v-if="!deviceDetail.c8y_Hardware">Empty </li>
                                            </ul>
                                        </li>
                                        <li><b>Software:</b>
                                            <ul>
                                                <li v-for="(software, s) in deviceDetail.c8y_Software"><b>{{s}}:</b> {{software}}</li>
                                                <li v-if="!deviceDetail.c8y_Software">Empty </li>
                                            </ul>
                                        </li>
                                        <li><b>Mobile:</b>
                                            <ul>
                                                <li v-for="(mobile, m) in deviceDetail.c8y_Mobile"><b>{{m}}:</b> {{mobile}}</li>
                                                <li v-if="!deviceDetail.c8y_Mobile">Empty </li>
                                            </ul>
                                        </li>
                                        <li><b>Geofence:</b>
                                            <ul>
                                                <li v-for="(geofence, g) in deviceDetail.c8y_Geofence"><b>{{g}}:</b> {{geofence}}</li>
                                                <li v-if="!deviceDetail.c8y_Geofence">Empty </li>
                                            </ul>
                                        </li>
                                        <li><b>Position:</b>
                                            <ul>
                                                <li v-for="(position, p) in deviceDetail.c8y_Position"><b>{{p}}:</b> {{position}}</li>
                                                <li v-if="!deviceDetail.c8y_Position">Empty </li>
                                            </ul>
                                        </li>
                                        <li><b>Connection:</b>
                                            <ul>
                                                <li v-for="(connection, c) in deviceDetail.c8y_Connection"><b>{{c}}:</b> {{connection}}</li>
                                                <li v-if="!deviceDetail.c8y_Connection">Empty </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ./Modal -->

                </div>
                <!-- content-wrapper ends -->
                <!-- partial:partials/_footer.html -->
                <footer class="footer">
                    <div class="container-fluid clearfix">
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018
              <a href="http://www.bootstrapdash.com/" target="_blank">Bootstrapdash</a>. All rights reserved.</span>
                        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with
              <i class="mdi mdi-heart text-danger"></i>
            </span>
                    </div>
                </footer>
                <!-- partial -->
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->

    </div>
</template>

<script>
    import {userService} from '../_services';
    import axios from 'axios';

    export default {
        data() {
            return {
                user: {},
                users: [],
                items: [],
                statistics: [],
                deviceDetail: [],
            }
        },
        created() {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.users.loading = true;
            userService.getAll().then(users => this.users = users);

            let url = `https://cldemo.cumulocity.com/inventory/managedObjects?fragmentType=c8y_IsDevice&pageSize=10&skipChildrenNames=true&withTotalPages=true`;

            axios({
                method: 'get',
                url,
                auth: {
                    username: 'mudassir',
                    password: 'changeme'
                }
            })
                .then((response) => {
                    this.statistics = response.data.statistics;
                    this.items = response.data.managedObjects;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        methods: {
            deviceDetailModal(index) {
                this.deviceDetail = this.items[index];
                $('#deviceDeatilModel').modal('show');
            }
        }
    };

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
</script>

<style>
    .tr-row{
        cursor: pointer;
    }
</style>
