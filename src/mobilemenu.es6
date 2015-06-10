class MobileMenu {
  // $element: {};
  // $a: {}};
  // configObj: {};


  constructor(el, configObj) {
    this.$element = el;
    this.$a = this.$element.getElementsByTagName('a');
    this.configObj = configObj;

    this.parseConfig();
    this.bindEvents();

    console.log("MobileMenu");
  }

  bindEvents () {
    var $a = this.$element.getElementsByTagName('a');
    console.log($a);

    for (var i=0; i<$a.length-1 ; i++) {
      $a[i].addEventListener( "click", (event) => this.clickHandler() );
    }

  }

  parseConfig() {

  }


  setValue(name, value) {
    window.localStorage.setItem(name, value);
  }

  getValue(name) {
    return window.localStorage.getItem(name);
  }

  clickHandler(e) {
    e.preventDefault();
    console.log('click');
  }
}
