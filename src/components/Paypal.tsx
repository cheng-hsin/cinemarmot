import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
export default function Paypal() {
    return (
        <div className='App mt-4'>
            <PayPalScriptProvider
                options={{
                    'client-id': 'ARvZqTj661yjIaoy88ueX47cLnPRvakQJhoY6PAPMSQ0-l7xFmvGvCqq2Y9KEv5XBaDyN1M_tmvDsVnK',
                    currency: 'TWD',
                }}
            >
                <PayPalButtons
                    style={{
                        layout: 'horizontal',
                        color: 'gold',
                        shape: 'pill',
                        label: 'pay',
                        tagline: false,
                    }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: '450.00',
                                    },
                                },
                            ],
                        });
                    }}
                    // onApprove={(data, actions) => {
                    //     return actions.order.capture().then(function (details) {
                    //         alert(
                    //             'Transaction completed by ' + details.payer.name.given_name + details.payer.name.surname + '!'
                    //         );
                    //     });

                    // }}
                />
            </PayPalScriptProvider>
        </div>
    );
}