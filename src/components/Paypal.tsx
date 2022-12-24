import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { loadScript } from '@paypal/paypal-js';
import { OnApproveData, OnApproveActions } from "@paypal/paypal-js/types/components/buttons";
import { trpc } from '../utils/trpc';


export default function Paypal({ selectedSeat, selectedShowtime, userId }: any) {

    console.log('seat, showtime, user', selectedSeat, selectedShowtime, userId)

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
                    onApprove={async (data: OnApproveData, actions: OnApproveActions) => {
                        console.log('seat, showtime, user', selectedSeat, selectedShowtime, userId)
                        actions.order?.capture().then(function (details) {
                            alert('You have successfully created subscription ' + details.payer.name?.given_name + details.payer.name?.surname);
                        });
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}