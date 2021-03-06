/* ************************************************************************

   Googly

   Copyright:
     2010-2011 Deutsche Telekom AG, Germany, http://telekom.com

************************************************************************ */

/**
 * Search for a name of a city to lookup weather for.
 */
qx.Class.define("googly.view.WeatherSearch", 
{
  extend : unify.view.StaticView,
  type : "singleton",

  members : 
  {
    // overridden
    getTitle : function(type) {
      return "Search";
    },
    
    
    // overridden
    isModal : function() {
      return true;
    },
    
    
    // overridden
    _createView : function() 
    {
      var layer = new unify.ui.Layer(this);

      var navigationBar = new unify.ui.NavigationBar(this);
      layer.add(navigationBar);

      var content = new unify.ui.Content;

      var searchField = this.__searchField = document.createElement("input");
      searchField.type = "text";
      content.add(searchField);
      layer.add(content);

      return layer;
    },
    
    
    // overridden
    _resumeView : function()
    {
      this.base(arguments);
      
      this.__searchField.value = unify.bom.Storage.get("weather/city");
    },
    
    
    // overridden
    _pauseView : function() 
    {
      this.base(arguments);
      
      if (this.__searchField.value != unify.bom.Storage.get("weather/city")) {
        unify.bom.Storage.set("weather/city", this.__searchField.value);
      }
    }
  }
});
