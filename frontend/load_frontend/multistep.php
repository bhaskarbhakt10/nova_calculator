<section class="mt-5">
    <div class="container">
        <form action="" method="POST">
            <ul class="nav nav-pills" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="design-tab" data-bs-toggle="tab" data-bs-target="#design" type="button" role="tab" aria-controls="design" aria-selected="true">1</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pages-tab" data-bs-toggle="tab" data-bs-target="#pages" type="button" role="tab" aria-controls="pages" aria-selected="false">2</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="content-development-tab" data-bs-toggle="tab" data-bs-target="#content-development" type="button" role="tab" aria-controls="content-development" aria-selected="false">3</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="programming-tab" data-bs-toggle="tab" data-bs-target="#programming" type="button" role="tab" aria-controls="programming" aria-selected="true">4</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="ecommerce-tab" data-bs-toggle="tab" data-bs-target="#ecommerce" type="button" role="tab" aria-controls="ecommerce" aria-selected="false">5</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="seo-tab" data-bs-toggle="tab" data-bs-target="#seo" type="button" role="tab" aria-controls="seo" aria-selected="false">6</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="quote-tab" data-bs-toggle="tab" data-bs-target="#quote" type="button" role="tab" aria-controls="quote" aria-selected="false">7</button>
                </li>
            </ul>
            <div class="row">
                <div class="col-md-8">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="design" role="tabpanel" aria-labelledby="design-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section_heading">
                                        <h2 class="entry_heading">
                                            1. Design
                                        </h2>
                                    </div>
                                    <div class="section_form design_form">
                                        <?php 
                                        require_once 'forms/design_form.php'
                                        ?>
                                    </div>
                                    <div class="next_prev_button">
                                        <div>
                                            <button class="next__ btn btn-primary" >
                                                Next
                                            </button>
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
                                    <div class="section_form pages_form">
                                    <?php 
                                        require_once 'forms/pages_form.php'
                                        ?>
                                    </div>
                                    <div class="next_prev_button">
                                        <div>
                                            <button class="next__ btn btn-primary" >
                                                Next
                                            </button>
                                        </div>
                                        <div>
                                            <button class="previous__ btn btn-secondary" >
                                                Previous
                                            </button>
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
                                    <div class="section_form content-development_form">
                                    <?php 
                                        require_once 'forms/content_dev_form.php'
                                        ?>
                                    </div>
                                    <div class="next_prev_button">
                                        <div>
                                            <button class="next__ btn btn-primary" >
                                                Next
                                            </button>
                                        </div>
                                        <div>
                                            <button class="previous__ btn btn-secondary" >
                                                Previous
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="programming" role="tabpanel" aria-labelledby="programming-tab">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section_heading">
                                        <h2 class="entry_heading">
                                            4. Programming
                                        </h2>
                                    </div>
                                    <div class="section_form programming_form">
                                    <?php 
                                        require_once 'forms/programming_form.php'
                                        ?>
                                    </div>
                                    <div class="next_prev_button">
                                        <div>
                                            <button class="next__ btn btn-primary" >
                                                Next
                                            </button>
                                        </div>
                                        <div>
                                            <button class="previous__ btn btn-secondary" >
                                                Previous
                                            </button>
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
                                    <div class="section_form ecommerce_form">
                                    <?php 
                                        require_once 'forms/ecommerce_form.php'
                                        ?>
                                    </div>
                                    <div class="next_prev_button">
                                        <div>
                                            <button class="next__ btn btn-primary" >
                                                Next
                                            </button>
                                        </div>
                                        <div>
                                            <button class="previous__ btn btn-secondary" >
                                                Previous
                                            </button>
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
                                    </div>
                                    <div class="section_form seo_form">
                                    <?php 
                                        require_once 'forms/seo_form.php'
                                        ?>
                                    </div>
                                    <div class="next_prev_button">
                                        <div>
                                            <button class="next__ btn btn-primary" >
                                                Next
                                            </button>
                                        </div>
                                        <div>
                                            <button class="previous__ btn btn-secondary" >
                                                Previous
                                            </button>
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
                                    <div class="section_form quote_form">
                                    <?php 
                                        require_once 'forms/quote_form.php'
                                        ?>
                                    </div>
                                    <div class="next_prev_button">
                                        <div>
                                            <button class=" btn btn-secondary" >
                                                Previous
                                            </button>
                                        </div>
                                        <div>
                                            <button class="next__ btn btn-primary" >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="calculator_box">
                        calculator
                    </div>
                </div>
            </div>

        </form>
    </div>
</section>