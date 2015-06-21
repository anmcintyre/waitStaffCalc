var Meal = function(price, tax, tip){
    this.price = price;
    this.tax = tax;
    this.tip = tip;

    this.reset = function(){
        this.price = 0;
        this.tax = 0;
        this.tip = 0;
    }
}

var Customer = function(){
    this.subTotal = 0;
    this.tip = 0;
    this.total = 0;

    this.setMeal = function(meal){
        this.subTotal = Number((meal.price + meal.price*meal.tax/100).toFixed(2));
        this.tip = Number((meal.price*meal.tip/100).toFixed(2));
        this.total = this.subTotal + this.tip;
    }
}

var Earnings = function(){
    this.tipTotal = 0;
    this.mealCount = 0;
    this.avgTipPerMeal = 0;

    this.addMeal = function(tip){
        this.mealCount ++;
        this.tipTotal += tip;
        this.avgTipPerMeal = Number((this.tipTotal / this.mealCount).toFixed(2));
    }    
}


