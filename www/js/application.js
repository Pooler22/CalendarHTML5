function Application(UIContext) {
  this._uiContextClass = UIContext;
  this._initialized = false;
};
Application.prototype.init = function() {
  if (this._uiContextClass && !this._initialized) {
    this._initialized = true;
    var UI = new this._uiContextClass();
    UI.init();

    var dialog = UI.dialog('dialog-period');
    var show = UI.button('set-period').click(function() {
      dialog.show();
    });
    var hide = UI.button('hide-dialog-period').click(function() {
      dialog.hide();
    });

    // hello-button event handler
    // UI.button('hello-button').click(function() {
    //   var helloLabel = document.getElementById("hello-label");
    //   helloLabel.innerHTML = "...World!";
    // });
  }
};
Application.prototype.initialized = function() {
  return this._initialized;
};
