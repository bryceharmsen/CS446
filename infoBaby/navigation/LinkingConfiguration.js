import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Home: 'home',
        Ages: {
          Ages: 'ages',
          Categories: 'categories'
        },
        Journal: 'journal'
      },
    },
  },
};
