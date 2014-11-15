//Initialization function which will fetch data, initialize models, views and controllers
$(function () {
	//Fetch data
	var buttonData=getButtonData();
	var screenData=getScreenData();
	var arrButtonModel=[], arrButtonView=[], arrButtonContoller=[];
	
	//Create model, view and controller for every button
	$.each(buttonData,function (index, value) {
		arrButtonModel[index]=new ButtonModel(value);
		arrButtonView[index]=new ButtonView(arrButtonModel[index], $('.keys'));
		arrButtonContoller[index]=new ButtonController(arrButtonModel[index], arrButtonView[index]);
		arrButtonView[index].drawButton();
	});
	
	//Create main controller
	var controller = new MainController(arrButtonContoller);
	
	var arrScreenModel=[], arrScreenView=[], arrScreenContoller=[];
	
	//Create model, view and controller for every screen
	$.each(screenData,function (index, value) {
		arrScreenModel[index]=new ScreenModel(value);
		arrScreenView[index]=new ScreenView(arrScreenModel[index], $('.screenContainer'));
		arrScreenContoller[index]=new ScreenController(arrScreenModel[index], arrScreenView[index], controller);
		arrScreenView[index].drawScreen();
	});
});