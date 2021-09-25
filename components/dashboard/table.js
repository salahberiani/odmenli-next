/* eslint-disable react/display-name */
import { useTable } from 'react-table';
import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Badge, Box, Button, Flex } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Axios from 'util/Axios';
import useStore from 'store';

import makeData from './makeData';

function DashTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <Table shadow="lg" bg="white" {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup, i) => (
          <Tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => (
              <Th key={i} {...column.getHeaderProps()}>
                {column.render('Header')}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Tr _hover={{ bg: 'green.50' }} key={i} {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                return (
                  <Td key={i} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

function App() {
  const statusToArabic = {
    pending: {
      name: 'قيد التأكيد',
      color: 'yellow',
    },
    verfied: {
      name: 'تم التأكيد',
      color: 'blue',
    },
    failed: {
      name: 'فشل التأكيد',
      color: 'red',
    },
    rejected: {
      name: 'فشل الصفقة',
      color: 'red',
    },
    complete: {
      name: 'نجاح الصفقة',
      color: 'green',
    },
  };
  const userid = useStore((state) => state.auth._id);

  const [daman, setDaman] = useState();
  useEffect(() => {
    const getDaman = async () => {
      try {
        const res = await Axios.post('/daman/userlist', { userid });
        setDaman(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDaman();
  }, [userid]);
  const columns = React.useMemo(
    () => [
      {
        Header: 'رقم التعريف',
        accessor: '_id',

        Cell: ({ cell }) => {
          return (
            <Link passHref href={`/daman/${cell.value}`}>
              <Badge _hover={{ color: 'green.500' }} cursor="pointer" fontSize="0.8em">
                {cell.value}
              </Badge>
            </Link>
          );
        },
      },
      {
        Header: 'اسم الشاري',
        accessor: 'bayerFullName',
      },
      {
        Header: 'اسم البائع',
        accessor: 'sellerFullName',
      },

      {
        Header: 'رقم البائع',
        accessor: 'sellerPhone',
      },
      {
        Header: 'نوع',
        accessor: 'type',
      },

      {
        Header: 'الحالة',
        accessor: 'status',
        // eslint-disable-next-line react/display-name
        Cell: ({ cell }) => (
          <Badge fontSize="0.8em" colorScheme={statusToArabic[cell.value].color}>
            {statusToArabic[cell.value].name}
          </Badge>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(5), []);
  console.log(data);
  console.log(daman);

  return (
    <Box>
      <Flex justifyContent="flex-end">
        <Link passHref href="/adddaman">
          <Button leftIcon={<AddIcon />} size="sm" m="4" colorScheme="green">
            أنشئ ضمان
          </Button>
        </Link>
      </Flex>
      <Box w="100%" overflowX={{ base: 'scroll', md: 'hidden' }} overflowY="hidden">
        {daman && <DashTable columns={columns} data={daman} />}
      </Box>
    </Box>
  );
}

export default App;
