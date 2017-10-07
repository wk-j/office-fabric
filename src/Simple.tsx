import * as React from "react";
import { IColumn, DetailsList } from "office-ui-fabric-react/lib/DetailsList";

type State = {
    columns: IColumn[];
    items: Document[]
}

type Document = {
    [key: string]: any;
    name: string
    iconName: string
    fileSize: string
}

let items: Document[] = [];

let columns: IColumn[] = [
    {
        key: 'column1',
        name: 'File Type',
        headerClassName: 'DetailsListExample-header--FileIcon',
        className: 'DetailsListExample-cell--FileIcon',
        iconClassName: 'DetailsListExample-Header-FileTypeIcon',
        iconName: 'Page',
        isIconOnly: true,
        fieldName: 'name',
        minWidth: 16,
        maxWidth: 16,
        onRender: (item: Document) => {
          return (
            <img
              src={ item.iconName }
              className={ 'DetailsListExample-documentIconImage' }
            />
          );
        }
      },
      {
        key: 'column2',
        name: 'Name',
        fieldName: 'name',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        onColumnClick: this._onColumnClick,
        data: 'string',
        isPadded: true
      },   
      {
        key: 'column5',
        name: 'File Size',
        fieldName: 'fileSizeRaw',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        data: 'number',
        onColumnClick: this._onColumnClick,
        onRender: (item: Document) => {
          return (
            <span data-is-focusable={ true } >
              { item.fileSize }
            </span>
          );
        }
      },
];

export class Simple extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        let docType = "docx";

        if (items.length == 0) {
            for(let i = 0; i< 10;i ++) {
                items.push({
                    name: "Hello.pdf",
                    iconName:  `https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/${docType}_16x1.svg`,
                    fileSize: "54"
                })
            }
        }

        this.state = {
            items: items,
            columns: columns
        }
    }

    render() {
        let { columns, items } = this.state;

        return (
            <DetailsList
                columns={columns}
                compact={false}
                items={items}>
            </DetailsList>
        );
    }
} 