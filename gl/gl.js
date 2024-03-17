var gl = {
  tema: { //Смена фона body
    $: () => { //Чёрный/Белый
      $('body').toggleClass('tema9');
    }
  },
  bodyS: { //Добавим полосу прокрутки
    $: () => {
      $('body').toggleClass('bodyS');
    }
  },
  font: {
    $: e => {
      $('html').css('font-size', $(e).val() + 'pt')
    },
  },
  m: { //Меню
    id: '#m', //id <bottom id="m">
    $: function(q) { //Создаём
      let O = this,
        t = '';

      $(O.id).click(e => { shablon.m.X() }); //Открыть/Закрыть

      (q.htm || []).forEach(e => {
        t += '<button>' + e.n + '</button>';
      });

      $('nav').html('<div>' + t + '</div>');

    },
    X: q => { //Открыть/Закрыть

    }
  }
};
/* gl.m.$({//Меню
  htm:[//Список <button>
    {//0
      n: 'Фон Светлый/Тёмный (body)',//Название
      t: '',//Теги <...
      
      >
    }
  ]
}); */