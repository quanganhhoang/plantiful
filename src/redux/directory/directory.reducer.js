export const INITIAL_STATE = {
    sections: [
      {
        title: 'plants',
        imageUrl: 'https://bloomscape.com/wp-content/uploads/2019/09/190906-easy_category-banner.jpg?ver=61552',
        id: 1,
        linkUrl: 'shop/plants'
      },
      {
        title: 'stems',
        imageUrl: 'https://www.papernstitchblog.com/wp-content/uploads/2018/04/paperandstitchblog-how-to-propagate-houseplants-3-steps-2.jpg',
        id: 2,
        linkUrl: 'shop/stems'
      },
    ]
};
  
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
  
export default directoryReducer;
  