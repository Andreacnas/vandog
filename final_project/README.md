## Assignment Name: Final Project

## Team Name: Tech Newbies

## Team Member:

Alvaro Beltran Caceres, Andrea Cavalcanti Nascimento, Mohammed Rehan Ali, Tuyi Chen

### Alvaro Beltran Caceres (N01511461)

1. **Page 1 - events.html: Listing of Vincent's events for the family and friends**
   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/events.html
   - JS function: modalOn() : The modal html is hidden from the page, using an array of objects the modal information is populated and shown in the middle of the screen
   - JS function : modalOff() toggles the "modal-active" class when the modal is being displayed
   - JS event: addEventListener() Adds a click event to each button inside the card
2. **Page 2 - services.html: Showcase of 1 of the services provided by Vincent**
   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/services.html
   - Js function : slideImgs() slide showing images/second using setTimeout() method
   - JS function : NextImg() counter to know which photo we are seeing, function checks if the current img is the last one and starts the count over creating an infinite carousel loop
   - JS function: : displayActiveImage() Handles the transition from one image to the next one.
3. **Page 3 - contact_us.html: Contact form for Vincet**
   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/contact_us.html
   - JS function: sendMessage() Validates email input for emptiness or unproper email format(no @). Validates text area is not empty.
   - JS event: addEventListener() Key strokes to update character counter

### Andrea Cavalcanti Nascimento (N01526433)

1. **Page 1 - about_me.html: a brief history of Vincent Van-Dog**
   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/about_me.html
   - JS function: slideImg() slide show
   - JS method: setTimeout() calls a function after a number of milliseconds
   - JS event: window.onload it launchs once all page loads
2. **Page 2 - artist_test.html: a quiz for users have fun and find out whether they have artistic skills**

   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/artist_test.html
   - Js function slideShow() slide showing images/second using setTimeout() method
   - JS event: onClick is used when the button is clicked
   - JS function: calcResults() comparison between two arrays while collecting the right answers using a for loop
   - JS method: createElement() creates another button
   - JS method: replaceChild() replaces the previous button to the new one

3. **Page 3 - visit_us.html: registration page to visit the galley for free**
   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/visit_us.html
   - jQuery method: .click(function) once the button is clicked, a form will show up
   - jQuery method: .slideToggle() displays the form with a sliding motion

### Mohammed Rehan Ali (N01512346)

1. **Page 1 - home.html: Vincent Van-Dog home page**
   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/home.html
   - JS function: smoothScroll() - when you click the hero image of the home page it will automatically scroll to the bottom of the page in a smooth transition.
 
2. **Page 2 - porfolio.html: a page where all the porfolio works can  be viewed**

   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/porfolio.html
   - Dynamic rendering of DOM elements, using JSON data.
   - JS function: an event listener is add on every image element, when ever it is clicked a modal is opened
   - JS function: when the view details button is clicked in the modal, it redirects the user to the individual page.

3. **Page 3 - individual.html: you can view one project in detail on this page**
   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/individual1.html
   - JS function: whenever the main picture is clicked, the full image opens in new tab.

### Tuyi Chen (N01531425)

1. **Page 1 - shop.html: overview shop page displaying all peripheral products**
   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/shop.html
   - JS function filterSelection() filters elements by product type
   - JS function showElements() shows selected elements
   - JS function hideElements() hides unselected elements
2. **Page 2 - product.html: one page for a product detail**
   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/product.html
   - JS function showSlides() automatically displays product images
   - JS function showImg() shows the image of chosen product
3. **Page 3 - cart.html: dummy shopping cart page**
   - https://2022-winter-itc-5103-rnb.github.io/final-project-technewbies/cart.html
   - JS function updateCart() shows cart items from JS array
   - JS function deleteItem() deletes an item from shopping cart
   - JS function checkAll() can select/unselect all cart items
   - JS function calculation() calculates subtotal, tax, and total price of selected items
   - JS function minusOne() decreases the number of products by one and the lower boundary is zero
   - JS function plusOne() increases the number of products by one

## Consistent style guide

- Same header, navigation, and footer components
- Font family: Montserrat
- Color palette: #ff5757 #f8cbaa #ffecec #f39696 #7fbeb3 #495176 black white
- Naming convention: Vincent Van-Dog | <page name> for head title, i.e Vincent Van-Dog | Shop
- Media query breakpoints: 576px, 768px, 1024px

## Learning curves and challenges

- CSS layout of flex, flexbox, grid, etc.
- Append HTML content, CSS styles, and scripts to document using JavaScript
- Hide input number arrows
- Position elements fixed relative to parent
- JavaScript ternary functions with multiple conditions
- JavaScript break and continue statements
- Set JS and its methods

## Resources

- Append HTML content using JavaScript: https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
- Append CSS styles using JavaScript: https://attacomsian.com/blog/javascript-set-css-styles
- Append script using JavaScript: https://stackoverflow.com/questions/22211584/using-document-head-appendchild-to-append-a-script-tag-that-has-an-src-attribu
- Filter elements: https://www.w3schools.com/howto/howto_js_filter_elements.asp
- Find color: https://imagecolorpicker.com/
- Find emoji: https://emojiguide.org/
- Get all checked checkbox value in JavaScript: https://www.javatpoint.com/how-to-get-all-checked-checkbox-value-in-javascript
- Hide input number arrows: https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp
- Position elements fixed relative to parent: https://stackoverflow.com/questions/5209814/can-i-position-an-element-fixed-relative-to-parent
- https://www.w3schools.com/jsref/prop_html_innerhtml.asp
- https://www.javascripttutorial.net/javascript-dom/javascript-replacechild/
- https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
- https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/
- https://api.jquery.com/click/

- Image references: \
  ** https://unsplash.com/photos/M74Pihi2vz8 \
  ** https://unsplash.com/photos/PtfiHm18W0E \
  ** https://unsplash.com/photos/8qq_QbZDSxg \
  ** https://unsplash.com/photos/LxlQWbvPIvQ \
  ** https://unsplash.com/photos/nqWi9UtUN5I \
  ** https://unsplash.com/photos/Obahj-P-LOo \
  ** https://unsplash.com/photos/mcx96uCynr4 \
  ** https://unsplash.com/photos/wvYdfoWPaQM \
  \*\* https://unsplash.com/photos/XSMTwl7n3p4 \
- Website content/layout references: \
  \*\* https://www.tinika-illustrations.com/shop
