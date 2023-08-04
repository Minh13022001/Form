import React, { useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { table_record } from './state_management/ato';
import { useRecoilState, useRecoilValue } from 'recoil';
const { Column, ColumnGroup } = Table;





const Tablee = () => {

  const dataSource = useRecoilValue(table_record);

  

  return(
<>
    <Table dataSource={dataSource}>
      <ColumnGroup>
        <Column title="id" dataIndex="id" key="id" />
      </ColumnGroup>
      <ColumnGroup>
        <Column title="value" dataIndex="value" key="value" />
        <Column title="type" dataIndex="type" key="type" />
      </ColumnGroup>
    </Table>
      {/* <Button onClick={addTable} type='primary'>Add st</Button> */}

</>
  )
}
export default Tablee;






