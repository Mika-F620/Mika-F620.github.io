<!-- フッター -->
    <footer>
        <nav>
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
        <p>&copy;2022 Pucca Portfolio Site</p>
    </footer>

    <script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/slick/slick.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/tabpager/jquery.tabpager.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
<?php wp_footer(); ?>
</body>
</html>