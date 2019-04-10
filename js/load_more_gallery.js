$(document).ready(function () {

    function loadMasonry() {
        let $grid = $('.gallery-list').imagesLoaded(function () {
            // init Masonry after all images have loaded
            $grid.masonry({
                // options
                itemSelector: '.gallery-item',
                columnWidth: 340,
                gutter: 15
            });
        });
    }

    loadMasonry();

    let tmp = $(this);
    let size_li = ($(tmp).find(".gallery-item")).size();
    let x = 6;
    $(tmp).find('.gallery-item:lt(' + x + ')').show();

    (x >= size_li) ? $('#loadMore2').hide() : $('#loadMore2').show();

    function loading_img() {
        let modalWindow = document.getElementById('animation-loading2');
        modalWindow.classList.add('open');

        setTimeout(function () {
            modalWindow.classList.remove('open');
        }, 2000);
    }

    let showModalBtn = document.getElementById('loadMore2');
    showModalBtn.addEventListener("click", loading_img);


    $('#loadMore2').click(function (e) {
        e.preventDefault();
        x = (x + 6 <= size_li) ? x + 6 : size_li;

        setTimeout(function () {
            // $(tmp).find(".amazing-work-img-item").stop(false, false).hide();
            $(tmp).find('.gallery-item:lt(' + x + ')').show();
            loadMasonry();
        }, 2000);

        (x >= size_li) ? $('#loadMore2').hide() : $('#loadMore2').show();
    });

    return false;
});
