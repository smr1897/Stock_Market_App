// import React from "react";
// import { useState , useEffect} from "react";
// import Home from "../pages/Home";

// export default function stockData (props)
// {
//     const API_URL = "https://endpoint";

//     const [Name , setName] = useState(null);
//     const [PriceNow , setPriceNow] = useState(null);
//     const [StartingPrice , setStartingPrice] = useState(null);
//     const [Difference , setDifference] = useState(null);

//     useEffect(() => {
//         fetch(API_URL).then(response => response.json()).then(({Name , PriceNow , StartingPrice , Difference}) => {
//             setName(Name);
//             setPriceNow(PriceNow);
//             setStartingPrice(StartingPrice);
//             setDifference(Difference);
//         });
//     }, []);

//     return(
//         <props.Home
//             name = {Name}
//             priceNow = {PriceNow}
//             startingPrice = {StartingPrice}
//             difference = {Difference}
//         />
//     );
// }

import React from "react";
import { useState , useEffect } from "react";
import Home from '../pages/Home';
import BaseTemplate from "../pages/BaseTemplate";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

const Stock = (props) => {

    const[stocks , setStocks] = useState([]);
    

    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await fetch('https://localhost:7214/Stocks');
                const data = await response.json();
                setStocks(data);

                
                

            }catch(error){
                console.error('Error fetching data : ',error);
            }
        };
        fetchData();

        } , []);

        return(
              <>     
            <BaseTemplate>
                <div className = "table">
                    <TableContainer>
                        <Table variant='striped' colorScheme='teal'>
                            <TableCaption>Stock prices</TableCaption>
                            <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Price Now</Th>
                                <Th>Starting price</Th>
                                <Th isNumeric>Difference</Th>
                                
                            </Tr>
                            </Thead>
                            <Tbody>
                            {stocks.map((stock) => (
                                    <Tr key={stock.id}>
                                        <Td>{stock.name}</Td>
                                        <Td>{stock.priceNow}</Td>
                                        <Td>{stock.startingPrice}</Td>
                                        <Td isNumeric>{stock.difference}</Td>
                                    </Tr>
                                    ))}
                            
                            </Tbody>
                            <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                    {/* <TradingViewWidget/> */}
                    
                    
                </div>
                
            </BaseTemplate>
            <div>jkjhkjhkjh</div>
            </>
             
    )
    
    
};

export default Stock;