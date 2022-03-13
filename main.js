new Glider(document.querySelector('.nft-showcase'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    // exactWidth: true,
    draggable: true,
    // scrollLock: true,
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 0,
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
        breakpoint: 500,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1.5,
          slidesToScroll: 1,
          itemWidth: 488,
          duration: 0.25
        }
      },
        {
          // screens greater than >= 775px
          breakpoint: 880,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 488,
            duration: 0.25
          }
        },
        {
          // screens greater than >= 775px
          breakpoint: 1024,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2.5,
            slidesToScroll: 1,
            itemWidth: 488,
            duration: 0.25
          }
        },
        ,
        {
          // screens greater than >= 775px
          breakpoint: 1200,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 3,
            slidesToScroll: 1,
            itemWidth: 488,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            exactWidth: true,
            slidesToScroll: 1,
            itemWidth: 488,
            duration: 0.25
          }
        }
      ]
  });

  // setting up navbar
  const menu = document.querySelector('.mobile-menu');
  const menuOpenBtn = document.querySelector('.mobile-navIcon')
  const menuCloseBtn = document.querySelector('.mobile-menuClose');

  const toggleMenu = action => {
    if(action === 'open'){
      menu.classList.add('active-menu')
    }else if(action === 'close'){
      menu.classList.remove('active-menu')
    }
  }

  menuOpenBtn.addEventListener('click', () => toggleMenu('open'))
  menuCloseBtn.addEventListener('click', () => toggleMenu('close'))