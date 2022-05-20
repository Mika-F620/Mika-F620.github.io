<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="Pucca Portfolio Site">
	<meta name="keyword" content="Pucca Portfolio Site">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<?php wp_head(); ?>
</head>
<body class="preload">
    <!-- ヘッダー -->
    <header class="header_menu">
            <p class="logo"><a href="<?php echo home_url(); ?>">Pucca Portfolio Site</a></p>
            <!-- ハンバーガーメニュー -->
            <div class="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav id="hamburger-navigation">
                <ul>
                    <li><a href="<?php echo home_url(); ?>">Home</a></li>
                    <li><a href="<?php echo home_url('/about'); ?>">About</a></li>
                    <li><a href="<?php echo home_url('/works'); ?>">Works</a></li>
					<?php if(!is_front_page()) { ?>
                    <li><a href="<?php echo home_url(); ?>/#service">Service</a></li>
					<?php }else{ ?>
					<li><a href="#service">Service</a></li>
					<?php } ?>
                    <li><a href="<?php echo home_url('/contact'); ?>">Contact</a></li>
                </ul>
            </nav>
    </header>
    <!-- ヘッダー -->