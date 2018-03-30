$(document).ready(function() {
  var getFlexItemOptionTemplates = function(numberOfItems) {
    return ('<label>flex-grow' +
              '<input type="number" step="1" min="0" max="5" name="flex-grow">' +
            '</label>' +
            '<label> flex-order' +
              '<input type="number" step="1" min="-1" max="' + numberOfItems + '" name="order">' +
            '</label>');
  }

  $("input[type=radio]").on("change", function(e) {
    // get the radio buttons name and value
    var name = e.target.name.slice(2);
    var value = e.target.value;
    // find the flex box container by getting the data-for from the toggle
    //Container
    var flexContainer = $(e.target).closest(".toggle-panel").data("for");
    // apply chosen style
    if(name === "flex-direction") {
      $(flexContainer).find(".tracer").removeClass("active");
      $(flexContainer).find(".tracer." + value).addClass("active");
    }
    $(flexContainer).css(name, value);
  });

  $(".flex-child").on("change", "input[type='number']", function(e) {
    // grab css property name from input name
    var flexItemProp = e.target.name;
    //grab css prop value from value
    var flexItemVal = e.target.value;
    // apply style to flex child
    $(e.delegateTarget).css(flexItemProp, flexItemVal);
  });

  // find all flex items and append options to adjust their order and growth
  $(".flex-child").each(function(ind, elm) {
    //get number of flex items in flex Container
    var numOfItems = $(elm).siblings().length + 1;
    var elmOptions = getFlexItemOptionTemplates(numOfItems);
    //append options
    $(elm).append(elmOptions);
  });

});
