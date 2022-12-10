(function ($) {

    //all input elements in form
    let let_all_inputs = $('input');
    //parent element i.e div of input elements
    let parent_div_of_input = $(let_all_inputs).parent();
    //adding class to parent div
    parent_div_of_input.addClass('form_field__');


    /***adding message box ***/
    $('.form_field').append("<div class='est_message_box' id='est_message_box'></div>")
    let message_box = $('.est_message_box');
    message_box.hide();

    // disable next button if form has a required field
    let all_forms = $('.section_form').toArray();
    // console.log(all_forms);
    all_forms.forEach(all_form => {
        let ids = $(all_form).attr('id');
        let required_element = $('#' + ids + ' input:required');
        if( required_element.length > 0 ){
            $('#'+ ids + ' .next__').attr('disabled', 'disabled')
        }
    });

    let all_nav_buttons = $('li.nav-item > button.nav-link').toArray();
    console.log(all_nav_buttons);
    all_nav_buttons.forEach(all_nav_button => {
        const button_id = $(all_nav_button).attr('id');
        // $('#'+ button_id).attr('disabled','disabled');
    });

    all_forms.forEach(all_form => {
        let ids_ = $(all_form).attr('id');
        console.log(ids_)
        //next btn
        $('#'+ ids_).on('click', '.next__', function(){
            let current_tab_pane = $(this).parentsUntil('.tab-pane').parent();
            let current_id = $(current_tab_pane).attr('id');
            console.log($('#'+current_id+'-tab').parent().next().children().removeAttr('disabled'));
            console.log($('#'+current_id+'-tab').parent().next().children().click());

            // $(current_tab_pane).removeClass('show active');
            // $(current_tab_pane).next().addClass('show active');
            // $('#pages-tab').removeAttr('disabled');
            // $('#pages-tab').click();
        });
        //previous btn
        $('#'+ ids_).on('click', '.previous__', function(){
            let current_tab_pane = $(this).parentsUntil('.tab-pane').parent();
            let current_id = $(current_tab_pane).attr('id');
            console.log($('#'+current_id+'-tab').parent().prev().children().removeAttr('disabled'));
            console.log($('#'+current_id+'-tab').parent().prev().children().click());
        });
    });


    // for design tab since it is visible on load 
    let design_tab = $('.tab-pane.active');
    let id_design_tab = $(design_tab).find('.section_form').attr('id');
    //for design tab
    $('#' + id_design_tab).on('change', 'input[type="radio"]', function () {
        if ($(this).attr('data-label') === 'Custom Website with Consultative Process') {
            message_box.show();
            message_box.append("<div class='design_message_box_1'><p>testt</p></div>");
            $('.design_message_box_2').remove();
        }
        else if ($(this).attr('data-label') === 'Fast Design Website with Less Consulting & Meetings') {
            message_box.show();
            message_box.append("<div class='design_message_box_2'><p>testttt</p></div>");
            $('.design_message_box_1').remove();
        }

        let get_name = $(this).attr('name');
        console.log(get_name);
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
                        break;
                    case 'programming_form':
                        programming(form_name);
                        break;
                    case 'ecommerce_form':
                        ecommerce(form_name);
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
        console.warn('hello' + page);
        let this_message_box = '#' + page + ' .' + $(message_box).attr('class');
        $('#' + page + ' .est_message_box:nth-of-type(2)').remove();
        $('#' + page).on('change', 'input[type=radio]', function () {
            if ($(this).attr('data-label') === 'I will create and add content to all pages on my own') {
                $(this_message_box).show();
                $(this_message_box).append('<div class="design_message_box_1"> heree goes something</div>');
                $('#' + page + ' .design_message_box_2').remove();
            }
            else if (($(this).attr('data-label') === 'I would like the pages in my website to be professionally designed') || ($(this).attr('data-label') === 'I would like to do a mixture of both')) {
                $(this_message_box).show();
                if ($('#' + page + ' .design_message_box_2').length === 0) {
                    $(this_message_box).append('<div class="design_message_box_2"><input required class="form-control" type="number"></div>')
                }
                $('#' + page + ' .design_message_box_1').remove();
                console.log($('#' + page + ' .design_message_box_2').length);
            }
        });
    }

    function pages_required(page) {
        let all_required_inputs = $('#' + page + ' input:required').toArray();
        console.log(all_required_inputs);
        let all_required_this = [];
        all_required_inputs.forEach(all_required_this__ => {
            all_required_this.push($(all_required_this__).attr('name'));

        });
        console.log(all_required_this);
        $('#' + page).on('change', 'input[type="radio"]', function () {
            for (let index = 0; index < all_required_this.length; index++) {
                if ($('#' + page + ' input[name="' + all_required_this[index] + '"]').is(':checked')) {
                    $('#' + page + ' .next__').removeAttr('disabled');
                }
            }
        });

    }

    function content_dev(content) {
        console.warn('hello' + content);
        let this_message_box = '#' + content + ' .' + $(message_box).attr('class');
        $('#' + content + ' .est_message_box:nth-of-type(2)').remove();
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
                console.log($('#' + content + ' .design_message_box_2').length);
            }
        });
    }

    function programming(program) {
        console.warn('hello' + program);
    }

    function ecommerce(ecom) {
        console.warn('hello' + ecom);
    }

    function seo(seo_) {
        console.warn('hello' + seo_);
    }

    function quote(value__) {
        console.warn('hello' + value__);
    }

})(jQuery);