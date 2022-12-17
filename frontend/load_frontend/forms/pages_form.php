<?php

/**
 * 
 * Pages Form
 * 
 */

?>
<div class="pages_form__">
    <div class="row">
        <div class="col-md-12">
            <div class="form_wrap">
                <div class="form_field">
                    <p>How do you plan to add content to your website? </p>
                    <div>
                        <input type="radio" name="est_pages" id="est_pages_radio1" class="form-check-input" data-label="I will create and add content to all pages on my own" required data-value='15' data-assoc="calc_pages">
                        <label for="est_pages_radio1">I will create and add content to all pages on my own</label>
                    </div>
                    <div>
                        <input type="radio" name="est_pages" id="est_pages_radio2" class="form-check-input" data-label="I would like the pages in my website to be professionally designed" data-value="20" data-assoc="calc_pages">
                        <label for="est_pages_radio2">I would like the pages in my website to be professionally designed</label>
                    </div>
                    <div>
                        <input type="radio" name="est_pages" id="est_pages_radio3" class="form-check-input" data-label="I would like to do a mixture of both" data-value="25"  data-assoc='calc_pages' >
                        <label for="est_pages_radio3"> I would like to do a mixture of both</label>
                    </div>
                </div>
                <div class="form_field">
                    <p>Do you plan to include any of the following types of pages in your site:</p>
                    <div class="row">
                        <div class="col-md-6">
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">Blog</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">Specials</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">Staff/Board Members</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">Portfolio</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">Testimonials</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">Sponsors</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">Events</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">FAQ's</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">News/Press Releases</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">Resources/Document Library</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">Projects</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" class="form-check-input" data-assoc='calc_pages' data-value="5">
                                <label for="">Careers/Jobs</label>
                            </div>

                        </div>
                        <div class="d-none">
                        <input type="hidden" id="pages_radio_value" value="">
                        <input type="hidden" id="pages_checkbox_value" value="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>