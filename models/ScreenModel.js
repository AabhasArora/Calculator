/*
 * The Screen Model. It stores items related to screen and notifies
 * observers about changes.
 */
function ScreenModel(item) {
    this.value = item.value;
    this.color=item.color;
    
	this.valueUpdated = new Event(this);
}

ScreenModel.prototype = {
    getValue: function () {
        return {
		value: this.value,
		color: this.color
		}
    },

    setValue: function (item) {
        this.value = item;
		this.valueUpdated.notify({
            item: item
        });
    }
};