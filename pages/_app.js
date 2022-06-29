import { StateProvider } from "../stateProvider";
import reducer, { initialState } from "./../reducer";
import "../styles/globals.css";
import TransitionLayout from "./../components/TransitionLayout";
import { TransitionProvider } from "../components/TransitionProvider";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <TransitionProvider>
        <TransitionLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TransitionLayout>
      </TransitionProvider>
    </StateProvider>
  );
}

export default MyApp;
