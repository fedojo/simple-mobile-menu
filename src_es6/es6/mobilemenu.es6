import * as dom from "lib/DOM";
import * as ls from "lib/LS";


export class MobileMenu {
  clicksArray: array;
  $element: {};

  // constructor() {
  constructor(el, configObj) {
    console.log("MobileMenu");

    this.$element = el;
    // this.$a = this.$element.getElementsByTagName('a');
    console.log(this.$element);
    this.configObj = configObj;

    this.parseConfig(configObj);
    this.checkMenuStatus();
    this.bindEvents();

  }

  bindEvents () {
    var $a = this.$element.getElementsByTagName('a');

    this.$element.addEventListener('click', this.clickHandler);
  }

  checkMenuStatus() {
    console.log(this.getValue('mmarray'));
  }

  parseConfig(cfg) {
    console.log("Config");
    console.log(cfg);

    // TODO
    var defaultCfg = {
        rememberStatus: 'true'
    };

    this.configObj = (cfg ? cfg : defaultCfg);
    console.log(this.configObj);

  }

  setValue(name, value) {
    window.localStorage.setItem(name, value);
  }

  getValue(name) {
    return window.localStorage.getItem(name);
  }

  clickHandler(e) {
    var $target = e.target,
        $parent = $target.parentNode,
        $childUl = $parent.querySelector('ul')
        ;

    if ($childUl != null) {
      e.preventDefault();

      console.log( typeof(this.clicksArray) );
      //

      // >IE10
      // if (typeof($parent.classList) != undefined) {
        // ($parent.classList.contains('active')) ? $parent.classList.remove('active') : $parent.classList.add('active');
      // }
      // else {



        ($parent.className.split(' ').indexOf('active')>0) ? dom.removeClass($parent, 'active') : dom.addClass($parent, 'active');



      // }


    }
    else {

    }
  }
}
