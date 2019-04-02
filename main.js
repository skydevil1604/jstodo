(function(){
  
  var $list = document.querySelector('#list'),
      $form = document.querySelector('form'),
      $item = document.querySelector('#item');

  
  $form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!$item.value) {
      alert('Введите задание!');
    }
    else {$list.innerHTML += '<li>' + $item.value + '<button id="del">' + '</button>'+ '</li>';
    store();
    $item.value = "";}
  },false);
  
  $list.addEventListener('click',function(e){
    var t = e.target;
    if(t.id === 'del') {
    var $li = t.closest('li');
    $li.remove();
    }
    if(t.classList.contains('checked')){
      t.classList.remove('checked');
    }  
    else {
      t.classList.add('checked');
    }
    store();
  },false);
  
  function store() {
    window.localStorage.myitems = $list.innerHTML;
  }
  
  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      $list.innerHTML = '';
    }
    else {
      $list.innerHTML = storedValues;
    }
  }
  getValues();
})();