
/*
 * The Screen View. It presents the model and provides
 * the UI events. Button controller is attached to these
 * events to handle the user interaction.
 */
function ScreenView(model, element) {
    this.model = model;
    this.element = element;

    this.displayData = new Event(this);
    this.readData = new Event(this);
    var that = this;
	
	// attach model listeners
    this.model.valueUpdated.attach(function () {
        that.resetScreen();
    });
}

ScreenView.prototype = {
    drawScreen: function () {
        var screen, items, key;

        screen = this.element;
        //screen.html('');

        var modelObject=this.model.getValue();
			var screenElement= document.createElement('div'); 
			$(screenElement).addClass('screen');
			$(screenElement).html(modelObject.value);
			screen.append(screenElement);
    },
	resetScreen: function () {
        var screen, items, key;

        screen = this.element;
        screen.html('');

        var modelObject=this.model.getValue();
			var screenElement= document.createElement('div'); 
			$(screenElement).addClass('screen');
			$(screenElement).html(modelObject.value);
			screen.append(screenElement);
    }
};
