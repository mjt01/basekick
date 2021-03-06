interface FontRules {
  fontSize: string;
  lineHeight: string;
  transform: string;
}

interface Options {
  baseFontSize: number;
  typeSizeModifier: number;
  typeRowSpan: number;
  gridRowHeight: number;
  descenderHeightScale: number;
  lineHeightOverride?: number;
}

export default function(options: Options): FontRules;
