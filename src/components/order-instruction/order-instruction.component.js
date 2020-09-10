import React from 'react';

import {
    InstructionTitle,
    InstructionContent,
    InstructionOrderedList,
    InstructionUnorderedList   
} from './order-instruction.styles';


export const OrderInstruction = () => {

    return (
        <div>           
            <InstructionTitle>ORDER INSTRUCTION</InstructionTitle>
            <InstructionContent>
                <InstructionOrderedList>
                    <li>Choose plants/stems that make your heart flutters and 'Add to Cart'</li>
                    <li>Go to checkout page and click 'Request Order'</li>
                    <li>Fill out your information and please check your email within 24-48 hours</li>
                    <li>You'll receive an email containing:
                        <InstructionUnorderedList>
                            <li>Actual pictures of available plants</li>
                            <li>Pick-up address and time slots</li>
                            <li>Venmo information</li>
                        </InstructionUnorderedList>
                    </li>
                    <li>Please confirm preferred pick-up time and preferred contact via email</li>
                    <li>Payment could be done before or during pick-up (Venmo/Cash)</li>
                </InstructionOrderedList>  
                *No guarantee of plant availability if pick-up is more than 7 days, unless you've prepaid!*
            </InstructionContent>      
        </div>
    );
}

export default OrderInstruction;
