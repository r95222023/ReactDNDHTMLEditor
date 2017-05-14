const squareFlexBlock = {
  tag: 'div',
  class: 'flex',
  style: {minWidth:'10px', minHeight:'10px'}
};

export const defaults = {
  'row': {
    tag: 'div',
    class: 'layout-row',
    style: {padding: '20px', margin: '20px', minWidth: '30px', minHeight: '100px'},
    children: [squareFlexBlock, squareFlexBlock, squareFlexBlock]
  }
};
