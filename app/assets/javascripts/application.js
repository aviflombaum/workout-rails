// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap/dist/js/bootstrap
//= require turbolinks
//= require_tree .


$(document).ready(function(){
  $(document).on("click", ".remove_exercise_fields", function(event){
    $(this).prev("input[type=hidden]").val('1')
    $(this).closest("#exercise_fields").hide()
  });
});

$(document).ready(function(){
  $(document).on("click", ".remove_rep_fields", function(event){
    $(this).prev("input[type=hidden]").val('1')
    $(this).closest("#rep_fields").hide()
  });
});

$(document).ready(function(){
  $(document).on("click", ".remove_numset_fields", function(event){
    $(this).prev("input[type=hidden]").val('1')
    $(this).closest("#numset_fields").hide()
  });
});

$(document).ready(function(){
  $(document).on("click", ".add_fields", function(event){
    time = new Date().getTime()
    regexp = new RegExp($(this).data('id'), 'g')
    var html = $(this).data("fields").replace(regexp, time)
    $(this).before(html)
    event.preventDefault()
  });
});
