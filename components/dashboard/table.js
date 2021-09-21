import { useTable } from 'react-table';
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Badge, Box, Button, Flex } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Link from 'next/link';

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
            <Tr key={i} {...row.getRowProps()}>
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
  const columns = React.useMemo(
    () => [
      {
        Header: 'رقم التعريف',
        // eslint-disable-next-line react/display-name
        Cell: () => <Badge fontSize="0.8em">sd4f5sd45s5d4f5s</Badge>,
      },
      {
        Header: 'اسم الشاري',
        accessor: 'firstName',
      },
      {
        Header: 'اسم البائع',
        accessor: 'lastName',
      },

      {
        Header: 'رقم البائع',
        accessor: 'age',
      },
      {
        Header: 'رقم ccp البائع',
        accessor: 'visits',
      },
      {
        Header: 'مفتاح ccp البائع',
        accessor: 'status',
      },
      {
        Header: 'الحالة',
        accessor: 'progress',
        // eslint-disable-next-line react/display-name
        Cell: () => (
          <Badge fontSize="0.8em" colorScheme="green">
            اكتمل
          </Badge>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(5), []);

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
        <DashTable columns={columns} data={data} />
      </Box>
    </Box>
  );
}

export default App;
