function newImage(arg) {
  if (document.images) {
    rslt = new Image();
    rslt.src = arg;
    return rslt;
  }
}

function changeImages() {
  if (document.images && (preloadFlag == true)) {
    for (var i=0; i<changeImages.arguments.length; i+=2) {
      document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
    }
  }
}

var preloadFlag = false;
function preloadImages() {
  if (document.images) {
    toplink1_over = newImage("/images/toplink1-over.gif");
    toplink2_over = newImage("/images/toplink2-over.gif");
    toplink3_over = newImage("/images/toplink3-over.gif");

    link1_over = newImage("/images/link1-over.gif");
    link2_over = newImage("/images/link2-over.gif");
    link3_over = newImage("/images/link3-over.gif");
    link4_over = newImage("/images/link4-over.gif");
    link5_over = newImage("/images/link5-over.gif");
    link6_over = newImage("/images/link6-over.gif");

    large_event_over   = newImage("/images/large-event-over.gif");
    small_event_over   = newImage("/images/small-event-over.gif");
    smallcopy_web_over = newImage("/images/smallcopy_web-over.gif");
    preloadFlag = true;
  }
}
