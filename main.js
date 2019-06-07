function insert(num){
    $('.calci').val($('.calci').val()+num);

}
function equal(){
    $('.calci').val(eval($('.calci').val()));
}
function c(){
    $('.calci').val('');
}
function del(){
   value = $('.calci').val();
   $('.calci').val(value.substring(0, value.length-1));
}