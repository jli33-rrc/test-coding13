export interface TableProps {
  headers: string[];
  rows: string[][];
  footer?: string[];
  hoverable?: boolean;
  striped?: boolean;
  backgroundColour?: string;
  textColour?: string;
  headerBackgroundColour?: string;
  footerBackgroundColour?: string;
  hoverColour?: string;
  stripeColour?: string;
}
