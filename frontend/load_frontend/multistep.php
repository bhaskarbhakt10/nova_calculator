<section class="viewport_always">
    <div class="container">
        <form action="<?php echo 'backend/form_actions/multistep.php' ?>" method="POST">
            <ul class="nav nav-pills form_pills" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link nav_btn theme_color active" id="design-tab" data-bs-toggle="tab" data-bs-target="#design" type="button" role="tab" aria-controls="design" aria-selected="true"><i class="fa-brands fa-figma"></i><span class="button_text">Design</span></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link nav_btn theme_color" id="pages-tab" data-bs-toggle="tab" data-bs-target="#pages" type="button" role="tab" aria-controls="pages" aria-selected="false"><i class="fa-sharp fa-solid fa-table-layout"></i><span class="button_text">Pages</span></button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link nav_btn theme_color" id="content-development-tab" data-bs-toggle="tab" data-bs-target="#content-development" type="button" role="tab" aria-controls="content-development" aria-selected="false"><i class="fa-light fa-input-text"></i>
                        <span class="button_text">Content Development</span>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link nav_btn theme_color" id="programming-tab" data-bs-toggle="tab" data-bs-target="#programming" type="button" role="tab" aria-controls="programming" aria-selected="true">
                        <i class="fa-regular fa-code"></i>
                        <span class="button_text">
                            programming
                        </span>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link nav_btn theme_color" id="ecommerce-tab" data-bs-toggle="tab" data-bs-target="#ecommerce" type="button" role="tab" aria-controls="ecommerce" aria-selected="false">
                        <i class="fa-regular fa-cart-shopping"></i>
                        <span class="button_text">
                            ecommerce
                        </span>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link nav_btn theme_color" id="seo-tab" data-bs-toggle="tab" data-bs-target="#seo" type="button" role="tab" aria-controls="seo" aria-selected="false">
                        <i class="fa-regular fa-blog"></i>
                        <span class="button_text">
                            seo
                        </span>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link nav_btn theme_color" id="quote-tab" data-bs-toggle="tab" data-bs-target="#quote" type="button" role="tab" aria-controls="quote" aria-selected="false">
                        <i class="fa-regular fa-money-bill"></i>
                        <span class="button_text">
                            quote
                        </span>
                    </button>
                </li>
            </ul>
            <div class="row">
                <div class="col-md-8 px-0">
                    <div class="tab_content_wrapper">
                        <div class="tab-content " id="myTabContent">
                            <div class="tab-pane fade show active" id="design" role="tabpanel" aria-labelledby="design-tab">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="entry_row">

                                            <div class="section_icon" id="design_svg">
                                                <?php
                                                require_once 'frontend/assets/images/svg/figma.php'
                                                ?>
                                            </div>
                                            <div class="section_heading">
                                                <h2 class="entry_heading">
                                                    Design
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="section_form design_form" id="design_form">
                                            <?php
                                            require_once 'forms/design_form.php'
                                            ?>

                                            <div class="next_prev_button">
                                                <div>
                                                    <?php include 'forms/next.php'; ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pages" role="tabpanel" aria-labelledby="pages-tab">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="section_heading">
                                            <h2 class="entry_heading">
                                                2. Pages
                                            </h2>
                                        </div>
                                        <div class="section_form pages_form" id="pages_form">
                                            <?php
                                            require_once 'forms/pages_form.php'
                                            ?>

                                            <div class="next_prev_button">
                                                <div>
                                                    <?php include 'forms/next.php'; ?>
                                                </div>
                                                <div>
                                                    <?php include 'forms/previous.php'; ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="content-development" role="tabpanel" aria-labelledby="content-development-tab">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="section_heading">
                                            <h2 class="entry_heading">
                                                3. Content Development
                                            </h2>
                                        </div>
                                        <div class="section_form content-development_form" id="content-development_form">
                                            <?php
                                            require_once 'forms/content_dev_form.php'
                                            ?>

                                            <div class="next_prev_button" type="button">
                                                <div>
                                                    <?php include 'forms/next.php'; ?>
                                                </div>
                                                <div>
                                                    <?php include 'forms/previous.php'; ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="programming" role="tabpanel" aria-labelledby="programming-tab">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="entry_row">

                                            <div class="section_icon">
                                                <?php
                                                require_once 'frontend/assets/images/svg/code.php'
                                                ?>
                                            </div>
                                            <div class="section_heading">
                                                <h2 class="entry_heading">
                                                    Programming
                                                </h2>
                                            </div>
                                        </div>

                                        <div class="section_form programming_form" id="programming_form">
                                            <?php
                                            require_once 'forms/programming_form.php'
                                            ?>

                                            <div class="next_prev_button">
                                                <div>
                                                    <?php include 'forms/next.php'; ?>
                                                </div>
                                                <div>
                                                    <?php include 'forms/previous.php'; ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="ecommerce" role="tabpanel" aria-labelledby="ecommerce-tab">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="section_heading">
                                            <h2 class="entry_heading">
                                                5. Sell Your Items
                                            </h2>
                                        </div>
                                        <div class="section_form ecommerce_form" id="ecommerce_form">
                                            <?php
                                            require_once 'forms/ecommerce_form.php'
                                            ?>

                                            <div class="next_prev_button">
                                                <div>
                                                    <?php include 'forms/next.php'; ?>
                                                </div>
                                                <div>
                                                    <?php include 'forms/previous.php'; ?>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="seo" role="tabpanel" aria-labelledby="seo-tab">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="section_heading">
                                            <h2 class="entry_heading">
                                                6. Search Engine Optimization
                                            </h2>

                                            <div class="section_form seo_form" id="seo_form">
                                                <?php
                                                require_once 'forms/seo_form.php'
                                                ?>

                                                <div class="next_prev_button">
                                                    <div>
                                                        <?php include 'forms/next.php'; ?>
                                                    </div>
                                                    <div>
                                                        <?php include 'forms/previous.php'; ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="quote" role="tabpanel" aria-labelledby="quote-tab">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="section_heading">
                                            <h2 class="entry_heading">
                                                7. Get an Itemized Quote
                                            </h2>
                                        </div>
                                        <div class="section_form quote_form" id="quote_form">
                                            <?php
                                            require_once 'forms/quote_form.php'
                                            ?>

                                            <div class="next_prev_button">
                                                <div>
                                                    <?php include 'forms/previous.php'; ?>
                                                </div>
                                                <div>
                                                    <button class=" btn btn-lg next_theme" type="submit">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="calculator_box" id="calculator_box">
                        <?php require_once 'forms/calculator.php' ?>
                    </div>
                </div>
            </div>

        </form>
    </div>
</section>