function Event(sender) {
    this._sender = sender;
    this._listeners = [];
    this.attach=function (listener) {
        this._listeners.push(listener);
    };
    this.notify=function (args) {
        var index;

        for (index = 0; index < this._listeners.length; index += 1) {
            this._listeners[index](this._sender, args);
        }
    };
}

$(function () {
	
	var buttonData=[
		{
			value:'1',
			type:'number',
			color:'yellow'
		},
		{
			value:'2',
			type:'number',
			color:'yellow'
		},
		{
			value:'3',
			type:'number',
			color:'yellow'
		},
		{
			value:'+',
			type:'bOperator',
			color:'yellow'
		},
		{
			value:'-',
			type:'bOperator',
			color:'yellow'
		},
		{
			value:'*',
			type:'bOperator',
			color:'yellow'
		},{
			value:'4',
			type:'number',
			color:'yellow'
		},
		{
			value:'5',
			type:'number',
			color:'yellow'
		},
		{
			value:'6',
			type:'number',
			color:'yellow'
		},
		{
			value:'/',
			type:'bOperator',
			color:'yellow'
		},
		{
			value:'%',
			type:'bOperator',
			color:'yellow'
		},
		{
			value:'C',
			type:'special',
			color:'yellow'
		},{
			value:'7',
			type:'number',
			color:'yellow'
		},
		{
			value:'8',
			type:'number',
			color:'yellow'
		},
		{
			value:'9',
			type:'number',
			color:'yellow'
		},{
			value:'0',
			type:'number',
			color:'yellow'
		},
		{
			value:'.',
			type:'special',
			color:'yellow'
		},
		{
			value:'=',
			type:'special',
			color:'yellow'
		}
	];
	
	var screenData=[
		{
			value:'0',
			color:'green'
		}
	];
	
	var arrButtonModel=[], arrButtonView=[], arrButtonContoller=[];
	
	$.each(buttonData,function (index, value) {
		arrButtonModel[index]=new ButtonModel(value);
		arrButtonView[index]=new ButtonView(arrButtonModel[index], $('.keys'));
		arrButtonContoller[index]=new ButtonController(arrButtonModel[index], arrButtonView[index]);
		arrButtonView[index].drawButton();
	});
	
	var controller = new MainController(arrButtonContoller);
	
	var arrScreenModel=[], arrScreenView=[], arrScreenContoller=[];
	
	$.each(screenData,function (index, value) {
		arrScreenModel[index]=new ScreenModel(value);
		arrScreenView[index]=new ScreenView(arrScreenModel[index], $('.screenContainer'));
		arrScreenContoller[index]=new ScreenController(arrScreenModel[index], arrScreenView[index], controller);
		arrScreenView[index].drawScreen();
	});
	
});