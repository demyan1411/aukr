/////////////// submit form /////////////////////
'use strict';

function FormSubmit(options) {
  this.element = options.element;
  this.textType = this.element.find('[data-valid=text]');
  this.mailType = this.element.find('[data-valid=email]');
  this.phoneType = this.element.find('[data-valid=phone]');
  this.bindEvents();
}

FormSubmit.prototype.bindEvents = function() {
  this.element.on('submit', this.submit.bind(this));
}

FormSubmit.prototype.submit = function (e) {
  e.preventDefault();

  if(!this.isValidateForm()) {
    this.sendForm();
  }
};

FormSubmit.prototype.isValidateForm = function () {
  this.validText();
  this.validPhone();
  this.validEmail();

  return this.element.find('.js-error').length;
};

FormSubmit.prototype.sendForm = function () {
  var url = this.element.attr('action');
  if(!url) {
    console.log('Set action attribute to your form');
    return;
  }
  var data = this.element.serialize();
  var inputs = this.element.find('input, textarea');

  $.ajax({
    url: url,
		type: 'POST',
		data: data
  })
  .fail(function() {
    console.log('fail');
  })
  .done(function() {
    inputs.val('');
    console.log('done');
  });
};

FormSubmit.prototype.validText = function () {
  this.textType.each(function() {
    var input = $(this);
    var valid = ($.trim(input.val()) === '');
    input.toggleClass('js-error', valid);
  });
};

FormSubmit.prototype.validPhone = function () {
  this.phoneType.each(function() {
    var input = $(this);
    var regExp = /^(?:\+?\d{2}[ -]?[\d -][\d -]+)$/;
    var valid = regExp.test(input.val());
    input.toggleClass('js-error', !valid);
  });
};

FormSubmit.prototype.validEmail = function () {
  this.mailType.each(function() {
    var input = $(this);
    var regExp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])/;
    var valid = regExp.test(input.val());
    input.toggleClass('js-error', !valid);
  });
};
