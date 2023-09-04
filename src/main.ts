//@ts-ignore missing type idk
import App from '@/App.vue';
import router from '@/router';
import {createApp,h} from 'vue';
import {createPinia} from 'pinia';
import {DefaultApolloClient} from '@vue/apollo-composable';
import {ApolloClient, InMemoryCache, HttpLink, from} from '@apollo/client/core';
import {onError} from '@apollo/client/link/error';
import {useGlobals} from '@/stores/globals';
import {useHighlighting} from '@/stores/highlighting';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';
import javascript from 'highlight.js/lib/languages/javascript';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends ReturnType<typeof useGlobals> {}
}

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) for (const {message, locations, path} of graphQLErrors) console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const pinia = createPinia();
const app = createApp({render: () => h(App),compilerOptions:{isCustomElement(t){return ['CustomLink'].includes(t);}}}).use({install: (a, o:{hljs:typeof hljs}) => a.directive('highlight', (el:HTMLPreElement) => el.querySelectorAll<HTMLElement>('code').forEach(o.hljs.highlightElement))}, {hljs}).use(router).use(pinia);
//Pina is loaded now
const highlight = useHighlighting();
hljs.registerLanguage('javascript',javascript);
hljs.addPlugin(highlight.linePlugin);

const globals = useGlobals();
app.config.globalProperties = globals as any;
const httpLink = new HttpLink({uri: globals.graphqlURL});

app.provide(
  DefaultApolloClient,
  new ApolloClient({
    cache:new InMemoryCache({
      typePolicies:{
        PostEntity:{
          keyFields:['id'],
          fields:{
            attributes:{
              keyArgs:['slug'],
              merge:true
            }
          }
        },
        QuoteEntity:{keyFields:['id']},
        Query:{
          fields:{
            posts:{
              keyArgs:['id'],
              merge:true
            },
            tags:{keyArgs:['id']}
          }
        }
      }
    }),
    link:from([errorLink, httpLink]),
    defaultOptions: {
      query:{
        notifyOnNetworkStatusChange:true,
        errorPolicy: 'all'},
      watchQuery:{
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
      }
    }
  })
).mount('#app');