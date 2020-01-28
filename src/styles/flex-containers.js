export const FlexStyle = {display: 'flex'};
export const FlexColumn = {...FlexStyle, flexFlow: 'column'};

export const FlexAlignCenter = {...FlexStyle, alignItems: 'center'};
export const FlexColumnAlignCenter = {...FlexColumn, alignItems: 'center'};

export const FlexCenterCenter = {...FlexAlignCenter, justifyContent: 'center'};
export const FlexColumnCenterCenter = {...FlexColumnAlignCenter, justifyContent: 'center'};

export const FlexAlignCenterSpaceAround = {...FlexAlignCenter, justifyContent: 'space-around'};
export const FlexColumnAlignCenterSpaceAround = {
    ...FlexColumnAlignCenter,
    justifyContent: 'space-around'
};

export const FlexAlignCenterSpaceAroundWrap = {
    ...FlexAlignCenterSpaceAround,
    flexWrap: 'wrap'
};
export const FlexColumnAlignCenterSpaceAroundWrap = {
    ...FlexColumnAlignCenterSpaceAround,
    flexWrap: 'wrap'
};
