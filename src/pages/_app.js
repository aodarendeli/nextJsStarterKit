import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import '@/assets/style.scss';
import GlobalLayout from "../layouts/GlobalLayout";
require('dotenv').config()

const index = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <GlobalLayout>
        <Component {...props.pageProps} />
      </GlobalLayout>
    </Provider>
  );
};

export default index;
