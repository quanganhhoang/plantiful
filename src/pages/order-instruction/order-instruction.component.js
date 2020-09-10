import React from 'react';

import OrderInstruction from '../../components/order-instruction/order-instruction.component';

import { OrderInstructionContainer } from './order-instruction.styles';

const OrderInstructionPage = () => (
    <OrderInstructionContainer>
        <OrderInstruction />
    </OrderInstructionContainer>
);

export default OrderInstructionPage;
