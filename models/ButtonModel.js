/**
 * The Button Model. Model stores items and notifies
 * observers about changes.
 */
function ButtonModel(item) {
    this.value = item.value;
    this.type = item.type;
	this.color = item.color;
    this.buttonClicked = new Event(this);
}

ButtonModel.prototype = {
    getValue: function () {
        return {
		value: this.value,
		type: this.type
		}
    }//,
	// fetchButtonClickedValue: function (item) {
        // return {
		// value: this.value,
		// type: this.type
		// }
		// this.buttonClicked.notify({
            // item: item
        // });
    // }
};