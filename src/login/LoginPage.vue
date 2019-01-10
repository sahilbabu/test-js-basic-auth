<template>


    <div class="container-fluid page-body-wrapper full-page-wrapper auth-page">
        <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
            <div class="row w-100">
                <div class="col-lg-4 mx-auto">

                    <div class="alert alert-info">
                        Username: mudassir<br />
                        Password: changeme
                    </div>
                    <div class="auto-form-wrapper">

                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <label class="label">Username</label>
                                <div class="input-group">
                                    <input v-model="username" name="username" :class="{ 'is-invalid': submitted && !username }" type="text" class="form-control" placeholder="Username">
                                    <!--<div class="input-group-append">-->
                                             <!--<span class="input-group-text">-->
                                            <!--<i class="mdi mdi-check-circle-outline"></i>-->
                                                <!--</span>-->
                                    <!--</div>-->
                                </div>
                                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
                            </div>
                            <div class="form-group">
                                <label class="label">Password</label>
                                <div class="input-group">
                                    <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }">
                                    <!--<div class="input-group-append">-->
                      <!--<span class="input-group-text">-->
                        <!--<i class="mdi mdi-check-circle-outline"></i>-->
                      <!--</span>-->
                                    <!--</div>-->
                                </div>
                                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                            </div>
                            <div v-if="error" class="alert alert-danger">{{error}}</div>
                            <div class="form-group">
                                <button class="btn btn-primary submit-btn btn-block " :disabled="loading">Login</button>
                                <img v-show="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            </div>

                            <div class="form-group d-flex justify-content-between">
                                <div class="form-check form-check-flat mt-0">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" checked> Keep me signed in
                                    </label>
                                </div>
                                <a href="#" class="text-small forgot-password text-black">Forgot Password</a>
                            </div>

                            <div class="text-block text-center my-3">
                                <span class="text-small font-weight-semibold">Not a member ?</span>
                                <a href="#" class="text-black text-small">Create new account</a>
                            </div>
                        </form>

                    </div>
                    <ul class="auth-footer">
                        <li>
                            <a href="#">Conditions</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Terms</a>
                        </li>
                    </ul>
                    <p class="footer-text text-center">copyright © 2018 Bootstrapdash. All rights reserved.</p>
                </div>
            </div>
        </div>
        <!-- content-wrapper ends -->
    </div>


</template>

<script>
    import {router} from '../_helpers';
    import {userService} from '../_services';

    export default {
        data() {
            return {
                username: '',
                password: '',
                submitted: false,
                loading: false,
                returnUrl: '',
                error: ''
            }
        },
        created() {
            // reset login status
            userService.logout();

            // get return url from route parameters or default to '/'
            this.returnUrl = this.$route.query.returnUrl || '/';
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;
                const {username, password} = this;

                // stop here if form is invalid
                if (!(username && password)) {
                    return;
                }

                this.loading = true;
                userService.login(username, password)
                    .then(
                        user => router.push(this.returnUrl),
                        error => {
                            this.error = error;
                            this.loading = false;
                        }
                    );
            }
        }
    };
</script>


