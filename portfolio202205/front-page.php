<?php get_header(); ?>
<main>
    <!-- メイン画像 -->
    <div class="mv section_mb">
        <div class="mv_catch">   
            <h1>Pucca Portfolio Site</h1>
            <p>Web制作ならお任せ下さい。</p>
        </div>
    </div>
    <!-- メイン画像 -->
    <!-- Works -->
    <section class="wrapper section_mb">
<?php
$args = array(
'post_type' => 'works',
'post_per_page' => 4,
);
?>
        <h2>Works</h2>
        <p class="h2_sub">制作実績</p>
        <!-- Slick -->
        <div class="slider">
<?php $my_query = new WP_Query($args); ?>
<?php while($my_query->have_posts()) : $my_query->the_post(); ?>

            <div class="works_card">
<a href="<?php echo the_field('url'); ?>">
<?php if(get_field('img')): ?>
                <img src="<?php the_field('img'); ?>" alt="<?php echo the_field('title'); ?>">
<?php endif; ?>
                <p class="works_card_kinds"><?php echo the_field('kinds');  ?></p>
                <p class="works_card_title"><?php echo the_field('title'); ?></p>
</a>
            </div>
<?php endwhile; ?>
<?php wp_reset_postdata(); ?>
        </div>
        <!-- Slick -->
        <div class="button_right"><button onclick="location.href='<?php echo home_url(); ?>/works'">もっと見る→</button></div>
    </section>
    <!-- Works -->

    <!-- Service -->
    <section id="service" class="bg_blue section_mb">
        <div class="wrapper">
            <h2>Service</h2>
            <p class="h2_sub">サービス内容</p>
            <div class="service1">
                <img src="<?php echo get_template_directory_uri(); ?>/img/service1.jpg" alt="HTML&CSS">
                <div class="service_text">
                    <h3>コーディング</h3>
                    <p>ご用意いただきましたデザイン通りにコーディングいたします。<br>パソコンやスマホでの表示にも対応し、事前に決めた納期までに仕上げます。</p>
                </div>
            </div>
            <div class="service2">
                <img src="<?php echo get_template_directory_uri(); ?>/img/service2.jpg" alt="javascript">
                <div class="service_text">
                    <h3>動きを付ける</h3>
                    <p>Webサイトでよく見かけるスライダーやメニューのボタンをクリックすると滑らかに該当場所へ移動するといった動きを付けます。</p>
                </div>
            </div>
            <div class="service3">
                <img src="<?php echo get_template_directory_uri(); ?>/img/service3.jpg" alt="wordpress">
                <div class="service_text">
                    <h3>Wordpress実装</h3>
                    <p>オリジナルテーマを構築することも可能です。<br>お問い合わせ機能やカスタム投稿機能なども実装します。</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Service -->

    <!-- About -->
    <section class="wrapper section_mb">
        <h2>About</h2>
        <p class="h2_sub">自己紹介</p>
        <div class="about_self">
            <p class="self_img"><img src="<?php echo get_template_directory_uri(); ?>/img/about_img.png" alt="似顔絵"></p>
            <p class="self_text">はじめまして。プッカと申します。<br>
                コーダーとしてWebサイトやLPのコーディングを行っています。<br>
                Webアクセシビリティのお仕事もさせていただいており、障がいをお持ちの方がどのようにサイトを閲覧されているのかなど触れる機会があり、いつも新しい発見をさせていただいています。<br>
                最近は医療系や福祉系のサイト制作などに関わらせていただくことが増えてきています。<br>
                もしご質問などございましたらお気軽にご相談下さい。
            </p>
        </div>
        <div class="button_right"><button onclick="location.href='<?php echo home_url(); ?>/about'">もっと見る→</button></div>
    </section>
    <!-- About -->

    <!-- CTA -->
    <section class="bg_blue cta_pd">
        <div class="wrapper cta">
            <p>当サービスのご質問は、<br>こちらからお気軽にお問い合わせください！</p>
            <div class="button_center button_pd"><button onclick="location.href='<?php echo home_url(); ?>/contact'">お問い合わせ</button></div>
        </div>
    </section>
    <!-- CTA -->
</main>
<?php get_footer(); ?>