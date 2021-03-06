import { XmlComponent } from "../../../file/xml-components";
import { ITableCellShadingAttributesProperties, TableCellBorders, VerticalAlign, VMergeType, WidthType } from "./table-cell-components";
export declare class TableCellProperties extends XmlComponent {
    private readonly cellBorder;
    constructor();
    readonly Borders: TableCellBorders;
    addGridSpan(cellSpan: number): TableCellProperties;
    addVerticalMerge(type: VMergeType): TableCellProperties;
    setVerticalAlign(type: VerticalAlign): TableCellProperties;
    setWidth(width: string | number, type?: WidthType): TableCellProperties;
    setShading(attrs: ITableCellShadingAttributesProperties): TableCellProperties;
}
