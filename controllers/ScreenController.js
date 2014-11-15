/*
 * The Screen Controller. It responds to changes from main controller and
 * invokes changes on the screen model.
 */
function ScreenController(model, view, mainController) {
    this.model = model;
    this.view = view;
	this.mainController=mainController;

    var that = this;
	
	this.mainController.buttonClicked.attach(function (sender, model2) {
        that.buttonClicked(model2);
    });
}

ScreenController.prototype = {
    buttonClicked: function (item) {
        this.model.setValue(item);
    }
};