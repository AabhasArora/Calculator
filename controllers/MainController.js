/**
 * The Main Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
function MainController(arrButtonContoller) {
    this.button = arrButtonContoller;
    this.arrValue=[];
    this.buttonClicked = new Event(this);
	
    var that = this;
	
	$.each(this.button,function (index, value) {
		value.buttonClicked.attach(function (model) {
		that.calculateData(model);
    });
	});
	
}

MainController.prototype = {
    calculateData: function (model) {
        if (this.arrValue.length===0 && model.model.type!=="special")
			this.arrValue.push({type: model.model.type, value: model.model.value})
		else
		{
			if ((model.model.type==="number" && this.arrValue[this.arrValue.length-1].type===model.model.type) || model.model.value===".")
			{
				var tempPoped=this.arrValue.pop();
				if(!(tempPoped.value.toString().indexOf(".")!==-1 && model.model.value==="."))
					this.arrValue.push({type: tempPoped.type, value: tempPoped.value+model.model.value});
				else
					this.arrValue.push(tempPoped);
			}
			else if (model.model.type==="bOperator" && this.arrValue[this.arrValue.length-1].type===model.model.type)
			{
				var tempPoped=this.arrValue.pop();
				this.arrValue.push({type: model.model.type, value: model.model.value})
			}
			else if (model.model.value==="=")
			{
				this.processData();
				//var tempPoped=this.arrValue.pop();
				//this.arrValue.push({type: model.model.type, value: model.model.value})
			}
			else if (model.model.value==="C")
			{
				this.arrValue=[];
				//this.arrValue.push();
			}
			else
			{
				this.arrValue.push({type: model.model.type, value: model.model.value})
			}
		}
		
		if(this.arrValue.length>3)
			this.processData();
		
		var result=this.displayData();
		//this.arrValue.push({type: model.model.type, value: model.model.value})
		this.buttonClicked.notify(result);
    },
	processData: function () {
        var value1=(this.arrValue[0] && this.arrValue[0].value)||'';
		var value2=(this.arrValue[2] && this.arrValue[2].value)||'';
		var operator= (value2 && this.arrValue[1] && this.arrValue[1].value)||'';
			
			var result=eval(value1+operator+value2)||'';
			
			this.arrValue.splice(0, 3, {type: 'number', value: result});
    },
	displayData: function () {
        if (this.arrValue.length<=3)
		{
			var arrLength=this.arrValue.length, result='';
			var arrReversed=this.arrValue.slice(0);
			arrReversed=arrReversed.reverse();
			while(arrLength)
			{
			result+=arrReversed[arrLength-1].value;
			arrLength--;
			}
			
			return result;
		}
    }
};