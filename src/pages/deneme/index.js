import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../store/slices/cart';
import { wrapper } from '../../store/store';

const page = () => {
  const val = useSelector(state => state.cart.deneme);
  const dispatch = useDispatch();
  const setHandleClick = () => {
    dispatch(addCart("deneme"))
  }

  return (
    <>
      <button onClick={() => setHandleClick()}>Tıkla</button>
      <input type='text' value={val} />
    </>
  )
}

export default page

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//       // let { pid } = context.params ?? {};
//       // const  data  =  store.getState().cart;
//       return {
//           props: {
//               data,
//           },
//       };



     
//   },
// );