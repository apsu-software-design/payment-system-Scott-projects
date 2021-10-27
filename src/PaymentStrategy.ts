import { PaymentSystemContext } from "./payment_systems";
import { CreditCardBuilder } from "./CreditCardBuilder";
import { BankDraftBuilder } from "./BankDraftBuilder";
import { OnlinePaymentBuilder } from "./OnlinePaymentBuilder";
import { OfflinePaymentBuilder } from "./OfflinePaymentBuilder";

export function PaymentStrategy(typePayment: string): PaymentSystemContext | undefined{
    let payment: PaymentSystemContext;

    if(typePayment == "creditcard"){
        let paymentMethod = new CreditCardBuilder();
        paymentMethod.build();
        return paymentMethod.getExecutor();
    }
    else if(typePayment == "bankdraft"){
        let paymentMethod = new BankDraftBuilder();
        paymentMethod.build();
        return paymentMethod.getExecutor();
    }
    else if(typePayment == "onlinepayment"){
        let paymentMethod = new OnlinePaymentBuilder();
        paymentMethod.build();
        return paymentMethod.getExecutor();
    }
    else if(typePayment == "offlinepayment"){
        let paymentMethod = new OfflinePaymentBuilder();
        paymentMethod.build()
        return paymentMethod.getExecutor();
    }
    else   
        return undefined;
}