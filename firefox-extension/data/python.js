
(function() {
  var window = unsafeWindow;

  window.empydom =
&&&^^^&&&JS_EMPYDOM

  var loadEmpythoned = function() {
  &&&^^^&&&PYTHON_OPT_JS
  };

  var wantsEmpythoned = function() {
    return document.getElementById('give_me_empydom_please') !== null
  };

  if (wantsEmpythoned()) {

    loadEmpythoned();
    unsafeWindow.Python = Python;
    unsafeWindow.onEmpydomReady();

  }
})();

