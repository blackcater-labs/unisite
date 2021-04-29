import { ReactElement, ValidationMap, WeakValidationMap } from "react";

interface FunctionComponent<P = {}> {
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
  (props: P, context?: any): ReactElement<any, any> | null;
}

export type FC2<P = {}> = FunctionComponent<P>;
