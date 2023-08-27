<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
    <link rel="stylesheet" type="text/css" href="style_shop.css">
    <script defer src="script.js"></script>
    <title>Museum Shop | Belvedere Museum Vienna</title>
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



<div class="section-1-shop">
    <h1>Museum</h1>
    <h1 class="h1-red-italic" style="line-height: 110px;">shop</h1>
</div>



<!-- Вывод всего по одинаковой ширине. -->
<!-- Вывод индекса: <p>$shop_item[id]</p> -->
<div class="section-21" style="margin-top: 155px;">
    <div class="section-21-container">

        <div class="section-21-block-flex">
            <?php
                foreach($result as $shop_item) {
                    // Можно добавить $key для счёта с 1.
                    // Ссылка на страницу по id в БД.
                    echo "<a href='product_index.php?id=$shop_item[id]'>
                        <div>
                            
                            <div class='s-21-block-img'>
                                <img src='$shop_item[img]' alt='$shop_item[tit1] $shop_item[tit2]'/>
                            </div>
                            <div class='s-21-block-text'>
                                <h3><span class='h3-red-italic'>$shop_item[tit1]</span> $shop_item[tit2]</h3>
                                <h5>$shop_item[price_var]</h5>
                            </div>
                        </div>
                    </a>";
                }
            ?>
        </div>

    </div>
</div>



<!-- Разные формы картинок. -->
<!-- <div class="section-21" style="margin-top: 55px;">
    <div class="section-21-container">

        <div class="section-21-block-flex">
            <div>
                <div class="s-21-block-img-1"></div>
                <div class="s-21-block-text-big">
                    <h3> <span class="h3-red-italic"> </span></h3>
                    <h5> </h5>
                </div>
            </div>

            <div>
                <div class="s-21-block-img-2"></div>
                <div class="s-21-block-text">
                    <h3> </span></h3>
                    <h5> </h5>
                </div>
            </div>

            <div>
                <div class="s-21-block-img-2"></div>
                <div class="s-21-block-text">
                    <h3><span class="h3-red-italic"> </span> </h3>
                    <h5> </h5>
                </div>
            </div>
        </div>

        <div class="section-21-block-flex">
            <div>
                <div class="s-21-block-img-3"></div>
                <div class="s-21-block-text">
                    <h3><span class="h3-red-italic"> </span></h3>
                    <h5> </h5>
                </div>
            </div>

            <div>
                <div class="s-21-block-img-4"></div>
                <div class="s-21-block-text">
                    <h3> <span class="h3-red-italic"> </span></h3>
                    <h5> </h5>
                </div>
            </div>

            <div>
                <div class="s-21-block-img-1"></div>
                <div class="s-21-block-text-big">
                    <h3><span class="h3-red-italic"> </span> </h3>
                    <h5> </h5>
                </div>
            </div>
        </div>

        <div class="section-21-block-flex">
            <div>
                <div class="s-21-block-img-1"></div>
                <div class="s-21-block-text-big">
                    <h3><span class="h3-red-italic"> </span> </h3>
                    <h5> </h5>
                </div>
            </div>

            <div>
                <div class="s-21-block-img-4"></div>
                <div class="s-21-block-text">
                    <h3><span class="h3-red-italic"> </span> </h3>
                    <h5> </h5>
                </div>
            </div>

            <div>
                <div class="s-21-block-img-4"></div>
                <div class="s-21-block-text">
                    <h3><span class="h3-red-italic"> </span> </h3>
                    <h5> </h5>
                </div>
            </div>
        </div>

        <div class="section-21-block-flex">
            <div>
                <div class="s-21-block-img-4"></div>
                <div class="s-21-block-text">
                    <h3> <span class="h3-red-italic"> </span></h3>
                    <h5> </h5>
                </div>
            </div>

            <div>
                <div class="s-21-block-img-4"></div>
                <div class="s-21-block-text">
                    <h3><span class="h3-red-italic"> </span> </h3>
                    <h5> </h5>
                </div>
            </div>

            <div>
                <div class="s-21-block-img-1"></div>
                <div class="s-21-block-text-big">
                    <h3> <span class="h3-red-italic"> </span></h3>
                    <h5> </h5>
                </div>
            </div>
        </div>

    </div>
</div> -->



<footer style="color: #ffffff;">
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
                <p><a class="a-header-red-line" href="about.html">about us</a></p>
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