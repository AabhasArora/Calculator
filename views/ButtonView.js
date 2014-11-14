/**
 * The Button View. View presents the model and provides
 * the UI events. The controller is attached to these
 * events to handle the user interaction.
 */
function ButtonView(model, element) {
    this.model = model;
    this.element = element;

    this.buttonClicked = new Event(this);
    
    var that = this;
}

ButtonView.prototype = {
    drawButton: function () {
        var button, items, key;

        button = this.element;
        
		var that=this;
		
		var modelObject=this.model.getValue();
			var buttonElement= document.createElement('div'); 
			$(buttonElement).addClass(modelObject.type);
			$(buttonElement).html(modelObject.value);
			$(buttonElement).click(function () {
				that.buttonClicked.notify();
			});
		button.append(buttonElement);
    }
};