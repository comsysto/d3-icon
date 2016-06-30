# d3-icon

This (very simple) D3.js module shall help to include common icons in your documents.

## Installing

If you use NPM, `npm install d3-icon`. Otherwise, download the [latest release](https://github.com/comsysto/d3-icon/releases/latest).

```html
    <script src="https://d3js.org/d3.v4.js"></script>
    <script src="your/path/to/node/modules/d3-icon.js"></script>
```    

## Usage

To draw a heart, use the following code fragment: 

```html

    var heartIcon = d3.icon({type: 'heart'});
    
```

To see in detail, how it works, have a look at the example.html. Run "npm run prepublish" to create the build folder used there. 

## Credits 

Usefull stuff taken from [D3 shape module](https://github.com/d3/d3-shape/).
