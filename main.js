new Glider(document.querySelector('.nft-showcase'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    itemWidth: 488,
    exactWidth: true,
    draggable: true,
    scrollLock: true,
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 440,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 488,
          duration: 0.25
        }
      },
        {
          // screens greater than >= 775px
          breakpoint: 768,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 488,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            itemWidth: 488,
            duration: 0.25
          }
        }
      ]
  });