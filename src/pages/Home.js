import React from "react";
import BaseTemplate from "./BaseTemplate";
import { Flex } from '@chakra-ui/react';
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
import './Styles/HomePageStyle.css';
import TradingViewWidget from "./TradingViewWidget";
import { CWidgetStatsB } from '@coreui/react';
import { CRow,CCol, } from "@coreui/react";
import { useState , useEffect } from "react";

export default function Home(props)
{
    
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
                            <Tr>
                                <Td></Td>
                                <Td>millimetres (mm)</Td>
                                <Td>kkk</Td>
                                <Td isNumeric>25.4</Td>
                                
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td>kkk</Td>
                                <Td isNumeric>30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td>kkk</Td>
                                <Td isNumeric>0.91444</Td>
                            </Tr>
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