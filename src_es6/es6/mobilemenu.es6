import * as dom from "lib/DOM";
import * as ls from "lib/LS";


export class MobileMenu {
  clicksArray: array;
  $element: {};

  // constructor() {
  constructor(el, configObj) {
    this.$element = el;
    this.configObj = configObj;

    this.parseConfig(configObj);
    this.setActiveElements();
    this.bindEvents();
  }

  bindEvents () {
    var $a = this.$element.getElementsByTagName('a');

    this.$element.addEventListener('click', this.clickHandler);
  }

  setActiveElements() {
    this.clicksArray = (window.localStorage.getItem('mmarray')) ? JSON.parse(window.localStorage.getItem('mmarray')) : [];

    console.log(this.clicksArray);


    if (this.clicksArray) {
      this.clicksArray.map((el, index) => {
        // this.$element.querySelector('ul > li')[index].className += "active";
        console.log('EL: '+el+ ' ind: '+ index);
      });
    }
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

  clickHandler(e) {
    var $target = e.target,
        $parent = $target.parentNode,
        $childUl = $parent.querySelector('ul');

    if ($childUl != null) {
      e.preventDefault();
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
