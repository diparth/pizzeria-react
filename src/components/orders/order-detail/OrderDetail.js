import { useParams } from 'react-router-dom';

import './OrderDetail.scss';

export default function OrderDetail() {
  const { orderId } = useParams();
  
  return (
    <h1>This is order number: { orderId }</h1>
  );
}
