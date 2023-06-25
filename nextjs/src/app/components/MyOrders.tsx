import { Order } from "../models";

async function getOrders(wallet_id: string): Promise<Order[]> {
  const response = await fetch(
    `http://localhost:8000/wallets/${wallet_id}/orders`
  );
  return response.json();
}

export default async function MyOrders(props: { wallet_id: string }) {
  const orders = await getOrders(props.wallet_id);
  return (
    <ul>
      {orders.map((order) => (
        <li key={order.id}>
          {order.asset_id} - {order.shares} - R${order.price} - {order.status}
          
        </li>
      ))}
    </ul>
  );
}
