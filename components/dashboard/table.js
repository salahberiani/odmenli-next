/* eslint-disable react/display-name */
import { useTable } from 'react-table';
import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Badge, Box, Button, Flex } from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';
import Link from 'next/link';
// import Axios from 'util/Axios';
import useAxios from 'util/useAxios';
import useStore from 'store';

function DashTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <Table fontSize="xl" className="responsive-table" bg="white" {...getTableProps()}>
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
                console.log(cell);
                return (
                  <Td data-label={cell.column.Header} key={i} {...cell.getCellProps()}>
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
  const Axios = useAxios();
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
  }, []);
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
        Header: 'المبلغ',
        accessor: 'amount',
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

  return (
    <Box>
      <Flex justifyContent="flex-end">
        <Link passHref href="/adddaman">
          <Button leftIcon={<AddIcon />} size="sm" m="4" colorScheme="green">
            أنشئ ضمان
          </Button>
        </Link>
      </Flex>
      {/* <Box shadow="xl" w="100%" overflowX={{ base: 'scroll', md: 'hidden' }} overflowY="hidden"> */}
      {daman && <DashTable columns={columns} data={daman} />}
      {/* </Box> */}
    </Box>
  );
}

export default App;
