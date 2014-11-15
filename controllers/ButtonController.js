/*
 * The Button Controller. It responds to user actions and
 * invokes changes on the model and passes the notification to the main controller.
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