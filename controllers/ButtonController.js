/**
 * The Button Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
function ButtonController(model, view) {
    this.model = model;
    this.view = view;
	
	this.buttonClicked = new Event(this);
	
    var that = this;
	
	this.view.buttonClicked.attach(function () {
        that.buttonClicked.notify(that.model);
    });
}

ButtonController.prototype = {
    // buttonClicked: function () {
       // this.model.addItem(item);
    //}
};