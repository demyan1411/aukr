'use strict';

function MainMenuOpen(options) {
  this.element = $('.js-main-menu');
  this.nav = this.element.siblings('.js-nav');
  this.navLink = this.element.find('.nav__link');
  this.submenu = '.submenu';

  this.bindEvents();
}

MainMenuOpen.prototype.bindEvents = function() {
  this.nav.on('click', this.openMainMaenu.bind(this))
  this.element.on('click', this.navLink, this.listenSubMenu.bind(this));
}

MainMenuOpen.prototype.openMainMaenu = function(e) {
  $(e.target).toggleClass('js-active');
  $(e.target).siblings('.js-nav-list').slideToggle();
  this.closeAllSubMenu();
}

MainMenuOpen.prototype.listenSubMenu = function(e) {
  if (this.hasSubmenu(e) && $(window).width() < 740) {
    e.preventDefault();

    if ($(e.target).siblings(this.submenu).hasClass('js-active')) {
      this.closeAllSubMenu();
      return;
    };
    
    this.closeAllSubMenu();
    this.openSubmenu(e);
  }
}

MainMenuOpen.prototype.hasSubmenu = function(e) {
  return $(e.target).siblings(this.submenu).length
}

MainMenuOpen.prototype.closeAllSubMenu = function() {
  $(this.submenu).each(function() {
    $(this).removeClass('js-active');
    $(this).slideUp();
  });
}

MainMenuOpen.prototype.openSubmenu = function(e) {
  var $submenu = $(e.target).siblings(this.submenu)
  $submenu.addClass('js-active');
  $submenu.slideDown();
}
