# RTK-Cart App

A modern, responsive e-commerce web application built to demonstrate state management using React and Redux Toolkit. 

## Features
- **Product Listing**: View a variety of products with their prices, ratings, and descriptions.
- **Wishlist Management**: Easily add or remove items from your personal wishlist. Your wishlist is highlighted in a dedicated Hero section on the Home page.
- **Shopping Cart**: Add products to your cart, adjust quantities, remove items, and see the real-time total price calculation.
- **Modern UI**: Styled with Tailwind CSS v4, featuring a sleek dark theme with a distinct primary color and Lucide React icons.

## Technologies Used
- React (Vite)
- Redux Toolkit (RTK) for state management
- Tailwind CSS v4 for styling
- Lucide React for consistent iconography

---

## Redux Toolkit (RTK) Concepts
## Explore

### What is Redux?
redux was discovered/created in 2015
a redux is the stste management tool , 
the redux help managing the ststes in react it makes state centrelized all things will be managed in single place 

### Why was Redux Toolkit introduced?
RTK is the simpler version of Redux
it solves the proble Redux :
- complex to understand
- too much boiler plate code
- time consuming to grab for new devs

it gives simpler syntax and maked things easier and it gives 2 main functions 
- `configureStore()` : 
    - to configure store
    - combines reducers
    - enables Redux DevTools
- `createSlice()` :
    - automatically generates reducers and action creators.

### What problems does it solve?
- complex to understand
- too much boiler plate code
- time consuming to grab for new devs

### What is a Store?
Store is the main file where we configure and create store using "configureStore()"
and pass the reducers which are slices features we have 

### What is a Slice?
A Slice represents one feature of the application. It contains its initial state, reducers, and automatically generated actions.
example : 
    cartSlice having addToCart , RemoveFromCard ...
    
### What are Reducers?
Reducer are the functions written by the users which receive the current state and an action, then update the state.
Example : 
addToCart , RemoveFromCard ...

### What are Actions?
actions are the activity perform by the user when user clcik on button perform something it dispatches a action containing what to do which reducer to call with which values/payload of which slice 
Example : 
```javascript
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/slices/cartSlice";
const dispatch = useDispatch()
dispatch(addItemToCart(product))
```

### What are useSelector and useDispatch?
useSelectore is the method provided by RTK which returns selected data from the Redux store.
Example : 
```javascript
import { useSelector } from "react-redux";
const products = useSelector((state) => state.products);
```

useDispatch is a method which takes the action Redux findes matching reducer and exicutes it 
Example : 
```javascript
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/slices/cartSlice";
const dispatch = useDispatch()
dispatch(addItemToCart(product))
```

### How does data flow inside Redux Toolkit?
user perform action  -> action created -> Dispatched the action -> goes in store wher Redicers stored -> Reducer function exicutes code -> after exicution stste changes /updates -> ui will update on screen
