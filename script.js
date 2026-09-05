$(document).ready(function () {

    const $carouselInner = $(".carousel-inner");

    function updateActive() {
        const $items = $carouselInner.find(".carousel-item");

        $items.removeClass("active");
        $items.eq(Math.floor($items.length / 2)).addClass("active");
    }

    function centerActive() {
        const $active = $carouselInner.find(".carousel-item.active");

        const containerWidth = $carouselInner.width();
        const itemWidth = $active.outerWidth(true);

        const scrollTo =
            $active.position().left +
            $carouselInner.scrollLeft() -
            (containerWidth / 2) +
            (itemWidth / 2);

        $carouselInner.stop().animate({
            scrollLeft: scrollTo
        }, 500);
    }

    function moverCarrossel(direcao) {

        if (direcao === "proximo") {

            const $item = $carouselInner.find(".carousel-item").first();

            $item.fadeOut(200, function () {
                $item.appendTo($carouselInner).show();
                updateActive();
                centerActive();
            });

        } else {

            const $item = $carouselInner.find(".carousel-item").last();

            $item.hide().prependTo($carouselInner).fadeIn(200, function () {
                updateActive();
                centerActive();
            });

        }
    }

    $(".carousel-control-next").click(function () {
        moverCarrossel("proximo");
    });

    $(".carousel-control-prev").click(function () {
        moverCarrossel("anterior");
    });

    updateActive();
    centerActive();
    $('#offcanvasScrolling .nav-link').on('click', function () {

        const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(
            document.getElementById('offcanvasScrolling')
        );

        offcanvas.hide();

    });

});