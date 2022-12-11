# How to setup Paypal SDK for React
You can go to [Paypal Developer](https://developer.paypal.com/sdk/js/reference/) to choose the Paypal button you want to use. Just change the style and the amount.
```js
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
                                        value: '390.00',
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                            alert(
                                'Transaction completed by ' + details.payer.name.given_name
                            );
                        });
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}
```

# How to draw a seat map?
You can use map and for loop to draw a seat map in React.
```js
<table className="">
                <tbody>
                    {
                        [...Array(9)].map((_, i) => {

                            if (i % 12 === 0) {
                                index = i / 12
                            }
                            return (

                                <tr className="">
                                    <th className="">
                                        {row[i]}
                                    </th>
                                    {
                                        [...Array(12)].map((_, i) => {
                                            return (
                                                <td className="">
                                                    <label>
                                                        <input className="sr-only peer" name="size" type="checkbox" value="s" />
                                                        <div className="w-8 h-6 rounded-full flex items-center justify-center  text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                            {i + 1}
                                                        </div>
                                                    </label>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
```
### How to insert value into PostgreSQL with for loop?
You can use for loop to insert value into PostgreSQL.
```sql
DO $$
BEGIN
FOR r IN 1..12
	LOOP
	INSERT INTO seats(hall_code, seat_code) values('A', r);
	end loop;
end $$;
```

# PostgreSQL Cheat Sheet
### Delete all row in PostgreSQL
You can use truncate to delete all row in PostgreSQL.
```sql
DELETE FROM table_name;
```
### Reset auto increment in PostgreSQL
You can use truncate to reset auto increment in PostgreSQL.
```sql
TRUNCATE table_name RESTART IDENTITY;
```
### Join three tables in PostgreSQL
You can use join to join three tables in PostgreSQL.
```sql
SELECT
  movies.movie_id,
  movies.movie_title,
  showtimes.showtime_date, 
  showtimes.showtime_time,
  seats.hall_code,
  seats.seat_row,
  seats.seat_column,
  seats.available
FROM showtimes
INNER JOIN movies
  ON movies.movie_id = showtimes.movie_id
INNER JOIN seats
  ON seats.hall_code = showtimes.hall_code
ORDER BY movies.movie_id DESC, showtimes.showtime_date, showtimes.showtime_time, seats.seat_row, seats.seat_column;
```