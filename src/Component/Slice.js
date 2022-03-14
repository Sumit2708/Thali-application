import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  products:[
    {
      id: 1,
      image:"https://media.istockphoto.com/photos/paneer-korma-kurma-or-quorma-is-a-popular-indian-main-course-recipe-picture-id1195395081?b=1&k=20&m=1195395081&s=170667a&w=0&h=SsYi9M-txPciTACpDSyvk-zu0Lqr6P3Jl5NZCxkB3kM=", 
      name: "Paneer",
      price: "120",
      description: "It's our popular dish And it is worldwide famous,Order and Enjoy." },
  
    {
      id: 2,
      image: "https://media.istockphoto.com/photos/red-lentil-soup-picture-id1177840203?b=1&k=20&m=1177840203&s=170667a&w=0&h=s96vTFJ2_rvHurvnnEfPO3GSrU7Og0f6Yh9uZpiwzCY=",
      name: "Daal",
      price: "80",
      description: "Daal is combintion of health and test try our one, Order and Enjoy."
       },
    {
      id: 3,
      image: "https://media.istockphoto.com/photos/elegant-indian-desert-gulab-jamun-picture-id827345478?b=1&k=20&m=827345478&s=170667a&w=0&h=asGKAr2Hf5dhx9_dn6HzI5OHiQKLfXsjKvcMAvkFtqg=",
      name: "Gulab Jam" ,
      price: "60",
      description: " It is a famous indian sweet, Order and Enjoy. "
          },
    {
      id: 4,
      image: 'https://media.istockphoto.com/photos/bowl-of-fresh-mixed-berries-and-yogurt-picture-id487468481?b=1&k=20&m=487468481&s=170667a&w=0&h=WSgp9VqSlJzv5yicQuEctEAxW9o9DGVbY-cKNmzOhp8=',
      name: "Curd",
      price: "120",
      description:" It's a healthy and testy indian recipe must try, Order and Enjoy."
       },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1604579659931-f42436a8368c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpY2tsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Pickle",
      price: "30",
      description: "Here is an another option for making your dish more delicious,Order and Enjoy "
        },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcGF0aXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
       name: "Chapati",
      price: "10",
      description:" Chapati is a like a mother of dish so,Order and Enjoy. "
      },
   
    
  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer