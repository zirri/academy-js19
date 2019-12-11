React Basics Project
====================

- Add ability to sort the flights by destination, price, or clicks (add buttons)
  - You can use `sort-by` here as well (from npm)
- Add a mini-image of the destination next to the title only when the details are not shown
- Move the two components `App` and `FlightInfo` into separate files
- Get rid of the console warning about `key` - [more info here](https://facebook.github.io/react/docs/lists-and-keys.html#keys)
  - Add an `id` to each of the flights in the array
  - Use the `id` as `key` for the mapped `FlightInfo` components
