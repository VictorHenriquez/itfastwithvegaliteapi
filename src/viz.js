import * as vl from 'vega-lite-api';

export const viz = vl.markPoint().encode(
    vl.x().filedQ('acceleration').scale({ zero:false }),
    vl.y().filedQ('horsepower').scale({ zero:false }),
    vl.tooltip().filedN('name')
);