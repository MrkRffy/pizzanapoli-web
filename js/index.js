$(document).ready(function () {
    AOS.init();

    function adjustNavBar() {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > ($nav.height() - 50));
    }

    $(function () {
        adjustNavBar();

        $(document).scroll(function () {
            adjustNavBar()
        });
    });

    $(".navbar-brand").on('click', function (event) {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: 0
        }, 800, function () {
            window.location.hash = hash;
        });
    });

    $("#navbar-main a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 800);
        }
    });

    $('#productModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var product = {
            image: button.data('image'),
            title: button.data('title'),
            price: button.data('price'),
        }

        var modal = $(this)

        modal.find('.modal-body .product-image').attr('src', product.image);
        modal.find('.modal-body .product-name').html(product.title);
        modal.find('.modal-body .product-price').html('$' + product.price);
    })

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
})