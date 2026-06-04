import Greeting from "./components/Greeting";
import OrderStatus from "./components/OrderStatus";
import ShoppingList from "./components/ShoppingList";

function App() {
  const items = ["mouse", "keyboard", "monitor", "lamp"];

  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 456, status: "обработан" },
    { orderId: 789, status: "доставлен" },
  ];

  return (
    <main>
      <Greeting name={"Oljas"} />
      <ShoppingList items={items} />

      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </main>
  );
}

export default App;
