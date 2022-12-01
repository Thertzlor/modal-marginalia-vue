//@ts-ignore missing type idk
import App from "@/App.vue";
import router from "@/router";
import { DefaultApolloClient } from '@vue/apollo-composable'
import { onError } from "@apollo/client/link/error";
import { createApp,h  } from "vue";
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client/core'
import * as globals from "./services/GlobalDataService"

const httpLink = new HttpLink({uri: globals.graphqlURL});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

type GlobalData = Unspace<typeof globals>

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends GlobalData {}
}

const apolloClient = new ApolloClient({
  cache:new InMemoryCache({
    typePolicies:{
      PostEntity:{
        keyFields:['id'],
        fields:{attributes:{
          keyArgs:['slug'],
          merge:true
        }
      }
    },
      QuoteEntity:{
        keyFields:['id']
      
    },
    Query:{
    fields:{
      posts:{
        keyArgs:['id'],
        merge:true
      },
      tags:{
        keyArgs:['id']
      }
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

const app = createApp({render: () => h(App),compilerOptions:{
  isCustomElement(t){return ['CustomLink'].includes(t)}
}});
app.config.globalProperties = {...globals} as any
app.provide(DefaultApolloClient, apolloClient).use(router).mount("#app");
