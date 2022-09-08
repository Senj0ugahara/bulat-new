$(document).ready(function() {
  // преобразование select в ul/li
  var  selects = [];
  $('body').find('.custom-list').each(function() {
      selects.push($(this));
  });
  
  selects.forEach(function(item, i, selects) {
      // Элемент select, который будет замещаться:
      var select = item;

      var selectBoxContainer = $('<div>',{
          class: 'custom-select',
          html: '<div class="selectBox"></div>'
      });

      var dropDown = $('<ul>',{class:'dropDown'});
      var selectBox = selectBoxContainer.find('.selectBox');

      // Цикл по оригинальному элементу select
      select.find('option').each(function(i){
          var option = $(this);

          if(i==0){
              selectBox.html(option.text());
              //return true;
          }   

          // Создаем выпадающий пункт в соответствии с данными select:
          var li = $('<li>',{
              html: option.text()
          });

          li.on('click touchstart', function(){
              
              selectBox.html(option.text());
              dropDown.trigger('hide');

              // Когда происходит событие click, мы также отражаем изменения в оригинальном элементе select:
              select.val(option.val());
              
              return false;
          });

          dropDown.append(li);
      });

      selectBoxContainer.append(dropDown.hide());
      select.hide().after(selectBoxContainer);    
  
      // Привязываем пользовательские события show и hide к элементу dropDown:
      dropDown.bind('show',function(){
          if(dropDown.is(':animated')){
              return false;
          }

          selectBox.addClass('expanded');
          dropDown.slideDown();

      }).bind('hide',function(){

          if(dropDown.is(':animated')){
              return false;
          }

          selectBox.removeClass('expanded');
          dropDown.slideUp();

      }).bind('toggle',function(){
          if(selectBox.hasClass('expanded')){
              dropDown.trigger('hide');
          }
          else dropDown.trigger('show');
      });

      selectBox.on('click touchstart', function(){
          dropDown.trigger('toggle');
          return false;
      });

      // Если нажать кнопку мыши где-нибудь на странице при открытом элементе dropDown, он будет спрятан:
      $(document).on('click touchstart', function(){
          dropDown.trigger('hide');
      });
  }); 

  // checkboxes
  function cleanCheckboxes() {
    $('form').each(function() {
      $(this).find('.custom-checkbox-js').prop('checked', false);
    });
  }
  cleanCheckboxes();

  // Header-menu scroll
  $('a[href^="#"]').click(function() {
    const target = $(this).attr('href')
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, {
      duration: 500,
      easing: 'linear',
    });
    return false
  })

  // burger
  $('.header__burger').on('click', function() {
    $('.header__burger-line').toggleClass('header__burger-line_active');
    $('.nav').toggleClass('nav--active');
  });
  
  //peculiarities tabs
  $('.peculiarities__btn[filter]').click(function() {
    if ($(this).attr('val') == 'off') {
      $('.peculiarities__btn[filter]').attr('val', 'off').removeClass('peculiarities__btn_active');
      $(this).attr('val', 'on').addClass('peculiarities__btn_active');
      $('.peculiarities__content > div').hide(300);
      $('.peculiarities__content > div[filter=' +$(this).attr('filter') + ']').show(300);
    };
  });
});

const swiper1 = new Swiper('.video-reviews__swiper', {
  loop: true,
  spaceBetween: 30,

  navigation: {
    nextEl: '.video-reviews__button-next',
    prevEl: '.video-reviews__button-prev',
  },

  breakpoints: {
    1199: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    1439: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  },
});

const swiper2 = new Swiper('.reviews__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    991: {
      slidesPerView: 2,
    },

    1439: {
      slidesPerView: 3,
    }
  }
});

const swiper3 = new Swiper('.set__swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,

  navigation: {
    nextEl: '.set-swiper__button-next',
    prevEl: '.set-swiper__button-prev',
  },
});

const swiper4 = new Swiper('.gallery__swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,

  navigation: {
    nextEl: '.gallery-swiper__button-next',
    prevEl: '.gallery-swiper__button-prev',
  },
});