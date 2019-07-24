import tinydate from 'tinydate';
const fetchOrders = async () => {
  const response = await fetch(
    'https://www.xxx.com/api/assessment/work_orders'
  );
  const { orders } = await response.json();
  return orders.map(order => ({
    ...order,
    deadline_text: tinydate('{MM}/{DD}/{YYYY}, {HH}:{mm}:{ss}')(
      new Date(order.deadline)
    ),
  }));
};
const fetchWorker = async id => {
  const response = await fetch(
    `https://www.xxx.com/api/assessment/workers/${id}`
  );
  const { worker } = await response.json();
  return worker;
};
const fecthFullDetailOrders = async () => {
  const orders = await fetchOrders();
  const fullDetailOrders = await Promise.all(
    orders.map(async order => {
      return {
        ...order,
        worker: await fetchWorker(order.workerId),
      };
    })
  );
  return fullDetailOrders;
};

export default fecthFullDetailOrders;
