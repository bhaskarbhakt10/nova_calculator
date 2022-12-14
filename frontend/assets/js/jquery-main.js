(function ($) {

    //all input elements in form
    let let_all_inputs = $('.tab-pane input');
    let let_all_radio = $('.tab-pane input[type=radio]');
    //parent element i.e div of input elements
    let parent_div_of_input = $(let_all_inputs).parent();
    let parent_div_of_input_radio = $(let_all_radio).parent().parent();
    //adding class to parent div
    parent_div_of_input.addClass('form_field__');
    let_all_inputs.addClass('calc_input');
    parent_div_of_input_radio.addClass('radio__')


    //calculatorbox
    let calculator_box = $('#calculator_box input')
    let calculator_box_id = $('#calculator_box input').toArray();
    for (let index = 0; index < calculator_box_id.length; index++) {
        let id__ = $(calculator_box_id[index]).attr('id');
        $(calculator_box_id[index]).attr('data-assoc', id__);

    }

    /***adding message box ***/
    $('.form_field,radio__').append("<div class='est_message_box' id=''></div>")
    let message_box = $('.est_message_box');
    message_box.hide();

    // disable next button if form has a required field
    let all_forms = $('.section_form').toArray();
    // console.log(all_forms);
    all_forms.forEach(all_form => {
        let ids = $(all_form).attr('id');
        let required_element = $('#' + ids + ' input:required');
        if (required_element.length > 0) {
            $('#' + ids + ' .next__').attr('disabled', 'disabled')
        }
    });

    let all_nav_buttons = $('li.nav-item > button.nav-link').toArray();
    // console.log(all_nav_buttons);
    all_nav_buttons.forEach(all_nav_button => {
        const button_id = $(all_nav_button).attr('id');
        $('#' + button_id).attr('disabled', 'disabled');
        $('li.nav-item:first-child > button.nav-link').removeAttr('disabled');
    });

    all_forms.forEach(all_form => {
        let ids_ = $(all_form).attr('id');
        // console.log(ids_)
        //next btn
        $('#' + ids_).on('click', '.next__', function () {
            let current_tab_pane = $(this).parentsUntil('.tab-pane').parent();
            let current_id = $(current_tab_pane).attr('id');
            $('#' + current_id + '-tab').parent().next().children().removeAttr('disabled');
            $('#' + current_id + '-tab').parent().next().children().click();

            // $(current_tab_pane).removeClass('show active');
            // $(current_tab_pane).next().addClass('show active');
            // $('#pages-tab').removeAttr('disabled');
            // $('#pages-tab').click();
        });
        //previous btn
        $('#' + ids_).on('click', '.previous__', function () {
            let current_tab_pane = $(this).parentsUntil('.tab-pane').parent();
            let current_id = $(current_tab_pane).attr('id');
            $('#' + current_id + '-tab').parent().prev().children().removeAttr('disabled');
            $('#' + current_id + '-tab').parent().prev().children().click();
        });
    });


    // for design tab since it is visible on load 
    let design_tab = $('.tab-pane.active');
    let id_design_tab = $(design_tab).find('.section_form').attr('id');
    //for design tab
    $('#' + id_design_tab).on('change', 'input[type="radio"]', function () {
        let message_box_ = jQuery('#' + id_design_tab + " .est_message_box")
        if ($(this).attr('data-label') === 'Custom Website with Consultative Process') {
            message_box_.show();
            // console.log(message_box);
            message_box_.append("<div class='design_message_box_1'><p>testt</p></div>");
            $('.design_message_box_2').remove();
        }
        else if ($(this).attr('data-label') === 'Fast Design Website with Less Consulting & Meetings') {
            message_box_.show();
            message_box_.append("<div class='design_message_box_2'><p>testttt</p></div>");
            $('.design_message_box_1').remove();
        }

        let get_name = $(this).attr('name');
        // console.log(get_name);
        if ($("input[name='" + get_name + "']").is(':checked')) {
            $('#' + id_design_tab + ' .next__').removeAttr('disabled');
        }

    });



    let section_form = $('.section_form').toArray();
    section_form.shift();
    for (let index = 0; index < section_form.length; index++) {
        let form_name = $(section_form[index]).attr('id');
        $(document).on('shown.bs.tab', function () {
            if ($(section_form[index]).is(':visible')) {
                switch (form_name) {
                    case 'pages_form':
                        pages(form_name);
                        pages_required(form_name);
                        break;
                    case 'content-development_form':
                        content_dev(form_name);
                        content_dev_required(form_name);
                        break;
                    case 'programming_form':
                        programming(form_name);
                        break;
                    case 'ecommerce_form':
                        ecommerce(form_name);
                        ecommerce_required(form_name);
                        break;
                    case 'seo_form':
                        seo(form_name);
                        break;
                    case 'quote_form':
                        quote(form_name);
                        break;
                    default:
                        break;
                }

            }
        });
    }
    // function for pages tab
    function pages(page) {
        // console.warn('hello' + page);
        let message_1 = "heree goes something";
        let message_2 = '<input required class="form-control" type="number" value>'
        let this_message_box = '#' + page + ' .' + $(message_box).attr('class');
        $('#' + page + ' .est_message_box:nth-of-type(2)').remove();
        $('#' + page).on('change', 'input[type=radio]', function () {
            if ($(this).attr('data-label') === 'I will create and add content to all pages on my own') {
                $(this_message_box).show();
                if ($('#' + page + ' .design_message_box_1').length === 0) {
                    $(this_message_box).append('<div class="design_message_box_1">'+message_1+'</div>');
                }
                $('#' + page + ' .design_message_box_2').remove();
            }
            else if (($(this).attr('data-label') === 'I would like the pages in my website to be professionally designed') || ($(this).attr('data-label') === 'I would like to do a mixture of both')) {
                $(this_message_box).show();
                if ($('#' + page + ' .design_message_box_2').length === 0) {
                    $(this_message_box).append('<div class="design_message_box_2">'+message_2+'</div>')
                }
                $('#' + page + ' .design_message_box_1').remove();
                // console.log($('#' + page + ' .design_message_box_2').length);
            }
            // debugger;
        });
    }

    function pages_required(page) {
        let all_required_inputs = $('#' + page + ' input:required').toArray();
        // console.log(all_required_inputs);
        let all_required_this = [];
        all_required_inputs.forEach(all_required_this__ => {
            all_required_this.push($(all_required_this__).attr('name'));

        });
        // console.log(all_required_this);
        $('#' + page).on('change', 'input[type="radio"]', function () {
            for (let index = 0; index < all_required_this.length; index++) {
                if ($('#' + page + ' input[name="' + all_required_this[index] + '"]').is(':checked')) {
                    $('#' + page + ' .next__').removeAttr('disabled');
                }
            }
            pages_required_number(page);
        });

    }

    function pages_required_number(page) {
        if ($('#' + page + ' input[type=number]').length !== 0) {
            // console.warn($('#' + page + ' input[type=number]'));
            if ($('#' + page + ' input[type=number]').prop('required')) {
                // $('#' + page +' input[type=number]').on('click', function(){
                $('#' + page + ' .next__').attr('disabled', 'disabled');
                $('#pages_form input[type=number]').on('change', function () {
                    let value__ = $('#' + page + ' input[type=number]').val();
                    if (value__ !== ' ') {
                        $('#' + page + ' .next__').removeAttr('disabled');
                    }

                });
                // console.log(value__);
                // $('#' + page +' input[type=number]').attr('data-value', value__);
                // if($('#' + page +' input[type=number]').prop('data-value') !== ''){
                // }
            }
        }
    }

    function content_dev(content) {
        // console.warn('hello' + content);
        let this_message_box = '#' + content + ' .' + $(message_box).attr('class');
        $('#' + content + ' .radio__:last-child .est_message_box').remove();
        $('#' + content).on('change', 'input[type=radio]', function () {
            if ($(this).attr('data-label') === 'I will write it.') {
                $(this_message_box).show();
                $(this_message_box).append('<div class="design_message_box_1"> heree goes something</div>');
                $('#' + content + ' .design_message_box_2').remove();
            }
            else if (($(this).attr('data-label') === 'I would like a professional to write the content for my website for me.') || ($(this).attr('data-label') === 'I would like to do a mixture of both')) {
                $(this_message_box).show();
                if ($('#' + content + ' .design_message_box_2').length === 0) {
                    $(this_message_box).append('<div class="design_message_box_2"><input required class="form-control" type="number"></div>')
                }
                $('#' + content + ' .design_message_box_1').remove();
                // console.log($('#' + content + ' .design_message_box_2').length);
            }
        });
    }

    function content_dev_required(content) {
        let all_required_inputs = $('#' + content + ' input:required').toArray();
        // console.log(all_required_inputs);
        let all_required_this = [];
        all_required_inputs.forEach(all_required_this__ => {
            all_required_this.push($(all_required_this__).attr('name'));

        });
        // console.log(all_required_this);
        $('#' + content).on('change', 'input[type="radio"]', function () {
            for (let index = 0; index < all_required_this.length; index++) {
                if ($('#' + content + ' input[name="' + all_required_this[index] + '"]').is(':checked')) {
                    $('#' + content + ' .next__').removeAttr('disabled');
                }
            }
        });
    }

    function programming(program) {
        // console.warn('hello' + program);
    }

    function ecommerce(ecom) {
        // console.warn('hello' + ecom);
        let this_message_box = '#' + ecom + ' .' + $(message_box).attr('class');
        $('#' + ecom + ' .est_message_box:nth-of-type(2)').remove();
        $('#' + ecom).on('change', 'input[type=radio]', function () {
            if ($(this).attr('data-label') === 'Yes') {
                $(this_message_box).show();
                $(this_message_box).append('<div class="design_message_box_1"> heree goes something</div>');
                $('#' + ecom + ' .design_message_box_2').remove();
            }
            else if (($(this).attr('data-label') === 'No') || ($(this).attr('data-label') === 'I would like to do a mixture of both')) {
                $('#' + ecom + ' .design_message_box_1').remove();

            }
        });
    }

    function ecommerce_required(content) {
        let all_required_inputs = $('#' + content + ' input:required').toArray();
        // console.log(all_required_inputs);
        let all_required_this = [];
        all_required_inputs.forEach(all_required_this__ => {
            all_required_this.push($(all_required_this__).attr('name'));

        });
        // console.log(all_required_this);
        $('#' + content).on('change', 'input[type="radio"]', function () {
            for (let index = 0; index < all_required_this.length; index++) {
                if ($('#' + content + ' input[name="' + all_required_this[index] + '"]').is(':checked')) {
                    $('#' + content + ' .next__').removeAttr('disabled');
                }
            }
        });
    }

    function seo(seo_) {
        // console.warn('hello' + seo_);
    }

    function quote(value__) {
        // console.warn('hello' + value__);
    }


    // calcultor part
    all_forms.forEach(all_form => {
        let ids_calc = $(all_form).attr('id');
        $('#' + ids_calc).on('change', '.calc_input', function () {
            let type__ = $(this).attr('type');
            let data_value;
            let data_assoc;
            switch (ids_calc) {
                case 'design_form':
                    // let type = $(this).attr('type');
                    switch (type__) {
                        case 'radio':
                            data_value = $(this).attr('data-value');
                            data_assoc = $(this).attr('data-assoc');
                            break;
                        default:
                            break;
                    }
                    break;
                case 'pages_form':
                    console.log("inside page from")
                    data_assoc = $(this).attr('data-assoc');
                    
                    let data_value_of_radio = 0;
                    let data_value_of_check_boxes = 0;
                    if (type__ === 'radio') {
                        data_value_of_radio = parseFloat($(this).attr('data-value'));
                        // $(this).parent().append('<input type="hidden" id="pages_radio_value" value="">');
                        $('#pages_radio_value').val(data_value_of_radio);
                    }
                    else if (type__ === 'number') {

                    }
                    else if (type__ === 'checkbox') {
                        console.log(ids_calc);
                        let all_checkbox_pages = $('#' + ids_calc + ' input[type=checkbox]').toArray();
                        let checked_val = [];
                        let count = 0 ;
                        for (let index = 0; index < all_checkbox_pages.length; index++) {
                            count = count + 1;
                            if ($(all_checkbox_pages[index]).is(':checked')) {
                                let val = $(all_checkbox_pages[index]).attr('data-value');
                                checked_val.push(parseFloat(val));
                            }

                        }
                        console.log(count);
                        const initvalue = 0;
                        data_value_of_check_boxes = checked_val.reduce((a, b) => a + b, initvalue);
                        // let last_checkbox = $('#' + ids_calc + ' input[type=checkbox]').parent().get(count - 1 );
                        // last_checkbox.append('<input type="hidden" id="pages_checkbox_value" value="">')
                        $('#pages_checkbox_value').val(data_value_of_check_boxes);
                    }
                    
                    let radio_total = $('#pages_radio_value').val();
                    console.log(radio_total);
                    const check_total = $('#pages_checkbox_value').val();
                    if(check_total !== ""){
                        data_value = parseFloat(radio_total) + parseFloat(check_total);
                    }
                    else{
                        data_value = parseFloat(radio_total) + 0;
                    }
                    


                    break;
                case 'content-development_form':
                    data_assoc = $(this).attr('data-assoc');
                    data_value = $(this).attr('data-value');
                    break;
                case 'programming_form':
                    data_assoc = $(this).attr('data-assoc');
                    data_value = $(this).attr('data-value');
                    
                    let checked_val = [];
                    let program_checkbox = $('#' + ids_calc + ' input[type=checkbox]').toArray();
                    for (let index = 0; index < program_checkbox.length; index++) {
                        if ($(program_checkbox[index]).is(':checked')) {
                            let val = $(program_checkbox[index]).attr('data-value');
                            checked_val.push(parseFloat(val));
                        }

                    }
                    data_value = checked_val.reduce((a, b) => a + b, 0);
                    
                   


                    break;
                case 'ecommerce_form':
                    data_value = $(this).attr('data-value');
                            data_assoc = $(this).attr('data-assoc');

                    break;
                case 'seo_form':
                    data_value = $(this).attr('data-value');
                            data_assoc = $(this).attr('data-assoc');
                    break;
                case 'quote_form':
                    break;
                default:
                    break;
            }

            // console.log(data_assoc);
            let data = {
                'data_value': data_value,
                // 'data_assoc':data_assoc
            }
            jQuery.ajax({
                type: 'POST',
                url: 'backend/form_actions/multistep_ajax.php',
                data: data,
                success: function (response) {
                    console.log(response);
                    $('#' + data_assoc).val(response);

                },
                error: function (error) {
                    window.alert(error);
                }
            });
        });
    });







    //total

        let input_field = $('#calculator_box input:not(#total)').toArray();
        console.log(input_field);
        total_price = []
        $('body').on('click','.next__' , function(){
            for (let index = 0; index < input_field.length; index++) {
                console.log(jQuery(input_field[index]));
                let value__ = jQuery(input_field[index]).val();
                console.log(value__);
                if(value__ !== ""){
                    total_price.push(parseFloat(value__));
                }
                else{
                    total_price.push(0);
                }
            }
            console.log(total_price);
            if(total_price !== ""){
                const final_price = total_price.reduce((a, b) => a + b, 0);
                let total_field = $('#calculator_box #total') ;
                jQuery(total_field).val(final_price);
                total_price.length = 0;
            }
        });



})(jQuery);