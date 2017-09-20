//模板方法模式


var Coffee = function(){}

Coffee.prototype.boilWater = function() {
	console.log('把水煮沸');
};
Coffee.prototype.brewCoffee = function() {
	console.log('用沸水冲泡');
};
Coffee.prototype.pourInCup = function() {
	console.log('把咖啡倒进杯子');
};
Coffee.prototype.addSugarAndMilk = function() {
	console.log('加糖和牛奶');
};
Coffee.prototype.init = function() {
	this.boilWater;
	this.brewCoffee;
	this.pourInCup;
	this.addSugarAndMilk;
};

var coffee = new Coffee();
coffee.init();



var Tea = function(){}

Tea.prototype.boilWater = function() {
	console.log('把水煮沸');
};
Tea.prototype.steepTea = function() {
	console.log('用沸水冲泡');
};
Tea.prototype.pourInCup = function() {
	console.log('把茶水倒进杯子');
};
Tea.prototype.addLemon = function() {
	console.log('加糖和牛奶');
};
Tea.prototype.init = function() {
	this.boilWater;
	this.steepTea;
	this.pourInCup;
	this.addLemon;
};

var tea = new Tea();
tea.init();


var Beverage = function(){}

Beverage.prototype.boilWater = function() {
	console.log('把水煮沸');
};
Beverage.prototype.brew = function() {
	throw new Error('子类必须重写该方法');
};
Beverage.prototype.pourInCup = function() {
	throw new Error('子类必须重写该方法');
};
Beverage.prototype.addCondiments = function() {
	throw new Error('子类必须重写该方法');
};
Beverage.prototype.customerWatersCondiments = function() {
	return true;
};
Beverage.prototype.init = function() {
	this.boilWater;
	this.brew;
	this.pourInCup;
	if (this.customerWatersCondiments()) {
		this.addCondiments;
	}
};


Coffee.prototype.brewCoffee = function() {
	console.log('用沸水冲泡');
};
Coffee.prototype.pourInCup = function() {
	console.log('把咖啡倒进杯子');
};
Coffee.prototype.addSugarAndMilk = function() {
	console.log('加糖和牛奶');
};

Tea.prototype.steepTea = function() {
	console.log('用沸水冲泡');
};
Tea.prototype.pourInCup = function() {
	console.log('把茶水倒进杯子');
};
Tea.prototype.addLemon = function() {
	console.log('加糖和牛奶');
};
Tea.prototype.customerWatersCondiments= function(){
	return window.confirm('請問需要加調料嗎？');
}

Coffee.prototype = new Beverage();
Tea.prototype = new Beverage();

var coffee = new Coffee();
coffee.init();

var tea = new Tea();
tea.init();