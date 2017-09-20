var strategies = {
	S:function(salary){
		return salary*4;
	},
	A:function(salary){
		return salary*3;
	},
	B:function(salary){
		return salary*2;
	},
	C:function(salary){
		return salary*1.5;
	}
}
var calculateBonus = function(level,salary){
	if (strategies[level]) {
		return strategies[level](salary);
	}else{
		return '无该等级员工';
	}
}
calculateBonus('B',3000);