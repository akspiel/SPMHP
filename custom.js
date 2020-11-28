//start jquery
jQuery(document).ready(function($) {
  //menu lines
  $(".ubermenu-responsive-toggle").html('<i class="fa fa-bars"></i>');
  // decision tree dropdowns on faculty page
  $(".policy-single").click(function() {
    $(this)
      .next(".hidden-content")
      .slideToggle(600, "linear");
    if (!$(this).hasClass("toggle-close")) {
      $(this).addClass("toggle-close");
    } else {
      $(this).removeClass("toggle-close");
    }
  });
  //FAQs toggle
  $(".et_pb_toggle").click(function() {
	if (!$(this).hasClass("et_pb_toggle_open")) {
    $(this).addClass("et_pb_toggle_open")
	} else {
	$(this).removeClass("et_pb_toggle_open")
	 }
  });
  //adding data attributes to homepage calendar b/c they're being stripped from the html editor
  $('#btn-jan').attr('data-filter', '.january, .ongoing');
  $('#btn-feb').attr('data-filter', '.february, .ongoing');
  $('#btn-mar').attr('data-filter', '.march, .ongoing');
  $('#btn-talk').attr('data-filter', '.talk');
  $('#btn-behavior').attr('data-filter', '.behavior');
  $('#btn-mood').attr('data-filter', '.mood');
  $('#btn-all').attr('data-filter', '*');
  $('#btn-apps').attr('data-filter', '.apps');
  $('#btn-ai-an').attr('data-filter', '.ai-an');
  $('#btn-counseling-support').attr('data-filter', '.counseling-support');
  $('#btn-educational').attr('data-filter', '.educational');
  $('#btn-helping-others').attr('data-filter', '.helping-others');
  $('#btn-hotlines').attr('data-filter', '.hotlines');
  $('#btn-latinx').attr('data-filter', '.latinx');
  $('#btn-lgbtq').attr('data-filter', '.lgbtq');
  $('#btn-media').attr('data-filter', '.media');
  $('#btn-on-campus').attr('data-filter', '.on-campus');
  $('#btn-personal-experiences').attr('data-filter', '.personal-experiences');
  $('#btn-self-help-self-care').attr('data-filter', '.self-help-self-care');
  $('#btn-veterans').attr('data-filter', '.veterans');
 
  // homepage calendar filtering
  var $cgrid = $(".calendar-grid").isotope({
    itemSelector: ".event-item",
    layoutMode: "fitRows",
    filter: ".march, .ongoing",
    getSortData: {
      number: ".number parseInt"
    },
    sortBy: "number"
  });

  // bind filter button click
  $("#month-filters").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $cgrid.isotope({ filter: filterValue });
  });
  // when and how to help filtering
  var $bgrid = $(".circle-balls").isotope({
    itemSelector: ".bubble-item",
    layoutMode: "fitRows",
    filter: ".talk",
	transitionDuration: '0.8s',
	// only scale for reveal/hide transition
	hiddenStyle: {
	transform: 'scale(0.001)'
	},
	visibleStyle: {
	transform: 'scale(1)'
	}
  });
   $("#signs-filters").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $bgrid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function() {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
  
  //tab blocks
  var TabBlock = {
 s: {
 animLen: 200
 },
 
 init: function() {
 TabBlock.bindUIActions();
 TabBlock.hideInactive();
 },
 
 bindUIActions: function() {
 $('.tabBlock-tabs').on('click', '.tabBlock-tab', function(){
 TabBlock.switchTab($(this));
 });
 },
 
 hideInactive: function() {
 var $tabBlocks = $('.tabBlock');
 
 $tabBlocks.each(function(i) {
 var 
 $tabBlock = $($tabBlocks[i]),
 $panes = $tabBlock.find('.tabBlock-pane'),
 $activeTab = $tabBlock.find('.tabBlock-tab.is-active');
 
 $panes.hide();
 $($panes[$activeTab.index()]).show();
 });
 },
 
 switchTab: function($tab) {
 var $context = $tab.closest('.tabBlock');
 
 if (!$tab.hasClass('is-active')) {
 $tab.siblings().removeClass('is-active');
 $tab.addClass('is-active');
 
 TabBlock.showPane($tab.index(), $context);
 }
 },
 
 showPane: function(i, $context) {
 var $panes = $context.find('.tabBlock-pane');
 $panes.slideUp(TabBlock.s.animLen);
 $($panes[i]).slideDown(TabBlock.s.animLen);
 }
};

$(function() {
 TabBlock.init();
});
  //mobile tab blocks accordion
   $('.accordion .term').click(function () {
 		//If the item the user just clicked is hidden...
     if ($(this).next('.show-text').is(':hidden')) {
     //Hide all dropdown panels.
     $('.show-text').slideUp('fast');
     }
     //Toggle the paragraph below the term that was clicked.
     $(this).next('.show-text').slideToggle('fast');
     });
  // resource filtering

function getHashFilter() {
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}

// init Isotope
var $grid = $('.grid');

// bind filter button click
var $filterButtonGroup = $('.tag-filters');
$filterButtonGroup.on( 'click', 'button', function() {
  var filterAttr = $( this ).attr('data-filter');
  // set filter in hash
  location.hash = 'filter=' + encodeURIComponent( filterAttr );
});

var isIsotopeInit = false;

function onHashchange() {
  var hashFilter = getHashFilter();
  if ( !hashFilter && isIsotopeInit ) {
    return;
  }
  isIsotopeInit = true;
  // filter isotope
  $grid.isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
    // use filterFns
    filter: hashFilter || '*'
  });
  // set selected class on button
  if ( hashFilter ) {
    $filterButtonGroup.find('.is-checked').removeClass('is-checked');
    $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
  }
}

$filterButtonGroup.on( 'click', 'button', function() {
  onHashchange();
});
  
// trigger event handler to init Isotope
  
onHashchange();
  
  //flippy cards
  if (window.matchMedia('(min-width: 471px)').matches) {
	$(".flip-container").mouseenter(function() {
		$(this).addClass("hover")
		$(".flip-container.hover").not(this).removeClass("hover");
		})
	$(".flip-container").mouseleave(function() {
	$(this).removeClass("hover")
	})	
		};
    if (window.matchMedia('(max-width: 470px)').matches) {
        $(".front span").click(function() {
        var $flip = $(this).closest(".flip-container")
        $flip.addClass("hover")
            $(".flip-container.hover").not($flip).removeClass("hover");
            })
            };		
    $(".back").on('click', function(){
    $(this).closest(".flip-container.hover").removeClass("hover")
    });
  //emotions circle on coping with a loss page
     let emotion = ['Shock', 'Confusion', 'Guilt', 'Rejection', 'Anger', 'Despair'],
     shock = 'Shock',
     confusion = 'Confusion',
     guilt = 'Guilt',
     rejection = 'Rejection',
     anger = 'Anger',
     despair = 'Despair';
    function chooseWisely() {
     $.each(emotion, function(index, value) {
     $('#outer-ring-inner').append(`<div class="emotion-ball">${value}</div>`);
     });
     $('#outer-ring-inner > div:nth-child(1)').addClass('current-emotion-shock');
     $('.emotion-ball').on('click', function () {
     if($(this).text().match(shock)) {
     $('.emotion-ball').removeClass('current-emotion-confusion current-emotion-guilt current-emotion-rejection current-emotion-anger current-emotion-despair');
     $(this).addClass('current-emotion-shock');
     $('.response').html('<div class="response-inner-wrapper"><div class="response-inner"><p>“I feel numb”</p> <p>Feelings of being dazed or detached are common responses to suicide, especially at first.</p> </div><div id="response-shock-border"></div></div>');
     } 
     if($(this).text().match(anger)) {
     $('.emotion-ball').removeClass('current-emotion-shock current-emotion-confusion current-emotion-guilt current-emotion-rejection current-emotion-despair');
     $(this).addClass('current-emotion-anger');
     $('.response').removeClass('shock-response').html('<div class="response-inner-wrapper"><div class="response-inner"><p>“How could they do this to me?”</p> <p>You might feel like your loved one abandoned you, or be angry for missing warning signs.</p> </div><div id="response-anger-border"></div></div>');
     }
     if($(this).text().match(guilt)) {
     $('.emotion-ball').removeClass('current-emotion-shock current-emotion-confusion current-emotion-rejection current-emotion-anger current-emotion-despair');
     $(this).addClass('current-emotion-guilt');
     $('.response').html('<div class="response-inner-wrapper"><div class="response-inner"><p>“I should have<br />done more”</p> <p>You might replay “what if” and “if only” scenarios in your mind or feel regret about things unsaid.</p> </div><div id="response-guilt-border"></div></div>');
     }
     if($(this).text().match(despair)) {
     $('.emotion-ball').removeClass('current-emotion-shock current-emotion-confusion current-emotion-rejection current-emotion-anger current-emotion-guilt');
     $(this).addClass('current-emotion-despair');
    $('.response').html('<div class="response-inner-wrapper"><div class="response-inner"><p>“Why bother”</p> <p>You might be gripped by sadness, loneliness or helplessness.</p> </div><div id="response-despair-border"></div></div>');
     }
     if($(this).text().match(confusion)) {
     $('.emotion-ball').removeClass('current-emotion-shock current-emotion-guilt current-emotion-rejection current-emotion-anger current-emotion-despair');
     $(this).addClass('current-emotion-confusion');
     $('.response').html('<div class="response-inner-wrapper"><div class="response-inner"><p>“I just don’t understand why”</p> <p>Many people try to make some sense out of the death, or try to understand why their loved one took their life.</p> </div><div id="response-confusion-border"></div></div>');
     }
     if($(this).text().match(rejection)) {
     $('.emotion-ball').removeClass('current-emotion-shock current-emotion-confusion current-emotion-guilt current-emotion-anger current-emotion-despair');
     $(this).addClass('current-emotion-rejection');
     $('.response').html('<div class="response-inner-wrapper"><div class="response-inner"><p>“Why wasn’t I enough?”</p> <p>You might wonder why your relationship wasn’t enough to keep your loved one from taking their life.</p> </div><div id="response-rejection-border"></div></div>');
     }
     });
    }

    chooseWisely();
	//gears
   $(".center-gear-text").hover(function(){
   $(".gear-inner").css("animation-play-state", "running");
   }, function(){
   $(".gear-inner").css( "animation-play-state", "paused" );
   });
  //answer box question mark
   var Aheight = $('.answer-box').outerHeight();
   var Qheight = -(Aheight * .4);
   $('.q-mark').css('right', Qheight + 'px');
  //end jquery
});
