export default function HomePage({ params }: { params: { wallet_id: string }}) {
  return (
    <div>
      <h1>Meus investimentos</h1>
      <p>{params.wallet_id}</p>
    </div>
  );
}

