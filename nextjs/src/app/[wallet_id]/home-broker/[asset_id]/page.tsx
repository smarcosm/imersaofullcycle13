import MyOrders from "@/app/components/MyOrders";
import OrderForm from "@/app/components/OrderForm";

export default async function HomeBrokerPage({
  params,
}: {
  params: { wallet_id: string, asset_id: string};
}) {
  return (
    <div>
      <h1>Home broker</h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div>
            <OrderForm wallet_id={params.wallet_id} assset_id={params.asset_id}/>
          </div>
          <div>
            <MyOrders wallet_id={params.wallet_id}/>
          </div>
        </div>
        <div>graficos</div>
      </div>
    </div>
  );
}
