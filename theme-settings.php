<?php
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Theme\ThemeSettings;
use Drupal\system\Form\ThemeSettingsForm;
use Drupal\Core\Form;

function home_d8_form_system_theme_settings_alter(&$form, Drupal\Core\Form\FormStateInterface $form_state) {

    // ----------- GENERAL -----------
    $form['options']['general'] = array(
        '#type' => 'fieldset',
        '#title' => t('General'),
    );
    // Breadcrumbs
    $form['options']['general']['breadcrumbs'] = array(
        '#type' => 'checkbox',
        '#title' => 'Breadcrumbs',
        '#default_value' => theme_get_setting('breadcrumbs'),
    );

    // Loader Setting
    $form['options']['general']['loader'] = array(
        '#type' => 'checkbox',
        '#title' => 'On/Off Loader',
        '#default_value' => theme_get_setting('loader'),
    );

    // RTL
    /* $form['options']['general']['rtl'] = array(
         '#type' => 'checkbox',
         '#title' => 'On/Off RTL',
         '#default_value' => theme_get_setting('rtl'),
     );*/




    // ----------- DESIGN -----------
    $form['options']['design'] = array(
        '#type' => 'vertical_tabs',
        '#title' => 'BYU Style Options: Design Your Site',
        '#open' => FALSE,
    );


    // Fonts
    $form['fonts'] = array(
        '#type' => 'details',
        '#title' => t('BYU Font Settings'),
        '#group' => 'design',
    );
    $form['fonts']['font_package'] = array(
        '#type' => 'select',
        '#title' => t('Which font package do you want to load?'),
        '#description' => t('If you select Sentinel below, then you need to use the FULL font package.'),
        '#options' => array(
            'fonts-basic' => t('Basic: Vitesse & Gotham'),
            'fonts-full' => t('Full: Vitesse, Gotham, Sentinel & a few others'),
        ),
        '#default_value' => theme_get_setting('font_package'),
    );
    $form['fonts']['font_one'] = array(
        '#type' => 'select',
        '#title' => t('H1 Font'),
        '#options' => array(
            'h1-vitesse' => t('Vitesse'),
            'h1-gotham' => t('Gotham'),
            'h1-sentinel' => t('Sentinel'),
        ),
        '#default_value' => theme_get_setting('font_one'),
    );
    $form['fonts']['font_one_color'] = array(
        '#type' => 'select',
        '#title' => t('H1 Color'),
        '#options' => array(
            'h1-navy' => t('Navy'),
            'h1-gray' => t('Gray'),
            'h1-black' => t('Black'),
        ),
        '#default_value' => theme_get_setting('font_one_color'),
    );
    $form['fonts']['font_two'] = array(
        '#type' => 'select',
        '#title' => t('H2 Font'),
        '#options' => array(
            'h2-vitesse' => t('Vitesse'),
            'h2-gotham' => t('Gotham'),
            'h2-sentinel' => t('Sentinel'),
        ),
        '#default_value' => theme_get_setting('font_two'),
    );
    $form['fonts']['font_two_color'] = array(
        '#type' => 'select',
        '#title' => t('H2 Color'),
        '#options' => array(
            'h2-navy' => t('Navy'),
            'h2-gray' => t('Gray'),
            'h2-black' => t('Black'),
        ),
        '#default_value' => theme_get_setting('font_two_color'),
    );
    $form['fonts']['font_three'] = array(
        '#type' => 'select',
        '#title' => t('H3 Font'),
        '#options' => array(
            'h3-vitesse' => t('Vitesse'),
            'h3-gotham' => t('Gotham'),
            'h3-sentinel' => t('Sentinel'),
        ),
        '#default_value' => theme_get_setting('font_three'),
    );
    $form['fonts']['font_three_color'] = array(
        '#type' => 'select',
        '#title' => t('H3 Color'),
        '#options' => array(
            'h3-navy' => t('Navy'),
            'h3-gray' => t('Gray'),
            'h3-black' => t('Black'),
        ),
        '#default_value' => theme_get_setting('font_three_color'),
    );

    $form['fonts']['font_four'] = array(
        '#type' => 'select',
        '#title' => t('H4 Font'),
        '#options' => array(
            'h4-vitesse' => t('Vitesse'),
            'h4-gotham' => t('Gotham'),
            'h4-sentinel' => t('Sentinel'),
        ),
        '#default_value' => theme_get_setting('font_four'),
    );
    $form['fonts']['font_four_color'] = array(
        '#type' => 'select',
        '#title' => t('H4 Color'),
        '#options' => array(
            'h4-navy' => t('Navy'),
            'h4-gray' => t('Gray'),
            'h4-black' => t('Black'),
        ),
        '#default_value' => theme_get_setting('font_four_color'),
    );
    $form['fonts']['font_five'] = array(
        '#type' => 'select',
        '#title' => t('H5 Font'),
        '#options' => array(
            'h5-vitesse' => t('Vitesse'),
            'h5-gotham' => t('Gotham'),
            'h5-sentinel' => t('Sentinel'),
        ),
        '#default_value' => theme_get_setting('font_five'),
    );
    $form['fonts']['font_five_color'] = array(
        '#type' => 'select',
        '#title' => t('H5 Color'),
        '#options' => array(
            'h5-navy' => t('Navy'),
            'h5-gray' => t('Gray'),
            'h5-black' => t('Black'),
        ),
        '#default_value' => theme_get_setting('font_five_color'),
    );
    $form['fonts']['p_font'] = array(
        '#type' => 'select',
        '#title' => t('Paragraph Font'),
        '#options' => array(
            'p-default' => t('Default'),
            'p-gotham' => t('Gotham (san serif)'),
            'p-libreb' => t('Libre Baskerville (serif)'),
        ),
        '#default_value' => theme_get_setting('p_font'),
    );
    $form['fonts']['fontawesome_use'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Load FontAwesome library'),
        '#default_value' => theme_get_setting('fontawesome_use'),
    );




    // Header Option
//    $form['header_style'] = array(
//        '#type' => 'details',
//        '#title' => 'BYU Header',
//        '#group' => 'design',
//    );
//    $form['header_style']['header_option'] = array(
//        '#type' => 'select',
//        '#title' => 'Select a header style option:',
//        '#default_value' => theme_get_setting('header_option'),
//        '#options' => array(
////            'none' => 'None',
//            'h_default' => 'Header Default - Set Width',
//            'h_fullwidth' => 'Header FullWidth',
//            'h_center_identity' => 'Header - Center Identity',

//            'h_default_big_logo' => 'Header Default + Big Logo',
//            'h_flat' => 'Header Flat',
//            'h_flat_topbar' => 'Header Flat + Top Bar',
//            'h_flat_colored_topbar' => 'Header Flat + Colored Top Bar',
//            'h_flat_topbar_search' => 'Header Flat + Topbar Search',
//            'h_center' => 'Header Center',
//            'h_narrow' => 'Header Narrow',
//            'h_transparent' => 'Header Transparent',
//            'h_transparent_bottom_border' => 'Header Transparent bottom border',
//            'h_semi_transparent' => 'Header Semi Transparent',
//            'h_semi_transparent_light' => 'Header Semi Transparent Light',
//            'h_navbar' => 'Header Navbar',
//            'h_navbar_extra_info' => 'Header Navbar + Extra Info',
//            'h_without_menu' => 'Header Without Menu',

//            'h_below_slider' => 'Header Below Slider',

//        ),

//    );
    $form['header_style']['identity'] = array(
        '#type' => 'fieldset',
        '#title' => 'Identity Banner Settings',
        '#open' => FALSE,
    );
    $form['header_style']['identity']['front_animation_use'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Animate the Brand Logo on the front page'),
        '#default_value' => theme_get_setting('front_animation_use'),
        '#description'   => t("Adds slide in down animation."),
    );
    $form['header_style']['identity']['nonfront_animation_use'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Animate the Brand Logo on all non-front pages'),
        '#default_value' => theme_get_setting('nonfront_animation_use'),
        '#description'   => t("Adds slide in down animation."),
    );


    $form['header_style']['subtitle'] = array(
        '#type' => 'fieldset',
        '#title' => 'Subtitle Settings',
        '#open' => FALSE,
    );
    $form['header_style']['subtitle']['subtitle_use'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Use Subtitle'),
        '#default_value' => theme_get_setting('subtitle_use'),
        '#description'   => t("Add Sub Title to the site header."),
    );
    $form['header_style']['subtitle']['subtitle_above'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Subtitle Above'),
        '#default_value' => theme_get_setting('subtitle_above'),
        '#description'   => t("Place the subtitle above the Main Title."),
    );
    $form['header_style']['subtitle']['subtitle_italic'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Subtitle Italic'),
        '#default_value' => theme_get_setting('subtitle_italic'),
        '#description'   => t("Italicize the subtitle."),
    );
    $form['header_style']['subtitle']['subtitle_text'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Site Subtitle'),
        '#default_value' => theme_get_setting('subtitle_text'),
        '#description'   => t("The subtitle appears below (or above) the Main Title."),
    );


    $form['header_style']['user_info'] = array(
        '#type' => 'fieldset',
        '#title' => 'User Information & SIgn In Settings',
        '#open' => TRUE,
    );
    $form['header_style']['user_info']['login_use'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Display Sign In/Out block'),
        '#default_value' => theme_get_setting('login_use'),
        '#description'   => t("Choose to display a Sign In link."),
    );

    $form['header_style']['user_info']['login_url'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Login Url'),
        '#default_value' => theme_get_setting('login_url'),
        '#description'   => t("The subtitle appears below (or above) the Main Title. Default value if blank is '../user'. If you are using the CAS module, use '../cas'."),
    );
    $form['header_style']['user_info']['logout_url'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Logout Url'),
        '#default_value' => theme_get_setting('logout_url'),
        '#description'   => t("The subtitle appears below (or above) the Main Title.  Default value if blank is '../user/logout'. If you are using the CAS module, use '../caslogout'."),
    );
    $form['header_style']['user_info']['myaccount_use'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('My Account'),
        '#default_value' => theme_get_setting('myaccount_use'),
        '#description'   => t("Link the username / name display to a user account page."),
    );
    $form['header_style']['user_info']['myaccount_url'] = array(
        '#type'          => 'textfield',
        '#title'         => t('My Account Url'),
        '#default_value' => theme_get_setting('myaccount_url'),
//        '#default_value' => variable_get('myaccount_url', '../user/'),
//        '#default_value' => '../user',
        '#description'   => t("Provide the relative url for my account. Default value if blank is '../user'."),
    );


// Search Settings

    $form['header_style']['search'] = array(
        '#type' => 'fieldset',
        '#title' => 'Search Settings',
        '#open' => FALSE,
    );
    $form['header_style']['search']['search_use'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Display a Search bar in the header'),
        '#default_value' => theme_get_setting('search_use'),
//        '#description'   => t("Choose to display a Sign In link."),
    );
//    $form['header_style']['user_info']['logout_url'] = array(
//        '#type'          => 'textfield',
//        '#title'         => t('Custom Search Url'),
//        '#default_value' => theme_get_setting('logout_url'),
//        '#description'   => t("The subtitle appears below (or above) the Main Title.  Default value if blank is '../user/logout'. If you are using CAS, use '../caslogout'."),
//    );

//Header Actions Settings
    $form['header_style']['header_actions'] = array(
        '#type' => 'fieldset',
        '#title' => t('Action Links'),
        '#open' => FALSE,
    );
    $form['header_style']['header_actions']['actions_info'] = array(
        '#markup' => '<p>Action Links are very short links for a unique user action. For instance, this could be an "Apply" link or "Cart".
There should only ever be 2 one-word links or one 2-word link, as this space is minimal. To place these links, go to
the <a href="../admin/structure/block" target="_blank">blocks page</a> and place a block into the Header Actions region.</p><p>Action links
are placed at the bottom of the menu in mobile views. Please make sure your content fits at various breakpoints.</p>',
    );
    $form['header_style']['header_actions']['actions_bg'] = array(
        '#type' => 'select',
        '#title' => t('Action Link Button Style'),
        '#description' => t('If enabled, the site name and main menu will appear in a bar along the top of the page. You will want to make sure that the menu background is set to transparent.'),
        '#options' => array(
            'none' => t("No button style"),
            'royal'=> t('Royal Blue button'),
        ),
        '#default_value' => theme_get_setting('actions_bg'),
    );

//Menu Settings
    $form['header_style']['menu'] = array(
        '#type' => 'fieldset',
        '#title' => t('Menu Settings'),
        '#open' => FALSE,
    );
    $form['header_style']['menu']['menu_disable'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Disable the menu.'),
        '#default_value' => theme_get_setting('menu_disable'),
//        '#description'   => t("This allows part of the hero to show through behind the menu."),
    );
    $form['header_style']['menu']['transparent'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Make menu background transparent'),
        '#default_value' => theme_get_setting('transparent'),
        '#description'   => t("This allows part of the hero to show through behind the menu."),
    );

// Hero
    $form['header_style']['hero'] = array(
        '#type' => 'fieldset',
        '#title' => t('Hero Settings'),
        '#open' => FALSE,
    );
    $form['header_style']['hero']['hero_show_behind_menu'] = array(
        '#type' => 'select',
        '#title' => t('How do you want the Hero space & Menu to be?'),
        '#description' => t('If enabled, the site name and main menu will appear in a bar along the top of the page. You will want to make sure that the menu background is set to transparent.'),
        '#options' => array(
            0 => t("Show normally below the menu, not behind the menu (constrained OR full)"),
            1 => t('Show Full Width Hero behind menu'),
            2 => t('Not Using Full Width Hero - Show constrained width hero behind the menu.'),
        ),
        '#default_value' => theme_get_setting('hero_show_behind_menu'),
    );
    $form['header_style']['hero']['hero_full_image_width'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Full width Header: Make images stretch full width'),
        '#default_value' => theme_get_setting('hero_full_image_width'),
        '#description'   => t("If you are using full width region..."),
    );
    $form['header_style']['hero']['hero_constrained_image_width'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Constrained width: Make images stretch to container width'),
        '#default_value' => theme_get_setting('hero_constrained_image_width'),
        '#description'   => t("If you are using constrained hero region..."),
    );


    /* ---- General Page settings -- */
    $form['general_page'] = array(
        '#type' => 'details',
        '#title' => t('BYU General Page'),
//        '#collapsible' => TRUE,
        '#group' => 'design',
    );
    $form['general_page']['full_width'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('Full Width instead of Constrained Width'),
        '#default_value' => theme_get_setting('full_width'),
        '#description'   => t("Choose to have all pages extend full width. This applies to BYU Header, page content, and BYU Footer."),
    );
//    $form['general_page']['custom_width'] = array(
//        '#type' => 'select',
//        '#title' => 'Custom Page Width',
//        '#default_value' => theme_get_setting('custom_width'),
//        '#options' => array(
//            '1200' => '1200px',
//            '1024' => '1024px',
//            '1000' => '1000px',
//        ),
//    );
    $form['general_page']['custom_width'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Custom Page Width'),
        '#default_value' => theme_get_setting('custom_width'),
        '#description'   => t("Enter the number of pixels you would like. i.e. '1200' fof 1200px. Defaults to 1000px."),
    );
    $form['general_page']['min_page_height'] = array(
        '#type' => 'select',
        '#title' => 'Custom Page Height',
        '#default_value' => theme_get_setting('min_page_height'),
        '#options' => array(
            'none' => 'None',
            '300' => '300px',
            '500' => '500px',
        ),
    );
//        '#type'          => 'textfield',
//        '#title'         => t('Minimum page Height'),
//        '#default_value' => theme_get_setting('min_page_height'),
//        '#description'   => t("Specify '500' if you want to set a min-height of 500px on your page content area. This is for pages with very minimal content, where you don't want the
//        footer to come up too high. Use this if you'd rather have white space on extremely short-content pages."),
//    );
    $form['general_page']['byu_styles'] = array(
        '#type' => 'fieldset',
        '#title' => t('Extra BYU Styles'),
        '#open' => FALSE,
    );
    $form['general_page']['byu_styles']['byu_styles_info'] = array(
        '#markup' => '<p>Enabling these styles doesn\'t necessarily mean the styles will immediately take effect. Most of these styles make byu classes available for use as you choose to apply them.</p>',
    );
    $form['general_page']['byu_styles']['byu_buttons'] = array(
        '#type'          => 'checkbox',
        '#title'         => t('BYU Button Styles'),
        '#default_value' => theme_get_setting('byu_buttons'),

    );
    $form['general_page']['your_css'] = array(
        '#type' => 'textarea',
        '#title' => 'Add Your Css',
        '#default_value' => theme_get_setting('your_css'),
    );





// Page Header
    $form['page_header'] = array(
        '#type' => 'details',
        '#title' => 'Page Header Style',
        '#group' => 'design',
    );
    $form['page_header']['page_header_option'] = array(
        '#type' => 'select',
        '#title' => 'Select a header style option:',
        '#default_value' => theme_get_setting('page_header_option'),
        '#options' => array(
            'none' => 'None',
            'ph_default' => 'Default',
            'ph_light' => 'Light',
            'ph_light_reverse' => 'Light - Reverse',
            'ph_parallax' => 'Parallax',
            'ph_center' => 'Center',
        ),
    );
    // Page Header
    $form['page_header']['page_header_color'] = array(
        '#type' => 'fieldset',
        '#title' => 'Page Header Color',
        '#description' => 'This Feature just support for Page Header Default',
    );
    $form['page_header']['page_header_color']['page_header_color_option'] = array(
        '#type' => 'select',
        '#title' => 'Select a header style option:',
        '#default_value' => theme_get_setting('page_header_color_option'),
        '#options' => array(
            'none' => 'None',
            'page-header-primary' => 'Primary Color',
            'page-header-secondary' => 'Secondary Color',
            'page-header-tertiary' => 'Tertiary Color',
            'page-header-quaternary' => 'Quaternary Color',
        ),

        '#states' => array (
            'visible' => array(
                'select[name = page_header_option]' => array('value' => 'ph_default')
            )
        )
    );
    // Header Below Slider
    $form['below_slider'] = array(
        '#type' => 'details',
        '#title' => 'Header Below Slider',
        '#description' => 'This Feature just support for Header Below Slider',
        '#group' => 'design',
    );
    $form['below_slider']['below_slider_option'] = array(
        '#type' => 'checkbox',
        '#title' => 'Show Header Below Slider',
        '#default_value' => theme_get_setting('below_slider_option'),
        '#states' => array (
            'visible' => array(
                'select[name = header_option]' => array('value' => 'h_below_slider')
            )
        )
    );
//    //Side Header Semi Transparent
//    $form['h_semi_transparent'] = array(
//        '#type' => 'details',
//        '#title' => 'Side Header Semi Transparent',
//        '#description' => 'This Feature just support for Header Left Side',
//    );
//    $form['h_semi_transparent']['h_semi_transparent_option'] = array(
//        '#type' => 'checkbox',
//        '#title' => 'Side Header Semi Transparent',
//        '#default_value' => theme_get_setting('h_semi_transparent_option'),
//        '#states' => array (
//            'visible' => array(
//                'select[name = header_option]' => array('value' => 'h_left'),
//            )
//        )
//    );



    // Footer Option
    $form['footer_style'] = array(
        '#type' => 'details',
        '#title' => 'BYU Footer',
        '#group' => 'design',
    );

    // Footer Option
    $form['footer_style']['footer_option'] = array(
        '#type' => 'select',
        '#title' => 'Select a footer style option:',
        '#default_value' => theme_get_setting('footer_option'),
        '#options' => array(
            'normal' => 'Normal',
            'one_two_merged' => 'Double wide, normal, normal (2:1:1 columns) - leave Footer 2 empty.',
            'two_three_merged' => 'Normal, double wide, normal (1:2:1 columns) - leave Footer 3 empty.',
            'three_four_merged' => 'Normal, normal, double wide (1:1:2 columns) - leave Footer 4 empty.',
        ),
        '#description' => 'If you select any footer layout besides normal, do not place content in the Footer 4 region. It will not be used.',
    );
    $form['footer_style']['footer_regions'] = array(
        '#markup' => '<p>To place content in the footer, go to the <a href="../admin/structure/block" target="_blank">blocks page</a> and place blocks into one of the footer regions. Footer 1, Footer 2, Footer 3, and Footer 4 correspond to the 4 footer columns.</p><p>The header for the footer column will be the block title of the first block in the region.</p>',
    );
    // Footer Colour
//    $form['footer_color'] = array(
//        '#type' => 'details',
//        '#title' => 'Footer color',
//    );

    // Footer Colour
//    $form['footer_color']['footer_color_option'] = array(
//        '#type' => 'select',
//        '#title' => 'Select a footer style option:',
//        '#default_value' => theme_get_setting('footer_color_option'),
//        '#options' => array(
//            'none' => 'None',
//            'color-primary' => 'Primary Color',
//            'color-secondary' => 'Secondary Color',
//            'color-tertiary' => 'Tertiary Color',
//            'color-quaternary' => 'Quaternary Color',
//        ),
//    );

    // Sticky Header
//    $form['header_sticky'] = array(
//        '#type' => 'fieldset',
//        '#title' => '<div class="plus"></div><h3 class="options_heading">Header Sticky</h3>',
//    );
//    // Sticky Header Option
//    $form['header_sticky']['header_sticky_option'] = array(
//        '#type' => 'select',
//        '#title' => 'Select a style option:',
//        '#default_value' => theme_get_setting('header_sticky_option'),
//        '#options' => array(
//            'none' => 'Disable',
//            'always_sticky' => 'Always Sticky',
//        ),
//    );
    // Navigation
//    $form['navigation'] = array(
//        '#type' => 'fieldset',
//        '#title' => '<div class="plus"></div><h3 class="options_heading">Setting Navigation</h3>',
//    );
//    // Navigation Option
//    $form['navigation']['navigation_option'] = array(
//        '#type' => 'select',
//        '#title' => 'Select a style option:',
//        '#default_value' => theme_get_setting('navigation_option'),
//        '#options' => array(
//            'none' => 'None',
//            'header-nav-dark-dropdown' => 'Dark Dropdown',
//            'header-nav-top-line' => 'Top line'
//        ),
//    );

    // Layout Option
//    $form['layout_style'] = array(
//        '#type' => 'details',
//        '#title' => 'Layout Style',
//    );
//
//    $form['layout_style']['layout_option'] = array(
//        '#type' => 'select',
//        '#title' => 'Select a layout style:',
//        '#default_value' => theme_get_setting('layout_option'),
//        '#options' => array(
//            'boxed' => 'Boxed',
//            'dark' => 'Dark',
//            'widescreen' => 'Widescreen (default)',
//
//        ),
//    );
//    // Skins
//    $form['skin'] = array(
//        '#type' => 'details',
//        '#title' => '<div class="plus"></div><h3 class="options_heading">Skins</h3>',
//    );
//
//    $form['skin']['skin_option'] = array(
//        '#type' => 'select',
//        '#title' => 'Select a Skin Style:',
//        '#default_value' => theme_get_setting('skin_option'),
//        '#options' => array(
//            'none' => 'None',
//            'default' => 'Default',
//            'skin-corporate-3' => 'Corporate 3',
//            'skin-corporate-4' => 'Corporate 4',
//            'skin-corporate-5' => 'Corporate 5',
//            'skin-corporate-6' => 'Corporate 6',
//            'skin-corporate-7' => 'Corporate 7',
//            'skin-corporate-8' => 'Corporate 8',
//        ),
//    );

    // Contact
    $form['contact'] = array(
        '#type' => 'details',
        '#title' => 'Contact',
        '#description' => 'Show in header : Default + Language Dropdown',
        '#group' => 'design',
    );
    $form['contact']['contact_option'] = array(
        '#type' => 'textfield',
        '#default_value' => theme_get_setting('contact_option'),
        '#description' => 'Show in header : Default + Language Dropdown',
    );
    $form['contact']['contact_about_link'] = array(
        '#type' => 'textfield',
        '#title' => 'Link',
        '#default_value' => theme_get_setting('contact_about_link'),
        '#description' => 'Show in header : Default + Language Dropdown',
    );
    $form['contact']['contact_about'] = array(
        '#type' => 'textfield',
        '#title' => 'Title',
        '#default_value' => theme_get_setting('contact_about'),
        '#description' => 'Show in header : Default + Language Dropdown',
    );
    $form['contact']['contact_us_link'] = array(
        '#type' => 'textfield',
        '#title' => 'Link',
        '#default_value' => theme_get_setting('contact_us_link'),
        '#description' => 'Show in header : Default + Language Dropdown',
    );
    $form['contact']['contact_us'] = array(
        '#type' => 'textfield',
        '#title' => 'Title',
        '#default_value' => theme_get_setting('contact_us'),
    );

}