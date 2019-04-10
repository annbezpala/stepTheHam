$(document).ready(function () {
    $("ul.services-list").on("click", ".services-item:not(.active-link)", function () {
        $(this)
            .addClass("active-link")
            .siblings()
            .removeClass("active-link")
            .closest(".services-tabs")
            .find(".services-tab-item")
            .removeClass("active-tab-item")
            .eq($(this).index())
            .addClass("active-tab-item");
    });

    $('.navbar-search-item').on('click', function (e) {
        e.preventDefault();
        $('.navbar-search').show(500);
    });
});
