import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Table, Pagination } from 'rsuite';
import {Button} from 'react-bootstrap';
import 'rsuite/dist/rsuite.min.css';

const TableComponent = (
    {
        data,
        loading,
        attributes,
        handleSessionCompletedToggle,
        handleSessionCancel, 
        cellWidth
}) => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
  
    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const renderColumns = () => {
        let columns = [];
        attributes.forEach(attribute => {
            let cell; 
            if (attribute === "session_completed") {
                cell = <Table.Column width={cellWidth} align="left" fixed>
                        <Table.HeaderCell>{attribute}</Table.HeaderCell>
                        <Table.Cell dataKey={attribute}>
                            {rowData => {
                                    return (
                                        <Form>
                                            <Form.Check
                                                inline
                                                name="group1"
                                                type={"checkbox"}
                                                id={`inline-checkbox-1`}
                                                onClick={() => handleSessionCompletedToggle(rowData)}
                                        />
                                        </Form>
                                    );
                            }}    
                        </Table.Cell>
                    </Table.Column>
            }
            else if (attribute === "cancel") {
                cell = <Table.Column width={cellWidth} align="left" fixed>
                <Table.HeaderCell>{attribute}</Table.HeaderCell>
                <Table.Cell dataKey={attribute}>
                    {rowData => {
                            return (
                                <p style={{"cursor": "pointer"}} onClick={() => handleSessionCancel(rowData)}><u>Cancel</u></p>
                            );
                    }}    
                </Table.Cell>
            </Table.Column>
            }
            else {
                cell = (<Table.Column width={cellWidth} align="left" fixed>
                <Table.HeaderCell>{attribute}</Table.HeaderCell>
                <Table.Cell dataKey={attribute} />
            </Table.Column>)
            }
            columns.push(cell);
        });
        return columns;
    }

    return (
        <div>
            <Table height={420} data={data} loading={loading}>
                {renderColumns()}
            </Table>
            <div style={{ padding: 20 }}>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="xs"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={data.length}
                    limitOptions={[10, 20]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                />
                </div>
            </div>
    )
}

export default TableComponent;