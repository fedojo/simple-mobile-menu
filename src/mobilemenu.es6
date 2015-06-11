class MobileMenu {
  clicksArray: array;

  constructor(el, configObj) {
    this.$element = el;
    this.$a = this.$element.getElementsByTagName('a');
    this.configObj = configObj;

    this.parseConfig(configObj);
    this.checkMenuStatus();
    this.bindEvents();

    console.log("MobileMenu");
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
        $childUl = $parent.querySelector('ul');


    if ($childUl != null) {
      e.preventDefault();
      // this.clicksArray[0] = 0;
      console.log(this.clicksArray);
    }
    else {

    }
  }
}
