new Mmenu(document.querySelector('#menu'),
    {
        drag: false,
        pageScroll: {
            scroll: true,
            update: true
        },
        sidebar: {
            expanded: {
                use: '(min-width: 1300px)',
            }
        },
        navbars: [
            {
                content: ['<div><img src="./images/logo.png"></div>', 'close']
            }
        ]
    }
);

//Date Range

$('.daterange').daterangepicker();

$(function() {
    $('.dateTimeInput').daterangepicker({
        timePicker: true,
        singleDatePicker: true,
        showDropdowns: true,
        locale: {
            format: 'M/DD/YYYY hh:mm A'
        }
    });
});
$(function() {
    $('.dateInput').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: {
            format: 'M/DD/YYYY'
        }
    });
});
