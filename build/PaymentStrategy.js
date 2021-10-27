"use strict";
exports.__esModule = true;
exports.PaymentStrategy = void 0;
var CreditCardBuilder_1 = require("./CreditCardBuilder");
var BankDraftBuilder_1 = require("./BankDraftBuilder");
var OnlinePaymentBuilder_1 = require("./OnlinePaymentBuilder");
var OfflinePaymentBuilder_1 = require("./OfflinePaymentBuilder");
function PaymentStrategy(typePayment) {
    var payment;
    if (typePayment == "creditcard") {
        var paymentMethod = new CreditCardBuilder_1.CreditCardBuilder();
        paymentMethod.build();
        return paymentMethod.getExecutor();
    }
    else if (typePayment == "bankdraft") {
        var paymentMethod = new BankDraftBuilder_1.BankDraftBuilder();
        paymentMethod.build();
        return paymentMethod.getExecutor();
    }
    else if (typePayment == "onlinepayment") {
        var paymentMethod = new OnlinePaymentBuilder_1.OnlinePaymentBuilder();
        paymentMethod.build();
        return paymentMethod.getExecutor();
    }
    else if (typePayment == "offlinepayment") {
        var paymentMethod = new OfflinePaymentBuilder_1.OfflinePaymentBuilder();
        paymentMethod.build();
        return paymentMethod.getExecutor();
    }
    else
        return undefined;
}
exports.PaymentStrategy = PaymentStrategy;
