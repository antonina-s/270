<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script defer src="script.js"></script>
    <title>TEST SHOP PHP id2724</title>
</head>
<body>



<header>
    <!-- Шапка сайта через grid. -->
    <div class="header-container-grid">
        <div class="header-left">
            <a href="index.html" title="The Belvedere in Vienna">
            <img class="header-left-logo" src="../Belvedere_Museum_Vienna_v0.5/images/belvedere_logo_300my_.svg" alt="Logo" title="The Belvedere in Vienna">
            </a>
        </div>

        <div class="header-menu-grid">
            <div class="menu-p"><a class="a-header-red-line" href="about.html">about</a></div>
            <div class="menu-p"><a class="a-header-red-line" href="tickets.html">tickets & visit</a></div>
            <div class="menu-p"><a class="a-header-red-line" href="exhibitions.html">exhibitions</a></div>
            <div class="menu-p"><a class="a-header-red-line" href="collections.html">collections</a></div>
            <div class="menu-p"><a class="a-header-red-line-page" href="shop.html">shop</a></div>
        </div>
        
        <div class="header-right">
            <div class="menu-p"><a class="a-header-red-line" title="Deutsch">de</a></div>
            <div class="menu-sym"><a class="a-header-red-line-sym" href="#" title="Search">search</a></div>
            <div class="menu-sym"><a class="a-header-red-line-sym" href="cart.html" title="Your Shopping Cart">shopping_cart</a></div>
        </div>

        <!-- Шапка сайта через гамбургер. -->
        <div class="header-hamburger">
            <ul class="menu-text">
                <li><a class="header-red-line" href="about.html">about</a></li>
                <li><a class="header-red-line" href="tickets.html">tickets & visit</a></li>
                <li><a class="header-red-line" href="exhibitions.html">exhibitions</a></li>
                <li><a class="header-red-line" href="collections.html">collections</a></li>
                <li><a class="header-red-line-page" href="shop.html">shop</a></li>
            </ul>
            <button class="menu-hamburger">
                <i class="menu-icon"><img class="pic-img" src="../Belvedere_Museum_Vienna_v0.5/images/belvedere_logo_MENU.svg"></i>
                <i class="close-icon"><img class="pic-img" src="../Belvedere_Museum_Vienna_v0.5/images/belvedere_logo_CLOSE.svg"></i>
            </button>
        </div>
    </div>
</header>



<h2 class="h2-red-italic" style="margin-top: 155px;">
    <?php
        foreach($result as $tit1) {
            echo " -!!!- $tit1[tit1] -!!!- ";
        }
    ?>
</h2>
<h2 style="line-height: 60px;">
        <?php
            foreach($result as $tit2) {
                echo " -!!!- $tit2[tit2] -!!!- ";
            }
        ?>
</h2>



<div class="section-item">
    <div class="section-item-container">

        <div class="s-item-top">
            <div class="s-item-top-text">
                    <?php
                        foreach($result as $p1) {
                            echo "<p> -!!!- $p1[p1] -!!!- </p>";
                        }
                    ?>
                <h3 class="h3-red-italic">
                        <?php
                            foreach($result as $pricevar) {
                                echo "-!!!- $pricevar[price_var] -!!!-";
                            }
                        ?>
                </h3>


                <div class="section-2" style="margin-top: 5%;">
                    <a href="tickets.html" title="">
                        <div class="section-2-container">
                            <div class="text-white">
                                <p><span class="section-2-a-text-white">Add to Cart</span></p>
                            </div>
                            <div class="circles">
                                <div class="white-circle"></div>
                                <div class="red-circle"></div>
                            </div>
                        </div>
                    </a>
                </div>


            </div>

            <div class="s-item-top-img">
                <!-- Подключаем картинку так!!! -->
                <?php
                    foreach($result as $img) {
                        // Не надо ничего дописывать! Не сработает!!!+
                        echo "<img src='$img[img]' alt='$img[img]'/>";
                    }
                ?>
            </div>

            <div class="s-item-top-text">
                <?php
                    foreach($result as $p2) {
                        echo "<p> -!!!- $p2[p2] -!!!- </p>";
                    }
                ?>
            </div>
        </div>

        <div class="s-item-middle">
            <h3 style="margin-bottom: 45px;">Details</h3>
            <div class="s-item-middle-block">
                <div class="s-item-middle-row-flex">
                    <p class="s-5-i-l">Associated Exhibition:</p>
                    <p class="s-5-i-r">
                        <a class="a-more-a" href="https://www.belvedere.at/en/age-durer" target="_blank">
                            <?php
                                foreach($result as $asexh) {
                                    echo "-!!!- $asexh[as_exh] -!!!-";
                                }
                            ?>
                        </a></p>
                </div>
                <div class="s-item-middle-row-flex">
                    <p class="s-5-i-l">Author:</p>
                    <p class="s-5-i-r">
                        <?php
                            foreach($result as $author) {
                                echo "-!!!- $author[author] -!!!-";
                            }
                        ?>
                    </p>
                </div>
                <div class="s-item-middle-row-flex">
                    <p class="s-5-i-l">Publishing Year:</p>
                    <p class="s-5-i-r">
                        <?php
                            foreach($result as $pubyear) {
                                echo "-!!!- $pubyear[pub_y] -!!!-";
                            }
                        ?>
                    </p>
                </div>
                <div class="s-item-middle-row-flex">
                    <p class="s-5-i-l">Publisher:</p>
                    <p class="s-5-i-r">
                        <?php
                            foreach($result as $publisher) {
                                echo "-!!!- $publisher[publisher] -!!!-";
                            }
                        ?>
                    </p>
                </div>
                <div class="s-item-middle-row-flex">
                    <p class="s-5-i-l">Number of Pages:</p>
                    <p class="s-5-i-r">
                        <?php
                            foreach($result as $pages) {
                                echo "-!!!- $pages[pages] -!!!-";
                            }
                        ?> pages</p>
                </div>
                <div class="s-item-middle-row-flex">
                    <p class="s-5-i-l">Format:</p>
                    <p class="s-5-i-r">
                        <?php
                            foreach($result as $format) {
                                echo "-!!!- $format[format] -!!!-";
                            }
                        ?>
                    </p>
                </div>
                <div class="s-item-middle-row-flex" style="border-bottom: 0.5px solid #ffffff;">
                    <p class="s-5-i-l">ISBN:</p>
                    <p class="s-5-i-r">
                        <?php
                            foreach($result as $isbn) {
                                echo "-!!!- $isbn[isbn] -!!!-";
                            }
                        ?>
                    </p>
                </div>

            </div>
        </div>

    </div>

    <h2 style="margin-top: 155px;">You May</h2>
    <h2 class="h2-red-italic" style="margin-bottom: 65px;">also like</h2>

    <div class="section-21-also-block-flex">
        <div>
            <div class="s-21-block-img-11"></div>
            <div class="s-21-block-text">
                <h3><span class="h3-red-italic">History and Architecture</span> RUS</h3>
                <h5>€ 14,90</h5>
            </div>
        </div>
        <div>
            <div class="s-21-block-img-99"></div>
            <div class="s-21-block-text">
                <h3><span class="h3-red-italic">Lois Weinberger.</span> Basics</h3>
                <h5>€ 29,80</h5>
            </div>
        </div>
        <div>
            <div class="s-21-block-img-9"></div>
            <div class="s-21-block-text">
                <h3><span class="h3-red-italic">Ferdinand Georg Waldmüller</span> FR</h3>
                <h5>€ 9,90</h5>
            </div>
        </div>
    </div>




        <!-- ?????????????????????????????????????????????????????????????????? -->
        <a href='product_index.php?id=$shop_item[id]'>
            <div>
                <div class="s-21-also-block-img">
                    <img src="
                        <?php echo $result['img']; ?>
                    "/>
                </div>
                <div class="s-21-block-text">
                    <h3><span class="h3-red-italic">
                        <?php echo $result['tit1']; ?>
                    </span> 
                        <?php echo $result['tit2']; ?>
                    </h3>
                    <h5>
                        <?php echo $result['price_var']; ?>
                    </h5>
                </div>
            </div>
        </a>


        <?php
            $item2374 = (int)$_GET[2374];
            $item2137 = (int)$_GET[2137];
            $item2384 = (int)$_GET[2384];
            foreach($result as $item2374) {
                echo "<a href='./index.php?id=$item2374['id']'>
                    <div>
                        <div class='s-21-also-block-img'>
                            <img src='$item2374[img]' alt='$item2374[title]'/>
                        </div>
                        <div class='s-21-block-text'>
                            <h3><span class='h3-red-italic'>$item2374[tit1]</span> $item2374[tit2]</h3>
                            <h5>$item2374[price_var]</h5>
                        </div>
                    </div>
                </a>";
            }
        ?>
    </div>



</div>



<footer style="color: #ffffff; margin-bottom: 155px;">
    <div class="footer-container">
        <div class="footer-left">
            <h3>Be the first to know about new&nbsp;exhibitions, workshops, guided&nbsp;tours, and special offers at&nbsp;the&nbsp;Belvedere.</h3>

            <!-- Поле ввода почты. -->
            <div class="footer-email">
                <form action="">
                    <input class="input-news-email" type="email" name="input-email-bottom" min="6" multiple placeholder="Newsletter" title="Be the first to know about new exhibitions, workshops, guided tours, and special offers at the Belvedere.">
                    <input class="input-news-submit" type="submit" value="" title="Register">
                </form>
                
            </div>
        </div>

        <div class="footer-right">
            <div class="f-right-1col">
                <p><a class="a-header-red-line" href="#">about us</a></p>
                <p><a class="a-header-red-line" href="#">press</a></p>
                <p><a class="a-header-red-line" href="#">venue hire</a></p>
            </div>
            <div class="f-right-2col">
                <p><a class="a-header-red-line" href="#">tourism | b2b</a></p>
                <p><a class="a-header-red-line" href="#">support</a></p>
                <p><a class="a-header-red-line" href="#">artothek</a></p>
            </div>
            <div class="f-right-3col">

                <div class="f-right-cont">
                    <a href="https://www.instagram.com/belvederemuseum">
                        <img class="footer-img" src="../Belvedere_Museum_Vienna_v0.5/images/pics/share-instagram.svg" title="Instagram">
                    </a>
                </div>
                <div class="f-right-cont">
                    <a href="https://www.facebook.com/belvederemuseum/">
                        <img class="footer-img" src="../Belvedere_Museum_Vienna_v0.5/images/pics/share-facebook.svg" title="Facebook">
                    </a>
                </div>
                <div class="f-right-cont">
                    <a href="https://www.tiktok.com/@belvederemuseum">
                        <img class="footer-img" src="../Belvedere_Museum_Vienna_v0.5/images/pics/share-tiktok.svg" title="TikTok">
                    </a>
                </div>
                <div class="f-right-cont">
                    <a href="https://www.youtube.com/c/belvederemuseum/">
                        <img class="footer-img" src="../Belvedere_Museum_Vienna_v0.5/images/pics/share-youtube.svg" title="YouTube">
                    </a>
                </div>
                <div class="f-right-cont">
                    <a href="https://www.facebook.com/belvederemuseum/">
                        <img class="footer-img" src="../Belvedere_Museum_Vienna_v0.5/images/pics/share-twitter.svg" title="Twitter">
                    </a>
                </div>
                <div class="f-right-cont">
                    <a href="https://www.facebook.com/belvederemuseum/">
                        <img class="footer-img" src="../Belvedere_Museum_Vienna_v0.5/images/pics/share-linked-in.svg" title="LinkedIn">
                    </a>
                </div>
            </div>
        </div>
    </div>



    <div class="footer-bottom">
        <div class="f-bottom-left">
            <p><a class="a-footer-red-line" href="https://www.belvedere.at/en/faq">FAQ</a></p>
            <p><a class="a-footer-red-line" href="https://www.belvedere.at/en/team">Team</a></p>
            <p><a class="a-footer-red-line" href="https://www.belvedere.at/en/terms-conditions-online-shop">Terms & Conditions</a></p>
            <p><a class="a-footer-red-line" href="https://www.belvedere.at/en/privacy-policy">Privacy Policy</a></p>
            <p><a class="a-footer-red-line" href="https://www.belvedere.at/en/legal-notice">Legal Notice</a></p>
            <p><a class="a-footer-red-line" href="https://www.belvedere.at/en/accessibility-statement">Accessibility Statement</a></p>
            <p id="footer-cookies" style="color: #7f7f7f;">Cookies</p>
        </div>
        <div class="f-bottom-right">
            <p style="text-align: right;"><a class="a-footer-red-line" href="https://www.belvedere.at/en">© 2023 Österreichische Galerie Belvedere</a></p>
        </div>
    </div>
</footer>



</body>
</html>