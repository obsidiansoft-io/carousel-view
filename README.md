# carousel-view

Custom webcomponent carousel view

#### properties

| Property   | description                              | type                |
| ---------- | ---------------------------------------- | ------------------- |
| style      | styles                                   | String/StylesInline |
| autoScroll | Automatically changes the carousel items | Boolean             |

#### Example
![Carousel simple view](https://bucket.obsidiansoft.io/obsidiansoft/Anotaci%C3%B3n%202019-06-20%20180817.png)
```html
<!--use tag slot for number the elements (required)--->
<carousel-view style="width: 600px;height:400px; display: block;" autoScroll>
  <img
    src="https://images.pexels.com/photos/2443865/pexels-photo-2443865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    slot="0"
  />
  <img
    src="https://images.pexels.com/photos/2365701/pexels-photo-2365701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    slot="1"
  />
  <img
    src="https://images.pexels.com/photos/2479642/pexels-photo-2479642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    slot="2"
  />
  <img
    src="https://images.pexels.com/photos/2494517/pexels-photo-2494517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    slot="3"
  />
</carousel-view>
```
