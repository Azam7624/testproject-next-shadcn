import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const TableComponent = () => {
  return (
    <Table >
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead >Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell >INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell >$250.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell >INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell >$250.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell >INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell >$250.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell >INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell >$250.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell >INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell >$250.00</TableCell>
      </TableRow>
      
    </TableBody>
  </Table>
  
  )
}

export default TableComponent
