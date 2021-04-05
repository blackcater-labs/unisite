import { ReactElement, ValidationMap, WeakValidationMap } from "react";

interface FunctionComponent<P = {}> {
  (props: P, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}

export type FC2<P = {}> = FunctionComponent<P>;
