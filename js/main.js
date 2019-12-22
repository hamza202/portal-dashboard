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