import { visuallyHidden } from '@mui/utils';
import { Box, Checkbox, TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';
import { ITableHeader } from '../../interafaces/Models';

// ----------------------------------------------------------------------


const HeadTable = (props: {table_header: ITableHeader[]}) => {
    return (
        <TableHead>
            <TableRow>
                {props.table_header.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.alignRight ? 'right' : 'left'}
                    >
                        <TableSortLabel>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export { HeadTable }
