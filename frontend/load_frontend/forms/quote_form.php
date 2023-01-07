<?php

/***
 * 
 * 
 * Quote Form
 * 
 * 
 */
?>

<div class="quote_form__">
    <div class="row">
        <div class="col-md-12">
            <div class="form_wrap">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-outline mb-3 pb-0">
                            <input type="text" name="est_first_name" id="est_first_name" class="form-control" required>
                            <label for="est_first_name" class="form-label">First Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-outline mb-3 pb-0">
                            <input type="text" name="est_last_name" id="est_last_name" class="form-control" required>
                            <label for="est_last_name" class="form-label">Last Name</label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-outline mb-3 pb-0">
                            <input type="email" name="est_email" id="est_email" class="form-control" required>
                            <label for="est_email" class="form-label">Email</label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div>
                            <p>What type of organization are you? *</p>
                            <div>
                                <input type="radio" name="est_organization" id="est_organization_radio1" class="form-check-input" required>
                                <label for="est_organization_radio1">Nonprofit</label>
                            </div>
                            <div>
                                <input type="radio" name="est_organization" id="est_organization_radio2" class="form-check-input">
                                <label for="est_organization_radio2">Construction</label>
                            </div>
                            <div>
                                <input type="radio" name="est_organization" id="est_organization_radio3" class="form-check-input">
                                <label for="est_organization_radio3">Other</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div>
                            <input type="checkbox" name="est_marketing_tips" id="est_marketing_tips" class="form-check-input" checked>
                            <label for="est_marketing_tips">Subscribe for weekly marketing tips</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>