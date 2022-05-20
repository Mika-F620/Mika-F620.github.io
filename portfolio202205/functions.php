<?php

add_theme_support( 'title-tag' );

function my_scripts() {
    wp_enqueue_style( 'slick', get_template_directory_uri() . '/slick/slick-theme.css');
    wp_enqueue_style( 'slick2', get_template_directory_uri() . '/slick/slick.css');
	wp_enqueue_style( 'tagpager', get_template_directory_uri() . '/tabpager/jquery.tabpager.css');
    wp_enqueue_style( 'reset', get_template_directory_uri() . '/css/reset.css');
    wp_enqueue_style( 'works', get_template_directory_uri() . '/css/works.css');
    wp_enqueue_style( 'contact', get_template_directory_uri() . '/css/contact.css');
	wp_enqueue_style( 'about2', get_template_directory_uri() . '/css/about.css');
    wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css');
	wp_enqueue_script('ajax', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
	wp_enqueue_script('preload', get_template_directory_uri() . '/js/preload.js');
  }
add_action( 'wp_enqueue_scripts', 'my_scripts' );

// サムネイル投稿欄表示
add_theme_support('post-thumbnails');

//固定ページ内img記述のためのショートコード
function replaceImagePath($arg) {
    $content = str_replace('"img/', '"' . get_stylesheet_directory_uri() . '/img/', $arg);
        return $content;
}
add_action('the_content', 'replaceImagePath');

//固定ページのみ自動的に付与されるpタグやbrタグを無効
function disable_page_wpautop() {
    if ( is_page() ) remove_filter( 'the_content', 'wpautop' );
}
add_action( 'wp', 'disable_page_wpautop' );

?>