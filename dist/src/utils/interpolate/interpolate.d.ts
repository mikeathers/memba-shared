import React from 'react'
type TagInterpolationHandler = (text: string, index?: number) => string | React.ReactNode
type InterpolatedVars = Record<string, string | number>
type InterpolatedTags = Record<string, TagInterpolationHandler>
export declare function interpolateVars(val: string, vars?: InterpolatedVars): string
export declare const interpolateContent: (
  val: string,
  vars?: InterpolatedVars,
  tags?: InterpolatedTags,
) => Array<string | React.ReactNode>
export {}
//# sourceMappingURL=interpolate.d.ts.map
