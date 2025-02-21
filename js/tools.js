var landdryTechSwiper = null;
var landdryInstallationSwiper = null;
var landdryCatalogueSwiper = null;

$(window).on('load resize', function() {

    $('.landdry-techs-list').each(function() {
        var curSlider = $(this);
        if (curSlider.hasClass('swiper-initialized')) {
            landdryTechSwiper.destroy();
        }
        if ($(window).width() < 1220) {
            landdryTechSwiper = new Swiper('.landdry-techs-list', {
                slidesPerView: 'auto',
                freeMode: true,
                watchSlidesProgress: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                }
            });
        }
    });

    $('.landdry-installation-list').each(function() {
        var curSlider = $(this);
        if (curSlider.hasClass('swiper-initialized')) {
            landdryInstallationSwiper.destroy();
        }
        if ($(window).width() < 1220) {
            landdryInstallationSwiper = new Swiper('.landdry-installation-list', {
                slidesPerView: 'auto',
                freeMode: true,
                watchSlidesProgress: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                }
            });
        }
    });

    $('.landdry-catalogue-list').each(function() {
        var curSlider = $(this);
        if (curSlider.hasClass('swiper-initialized')) {
            landdryCatalogueSwiper.destroy();
        }
        if ($(window).width() < 1220) {
            landdryCatalogueSwiper = new Swiper('.landdry-catalogue-list', {
                slidesPerView: 1
            });
        }
    });

});