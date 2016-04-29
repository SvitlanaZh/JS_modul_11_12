$(function() {

  /******Shablonizator*************/
  var html=$('#about').html();
  var header={
    hh:'Жиленко Светлана Васильевна',
    img:'img/img_10.png',
    student:'На пути к обретению работы мечты',
    listH:'Хочу учить Frontend, потому что:',
    listItem:[
      'Это актуально и интересно для меня',
      'Хочу найти работу в данной сфере',
      'Cмогу реализовать себя'
    ],
    contactTel:'Мой контактный телефон',
    tel:'+38-050-816-92-40',
    profileVk:'Мой профиль вконтакте',
    hrefVk:'https://m.vk.com/svetikzhilenko',
    feedback:'Мой фидбэк:',
    feedText:'Если нужно, могу нарисовать Вам картину маслом для украшения нового офиса=)'


  };
  var content=tmpl(html,header);
  /*var content1=tmpl(html,{:listItem});*/
  $('.wrap').append(content);
  /*$('.content').append(content1);*/

  });
