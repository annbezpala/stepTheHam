function loading_img() {
    let modalWindow = document.getElementById('animation-loading');
    modalWindow.classList.add('open');

    setTimeout(function () {
        modalWindow.classList.remove('open');
    }, 2000);
}

$(".amazing_img_item0").stop(false, false).hide();
$('.amazing_img_item0' + ':lt(' + 12 + ')').show();

let size_li = $(".amazing_img_item0").size();
let x = 12;

let showModalBtn = document.getElementById('loadMore');
showModalBtn.addEventListener("click", loading_img);

$('#loadMore').click(function (e) {
    e.preventDefault();
    x = (x + 12 <= size_li) ? x + 12 : size_li;

    setTimeout(function () {
        $(".amazing-work-img-item").stop(false, false).hide();
        $('.amazing_img_item0' + ':lt(' + x + ')').show();
    }, 2000);

    (x >= size_li) ? $('#loadMore').hide() : $('#loadMore').show();
});


$(".container").each(function () {
    let tmp = $(this);

    $(tmp).find(".amazing-work-item").each(function (i) {
        $(tmp).find(".amazing-work-item:eq(" + i + ") a").click(function () {
            let tab_id = i;
            $(tmp).find(".amazing-work-item").removeClass("amazing-link-active");
            $(this).parent().addClass("amazing-link-active");
            $(tmp).find(".amazing-work-img-item").stop(false, false).hide();

            let size_li = ($(tmp).find(".amazing_img_item" + tab_id)).size();
            let x = 12;
            $(tmp).find('.amazing_img_item' + tab_id + ':lt(' + x + ')').show();

            (x >= size_li) ? $('#loadMore').hide() : $('#loadMore').show();

            let showModalBtn = document.getElementById('loadMore');
            showModalBtn.addEventListener("click", loading_img);

            $('#loadMore').click(function (e) {
                e.preventDefault();
                x = (x + 12 <= size_li) ? x + 12 : size_li;

                setTimeout(function () {
                    $(tmp).find(".amazing-work-img-item").stop(false, false).hide();
                    $(tmp).find('.amazing_img_item' + tab_id + ':lt(' + x + ')').show();
                }, 2000);

                (x >= size_li) ? $('#loadMore').hide() : $('#loadMore').show();
            });

            return false;
        });
    });
});
