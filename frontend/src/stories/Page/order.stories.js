import React from 'react';
import DeliveryDetail from '../../page/order/DeliveryDetail';
import Order from '../../page/order/Order';
import OrderComplete from '../../page/order/OrderComplete';
import OrderDelivery from '../../page/order/OrderDelivery';
import OrderHistory from '../../page/order/OrderHistory';

export default {
  title: 'Page|주문',
};

export const DeliveryDetailComponent = () => {
  return <DeliveryDetail />;
};
DeliveryDetailComponent.story = { name: '배송조회' };

export const OrderComponent = () => {
  return <Order />;
};
OrderComponent.story = { name: '주문하기' };

export const OrderCompleteComponent = () => {
  return <OrderComplete />;
};
OrderCompleteComponent.story = { name: '주문완료' };

export const OrderDeliveryComponent = () => {
  return <OrderDelivery />;
};
OrderDeliveryComponent.story = { name: '주문배송조회' };

export const OrderHistoryComponent = () => {
  return <OrderHistory />;
};
OrderHistoryComponent.story = { name: '주문내역' };
