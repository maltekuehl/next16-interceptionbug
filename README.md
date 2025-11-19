### Next 16 Modal Interception Bug

1. npm install
2. npm run dev
3. go to http://localhost:3000/calendar
4. Click on the "Click me..." text to open model
5. Go back via browser and repeat... notice that it works fine
6. Made any edit in the IDE, eg add an "!" to the end of the "Click me..." and save
7. See error in terminal...

```
 ⨯ Error: Invalid interception route: /calendar/(.)(.)2025-11-20. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>
    at matchAll.next (<anonymous>)
    at matchAll.next (<anonymous>)
```

Now modal is no longer intercepted and performs a full page load.
