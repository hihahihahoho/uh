//====================LAZYLOAD INIT=================//
$(function($) {
    $(".lazyload").Lazy({
       placeholder:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAABHNCSVQICAgIfAhkiAAAAAtJREFUCJljYMAFAAAaAAGkN3n2AAAAAElFTkSuQmCC' ,
       afterLoad: function(el) {
          $(el).addClass('show');
          console.log('a');
          $(el).parents().closest(".lazyload-wrap").removeClass('load')
       }
    });
    $(".lazyload-pro").Lazy({
       placeholder:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAABHNCSVQICAgIfAhkiAAAAAtJREFUCJljYMAFAAAaAAGkN3n2AAAAAElFTkSuQmCC' ,
       afterLoad: function(el) {
          $(el).removeClass('blur');
       }
    });
});
//====================END LAZYLOAD INIT=================//