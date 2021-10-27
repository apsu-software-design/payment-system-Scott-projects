"use strict";
exports.__esModule = true;
exports.PaymentSystemContext = void 0;
var PaymentSystemContext = /** @class */ (function () {
    function PaymentSystemContext(getInfo, validate) {
        this.getInfo = getInfo;
        this.validate = validate;
    }
    PaymentSystemContext.prototype.execute = function () {
        var valid = this.validate(this.getInfo());
        if (valid) {
            console.log("Your payment information is being encrypted.");
            console.log("The payment is being processed.");
        }
        else
            console.log('The payment is invalid.');
    };
    return PaymentSystemContext;
}());
exports.PaymentSystemContext = PaymentSystemContext;
