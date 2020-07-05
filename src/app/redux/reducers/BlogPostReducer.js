import { ADD_BLOG_POST, EDIT_BLOG_POST, DELETE_BLOG_POST, SEARCH_BLOG_POST } from "../actions/actionNames";


const initialState = [
  {
    id: 1,
    title:	"Hello there",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis iusto assumenda fuga dolorum quis. Sint maiores ratione ipsam sunt dolor similique. Aliquid libero eum omnis ex numquam voluptates inventore pariatur quod, adipisci minus magni harum facilis optio sed nam, sint blanditiis aspernatur maxime facere explicabo deleniti eligendi, a saepe cum. Alias assumenda nesciunt consequuntur veritatis ea vel id dolorem voluptas. ",
    categoryId: 1
    },
  {
    id: 2,
    title:	"Hello there",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis iusto assumenda fuga dolorum quis. Sint maiores ratione ipsam sunt dolor similique. Aliquid libero eum omnis ex numquam voluptates inventore pariatur quod, adipisci minus magni harum facilis optio sed nam, sint blanditiis aspernatur maxime facere explicabo deleniti eligendi, a saepe cum. Alias assumenda nesciunt consequuntur veritatis ea vel id dolorem voluptas. ",
    categoryId: 2
    },
  {
    id: 3,
    title:	"Hello there",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis iusto assumenda fuga dolorum quis. Sint maiores ratione ipsam sunt dolor similique. Aliquid libero eum omnis ex numquam voluptates inventore pariatur quod, adipisci minus magni harum facilis optio sed nam, sint blanditiis aspernatur maxime facere explicabo deleniti eligendi, a saepe cum. Alias assumenda nesciunt consequuntur veritatis ea vel id dolorem voluptas. ",
    categoryId: 3
    }
]

const BlogPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

export default BlogPostReducer;

// import {
//   SET_LAYOUT_SETTINGS,
//   SET_DEFAULT_LAYOUT_SETTINGS
// } from "../actions/LayoutActions";
// import { MatxLayoutSettings } from "../../MatxLayout/settings";


// const initialState = {
//   settings: {
//     ...MatxLayoutSettings
//   },
//   defaultSettings: {
//     ...MatxLayoutSettings
//   }
// };

// const LayoutReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_LAYOUT_SETTINGS:
//       return {
//         ...state,
//         settings: { ...action.data }
//       };
//     case SET_DEFAULT_LAYOUT_SETTINGS:
//       return {
//         ...state,
//         defaultSettings: { ...action.data }
//       };
//     default:
//       return { ...state };
//   }
// };


